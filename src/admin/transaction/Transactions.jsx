import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { AuthHTwo } from "../../GlobalStyle";
import {
  StatusButton,
  StatusCell,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TransactionCard,
} from "../dashboard/styled";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";
import { CardHeader, StyledLi, Welcome } from "./styled";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

function Transactions() {
  const email = localStorage.getItem("Email");
  const [transactions, setTransactions] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [statusState, setStatusState] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [transactionsPerPage] = useState(20);

  useEffect(() => {
    const getTransaction = async () => {
      const docRef = doc(db, "users", email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setTransactions(data.transactions);
        setFiltered(data.transactions);
        console.log("Transactions", data);
      } else {
        console.log("No such document!");
      }
    };

    getTransaction();
  }, [email]);

  const filterByStatus = (status) => {
    setFiltered(
      transactions.filter((transaction) => transaction.status === status)
    );
    setStatusState(false);
  };

  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = filtered.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );

  const pageNumbers = Math.ceil(transactions.length / transactionsPerPage);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <AdminDashboardLayout>
      <Welcome>
        <AuthHTwo>Transactions</AuthHTwo>
        <div className="status-div">
          <StatusButton onClick={() => setStatusState(!statusState)}>
            Filter Status <MdOutlineKeyboardArrowDown className="icon" />
          </StatusButton>
          {statusState && (
            <div className="exp-options">
              <button
                onClick={() => {
                  setFiltered(transactions);
                  setStatusState(false);
                }}
              >
                All Status
              </button>
              <button onClick={() => filterByStatus("successful")}>
                Successful
              </button>
              <button onClick={() => filterByStatus("pending")}>Pending</button>
              <button onClick={() => filterByStatus("failed")}>Failed</button>
            </div>
          )}
        </div>
      </Welcome>

      {/* Transaction  */}
      <TransactionCard>
        <CardHeader>
          <p>
            Showing {currentPage} - {pageNumbers}
          </p>

          {transactions.length > 19 && (
            <div className="pag">
              <StyledLi>
                <button onClick={previousPage} disabled={currentPage === 1}>
                  <MdKeyboardArrowLeft />
                </button>
              </StyledLi>

              <StyledLi>
                <button
                  onClick={nextPage}
                  disabled={indexOfLastTransaction >= transactions.length}
                >
                  <MdKeyboardArrowRight />
                </button>
              </StyledLi>
            </div>
          )}
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
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>
                <TableCell>{transaction.date}</TableCell>
                <TableCell>{transaction.desc}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>${transaction.amount}</TableCell>
                <TableCell>
                  <StatusCell status={transaction.status}>
                    {transaction.status}
                  </StatusCell>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TransactionCard>
    </AdminDashboardLayout>
  );
}

export default Transactions;
