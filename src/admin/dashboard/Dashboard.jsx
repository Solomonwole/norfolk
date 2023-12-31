import { useEffect, useState } from "react";
import { AuthHTwo } from "../../GlobalStyle";
import AdminDashboardLayout from "../layout/AdminDashboardLayout";
import {
  // Box,
  StatusButton,
  Card,
  CardGrid,
  CardHeader,
  Grid,
  SmallCard,
  StatusCell,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
  TransactionCard,
  Welcome,
} from "./styled";
// import { BsGraphDownArrow, BsGraphUpArrow } from "react-icons/bs";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
// import { transactions } from "./dummydata";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
// import { Pie, Doughnut } from "react-chartjs-2";
import "chart.js/auto";
import { Doughnut, Bar } from "react-chartjs-2";
import { options } from "./piechartinfo";
import { styled } from "styled-components";

const StatusText = styled.span`
  color: ${(props) => (props.status === "active" ? "#00D964" : "#ff0000")};
  text-transform: capitalize;

  display: none;

  @media (max-width: 480px) {
    display: block;
  }
`;

function Dashboard() {
  const name = localStorage.getItem("Name");
  const email = localStorage.getItem("Email");
  const status = localStorage.getItem("Status");
  const [balance, setBalance] = useState("");
  // const [earned, setEarned] = useState("");
  // const [invested, setInvested] = useState("");
  // const [mode, setMode] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [statusState, setStatusState] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const getTransaction = async () => {
      const docRef = doc(db, "users", email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setBalance(data.balance);
        // setEarned(data.earned);
        // setInvested(data.invested);
        // setMode(data.mode);
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

  // const calculatePercentage = (value, total) => {
  //   if (total === 0) {
  //     return 0;
  //   }
  //   return ((value / total) * 100).toFixed(2);
  // };

  // const totalTransactions = transactions.length;
  // const creditTransactions = transactions.filter(
  //   (transaction) => transaction.type === "credit"
  // ).length;
  // const debitTransactions = transactions.filter(
  //   (transaction) => transaction.type === "debit"
  // ).length;
  const pendingTransactions = transactions.filter(
    (transaction) => transaction.status === "pending"
  ).length;
  const successTransactions = transactions.filter(
    (transaction) => transaction.status === "successful"
  ).length;
  const failedTransactions = transactions.filter(
    (transaction) => transaction.status === "failed"
  ).length;

  const doughnutChartData = {
    labels: ["Successful", "Failed", "Pending"],
    datasets: [
      {
        data: [successTransactions, failedTransactions, pendingTransactions],
        // data: [creditTransactions, debitTransactions, pendingTransactions],
        backgroundColor: ["#2CBB76", "#FF4408", "#FFD361"],
        borderColor: ["#2CBB76", "#FF4408", "#FFD361"],
        borderWidth: 4,
        hoverBorderColor: ["#2CBB76", "#FF4408", "#FFD361"],
        hoverBorderWidth: 6,
        cutout: "70%",
      },
    ],
  };
  const bardata = {
    labels: ["Successful", "", "", "Failed", "", "", "Pending"],
    datasets: [
      {
        label: "",
        data: [
          successTransactions,
          "",
          "",
          failedTransactions,
          "",
          "",
          pendingTransactions,
          successTransactions,
        ],
        // data: [66, 40, 52, 50, 22, 70, 36],
        backgroundColor: ["#2BBB76", "", "", "#FF4407", "", "", "#FFD361"],
        borderRadius: 50,
      },
      // {
      //   label: "Failed",
      //   // data: debitTransactions,
      //   data: [failedTransactions, failedTransactions, failedTransactions, failedTransactions],
      //   backgroundColor: "#FF4407",
      //   borderRadius: 50,
      // },
      // {
      //   label: "Pending",
      //   // data: pendingTransactions,
      //   data: [pendingTransactions, pendingTransactions, pendingTransactions, pendingTransactions],
      //   backgroundColor: "#FFD361",
      //   borderRadius: 50,
      // },
    ],
  };

  // const transactionLabels = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];

  //   const resolvedTransactions = transactionLabels.map((day) =>
  //   transactions.filter(
  //     (transaction) => transaction.filterType === transaction.amount
  //   ).length
  // );

  // const pendingTransactions = transactionLabels.map((day) =>
  //   transactions.filter(
  //     (transaction) => transaction.filterType === day && transaction.amount
  //   ).length
  // );

  // const bardata = {
  //   labels: transactionLabels,
  //   datasets: [
  //     {
  //       label: "Successful",
  //       // data: resolvedTransactions,
  //       data: [66, 40, 52, 50, 22, 70, 36],
  //       backgroundColor: "#908DFF",
  //       borderRadius: 50,
  //     },
  //     {
  //       label: "Pending",
  //       // data: pendingTransactions,
  //       data: [66, 40, 52, 50, 22, 70, 36],
  //       backgroundColor: "#FFD361",
  //       borderRadius: 50,
  //     },
  //   ],
  // };
  const optionss = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        ticks: {
          min: 0,
          max: 80,
          stepSize: 10,
          font: { size: 10 },
        },
        grid: {
          tickBorderDash: [80, 10],
          color: "#F5F5F5",
          tickLength: 0,
          tickColor: "white",
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: { size: 11 },
        },
      },
    },
  };
  return (
    <AdminDashboardLayout>
      <Welcome>
        <div className="div">
          <AuthHTwo>Dashboard</AuthHTwo>
          <p>Welcome {name}</p>
        </div>
        <div>
          <StatusText status={status}>{status}</StatusText>
        </div>
      </Welcome>
      <Grid>
        {/* <Box value="2.3">
          <p className="title">Total Balance</p>
          <h2>${balance}</h2>
          <p>
            <span>
              <BsGraphUpArrow /> &nbsp;2.3%
            </span>
          </p>
        </Box>
        <Box value="2.5">
          <p className="title">Total Earned</p>
          <h2>${earned}</h2>
          <p>
            <span>
              <BsGraphDownArrow /> &nbsp;2.5%
            </span>
            this week
          </p>
        </Box>
        <Box value="3.5">
          <p className="title">Total Invested</p>
          <h2>${invested}</h2>
          <p>
            <span>
              <BsGraphUpArrow /> &nbsp;3.5%
            </span>
          </p>
        </Box>
        <Box value="1.5">
          <p className="title">Total Transactions Made</p>
          <h2>${mode}</h2>
          <p>
            <span>
              <BsGraphDownArrow /> &nbsp;1.5%
            </span>
          </p>
        </Box> */}
      </Grid>

      <CardGrid>
        <Card>
          <p className="title">Total Balance</p>
          <h2>${balance.toLocaleString()}</h2>
          <br />
          <div className="chart">
            <Bar data={bardata} options={optionss} />
          </div>
        </Card>

        <SmallCard>
          <h3>Transactions</h3>
          <div>
            <Doughnut data={doughnutChartData} options={options} />
          </div>

          <div className="flex">
            <div className="type">
              <div className="green"></div>
              <span>
                {/* {calculatePercentage(creditTransactions, totalTransactions)}% */}
                Successful
              </span>
            </div>
            <div className="type">
              <div className="red"></div>
              <span>
                {/* {calculatePercentage(creditTransactions, totalTransactions)}% */}
                Failed
              </span>
            </div>

            <div className="type">
              <div className="pending"></div>
              <span>
                {/* {calculatePercentage(debitTransactions, totalTransactions)}% */}
                Pending
              </span>
            </div>
          </div>
        </SmallCard>
      </CardGrid>

      {/* Transaction  */}

      <TransactionCard>
        <CardHeader>
          <h3>Transaction History</h3>

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

                <button onClick={() => filterByStatus("pending")}>
                  Pending
                </button>
                <button onClick={() => filterByStatus("failed")}>Failed</button>
              </div>
            )}
          </div>
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
            {transactions.length > 0 ? (
              <>
                {filtered.slice(0, 10).map((transaction) => (
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
    </AdminDashboardLayout>
  );
}

export default Dashboard;
