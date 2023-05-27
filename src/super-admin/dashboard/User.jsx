import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SuperLayout from "../../admin/layout/SuperLayout";
import {
  CardHeader,
  StatusCell,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TransactionCard,
  Welcome,
} from "../../admin/dashboard/styled";
import { AuthHTwo, Button } from "../../GlobalStyle";
import { Form } from "./styled";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { ImBin } from "react-icons/im";

function User() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [newTransaction, setNewTransaction] = useState({
    amount: 0,
    date: "",
    desc: "",
    id: "",
    status: "",
    type: "",
  });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        const fetchedUsers = [];
        querySnapshot.forEach((doc) => {
          fetchedUsers.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        setUsers(fetchedUsers);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const user = users.find((user) => user.id === id); // Updated comparison
  console.log(user);
  useEffect(() => {
    if (user) {
      setName(user.data.name);
      setStatus(user.data.status);
      setBalance(user.data.balance);
      setTransactions(user.data.transactions || []);
    }
  }, [user]);

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      // Update the name in Firestore
      const userRef = doc(db, "users", id);
      await updateDoc(userRef, { name, status, balance });

      toast.success("User updated successfully!");
      navigate("/super");
    } catch (error) {
      console.log("Error updating name:", error);
      toast.error(error.message);
    }
  };

  const handleTransactionAdd = async (e) => {
    e.preventDefault();

    try {
      const transactionId = Date.now().toString();
      const updatedTransactions = [
        ...transactions,
        { ...newTransaction, id: transactionId },
      ];

      const userRef = doc(db, "users", id);
      await updateDoc(userRef, { transactions: updatedTransactions });

      toast.success("Transaction added successfully!");
      setNewTransaction({
        amount: 0,
        date: "",
        desc: "",
        id: "",
        status: "",
        type: "",
      });
      navigate("/super");
    } catch (error) {
      console.log("Error adding transaction:", error);
      toast.error(error.message);
    }
  };

  const handleTransactionDelete = async (transactionId) => {
    try {
      const updatedTransactions = transactions.filter(
        (transaction) => transaction.id !== transactionId
      );

      const userRef = doc(db, "users", id);
      await updateDoc(userRef, { transactions: updatedTransactions });

      toast.success("Transaction deleted successfully!");
      navigate("/super");
    } catch (error) {
      console.log("Error deleting transaction:", error);
      toast.error(error.message);
    }
  };

  if (user) {
    return (
      <SuperLayout>
        <Welcome>
          <div className="div">
            <AuthHTwo>{user.data.name}</AuthHTwo>
            <p>edit info</p>
          </div>
        </Welcome>

        <Form onSubmit={handleForm}>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Status (active or inactive)</label>
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="lower"
            required
          />
          <label>Account Balance</label>
          <input
            type="number"
            value={balance}
            onChange={(e) => setBalance(e.target.value)}
            required
          />
          <Button type="submit">Save</Button>
        </Form>

        {/* Transaction  */}

        <TransactionCard>
          <CardHeader>
            <h3>Transaction History</h3>
          </CardHeader>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderCell>Transaction ID</TableHeaderCell>
                <TableHeaderCell>Date</TableHeaderCell>
                <TableHeaderCell>Description</TableHeaderCell>
                <TableHeaderCell>Transaction Type</TableHeaderCell>
                <TableHeaderCell>Amount</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
                <TableHeaderCell>Delete</TableHeaderCell>
              </TableRow>
            </TableHeader>

            <TableBody>
              {user.data.transactions.length > 0 ? (
                <>
                  {user.data.transactions.map((transaction) => (
                    <TableRow key={transaction.id}>
                      <TableCell>{transaction.id}</TableCell>
                      <TableCell>{transaction.date}</TableCell>
                      <TableCell>{transaction.desc}</TableCell>
                      <TableCell>{transaction.type}</TableCell>
                      <TableCell>
                        ${transaction.amount.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <StatusCell status={transaction.status}>
                          {transaction.status}
                        </StatusCell>
                      </TableCell>
                      <TableCell>
                        <Button
                          onClick={() =>
                            handleTransactionDelete(transaction.id)
                          }
                        >
                          <ImBin />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              ) : (
                <TableRow>
                  <TableCell>No transactions!</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TransactionCard>

        {/* Transaction add form */}
        <Welcome>
          <div className="div">
            <AuthHTwo>Add Transaction</AuthHTwo>
            <p>add new transaction</p>
          </div>
        </Welcome>

        <Form onSubmit={handleTransactionAdd}>
          <label>ID: (all ID must be different)</label>
          <input
            type="text"
            value={newTransaction.id}
            onChange={(e) =>
              setNewTransaction({
                ...newTransaction,
                id: e.target.value,
              })
            }
            required
          />
          <label>Date: </label>
          <input
            type="date"
            value={newTransaction.date}
            className="lower"
            onChange={(e) =>
              setNewTransaction({
                ...newTransaction,
                date: e.target.value,
              })
            }
            required
          />

          <label>Description: (eg; deposit) </label>
          <input
            type="text"
            value={newTransaction.desc}
            className="lower"
            onChange={(e) =>
              setNewTransaction({
                ...newTransaction,
                desc: e.target.value,
              })
            }
            required
          />

          <label>Type: (credit or debit)</label>
          <input
            type="text"
            value={newTransaction.type}
            className="lower"
            onChange={(e) =>
              setNewTransaction({
                ...newTransaction,
                type: e.target.value,
              })
            }
            required
          />

          <label>Amount: </label>
          <input
            type="text"
            value={newTransaction.amount}
            onChange={(e) =>
              setNewTransaction({
                ...newTransaction,
                amount: e.target.value,
              })
            }
            required
          />
          <label>Status: (pending or failed or successful)</label>
          <input
            type="text"
            value={newTransaction.status}
            className="lower"
            onChange={(e) =>
              setNewTransaction({
                ...newTransaction,
                status: e.target.value,
              })
            }
            required
          />

          <Button type="submit">Add Transaction</Button>
        </Form>
      </SuperLayout>
    );
  }

  return null;
}

export default User;
