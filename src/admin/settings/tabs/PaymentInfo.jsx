import { styled } from "styled-components";
import { FormContainer, Input, Label } from "../../layout/TransferMoney";
import { Button, FormError } from "../../../GlobalStyle";
import { useEffect, useState } from "react";
import { Box, Grid } from "../../support/styled";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebaseConfig";
import { toast } from "react-toastify";

const banks = [
  { value: "Banco Nacional de Panamá", label: "Banco Nacional de Panamá" },
  { value: "Banco General", label: "Banco General" },
  {
    value: "Banco Latinoamericano de Comercio Exterior (Bladex)",
    label: "Banco Latinoamericano de Comercio Exterior (Bladex)",
  },
  { value: "Banco Panamá", label: "Banco Panamá" },
  { value: "Banco Aliado", label: "Banco Aliado" },
  { value: "Banistmo", label: "Banistmo" },
  { value: "Banco Davivienda Panamá", label: "Banco Davivienda Panamá" },
  { value: "Banco Continental", label: "Banco Continental" },
  { value: "Banco Agrícola Comercial", label: "Banco Agrícola Comercial" },
  { value: "Banco Cathay", label: "Banco Cathay" },
  { value: "Banco General Costa Rica", label: "Banco General Costa Rica" },
];
function PaymentInfo() {
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [bank, setBank] = useState("");
  const acctName = localStorage.getItem("Name");
  const email = localStorage.getItem("Email");
  const [acctNo, setAcctNo] = useState("");

  useEffect(() => {
    const getBank = async () => {
      const docRef = doc(db, "users", email);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setBank(data.bank);
        setAcctNo(data.acctno);

        // setLoading(false);
        console.log("Transactions", data);
      } else {
        console.log("No such document!");
      }
    };

    getBank();
  }, [email]);

  const handleForm = async (e) => {
    e.preventDefault();

    if (acctNo.length > 8) {
      setInvalid(false);
      setLoading(true);

      try {
        const user = auth.currentUser;
        const userDocRef = doc(db, "users", user.email);
        await updateDoc(userDocRef, { bank: bank, acctno: acctNo });
        toast.success("Saved");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        toast.error(error.message);
        console.log(error);
      }
    } else {
      setInvalid(true);
    }
  };
  return (
    <Grid>
      <Box>
        <FormContainer>
          <form onSubmit={handleForm}>
            <Label>Choose Bank</Label>
            <Select
              type="text"
              name="bank"
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              disabled={loading}
              required
            >
              <Option disabled defaultValue="Select bank">
                Select bank
              </Option>
              {banks.map((bank) => (
                <Option key={bank.value} value={bank.value}>
                  {bank.label}
                </Option>
              ))}
            </Select>
            <Label>Account Name</Label>
            <Input
              type="text"
              name="acctname"
              placeholder="John Doe"
              value={acctName}
              disabled={loading}
              required
            />
            <Label>Account Number</Label>
            <Input
              type="number"
              name="acctNo"
              placeholder="123456789"
              value={acctNo}
              onChange={(e) => setAcctNo(e.target.value)}
              disabled={loading}
              required
            />
            {invalid && (
              <FormError>
                <span>Invalid account number</span>
              </FormError>
            )}
            <Button type="submit">
              {!loading ? "Save" : <div className="loader"></div>}
            </Button>
          </form>
        </FormContainer>
      </Box>
    </Grid>
  );
}

export default PaymentInfo;

// Drop Down
const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #475569;
  border-radius: 8px;
  height: 50px;

  &::placeholder {
    color: #9e9ea7;
  }

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid #475569;
  }
`;

const Option = styled.option`
  &::placeholder {
    color: #9e9ea7;
  }
`;
