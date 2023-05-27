import { useEffect, useState } from "react";
import { AuthHTwo, Button } from "../../GlobalStyle";
import {
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TransactionCard,
  Welcome,
} from "../../admin/dashboard/styled";
import SuperLayout from "../../admin/layout/SuperLayout";
import { AccessStyle } from "../access/styled";
import { db } from "../../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";

function Super() {
  const isSuper = localStorage.getItem("super");
  const [users, setUsers] = useState([]);

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
  localStorage.setItem("users", JSON.stringify(users));
  console.log(users);
  return (
    <>
      {isSuper ? (
        <SuperLayout>
          <Welcome>
            <div className="div">
              <AuthHTwo>Dashboard</AuthHTwo>
            </div>
          </Welcome>

          <TransactionCard>
            <CardHeader>
              <h3>Users List</h3>
            </CardHeader>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderCell>Email</TableHeaderCell>
                  <TableHeaderCell>Name</TableHeaderCell>
                  <TableHeaderCell>Password</TableHeaderCell>
                  <TableHeaderCell>Accont Balance</TableHeaderCell>
                  <TableHeaderCell>Status</TableHeaderCell>
                  <TableHeaderCell></TableHeaderCell>
                </TableRow>
              </TableHeader>

              <TableBody>
                {users ? (
                  <>
                    {users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>{user.id}</TableCell>
                        <TableCell>{user.data.name}</TableCell>
                        <TableCell>{user.data.password}</TableCell>
                        <TableCell>
                          ${user.data.balance.toLocaleString()}
                        </TableCell>
                        <TableCell>{user.data.status}</TableCell>
                        <TableCell>
                          <Link to={`/user/${user.id}`}>
                            {" "}
                            <Button>View</Button>
                          </Link>
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                ) : (
                  <TableRow>
                    <TableCell>No Users</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TransactionCard>
        </SuperLayout>
      ) : (
        <AccessStyle>Yes! How can I help you?</AccessStyle>
      )}
    </>
  );
}

export default Super;
