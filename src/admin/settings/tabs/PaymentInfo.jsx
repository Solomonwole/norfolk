import { FormContainer, Input, Label } from "../../layout/TransferMoney";
import { Button, FormError } from "../../../GlobalStyle";
import { useEffect, useState } from "react";
import { Box, Grid } from "../../support/styled";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../../../firebase/firebaseConfig";
import { toast } from "react-toastify";

function PaymentInfo() {
  const [loading, setLoading] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [bank, setBank] = useState("");
  const [routing, setRouting] = useState("");
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
        setRouting(data.routing);

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
        await updateDoc(userDocRef, {
          bank: bank,
          acctno: acctNo,
          routing: routing,
        });
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

            <Input
              type="text"
              name="bank"
              placeholder="Bank Name"
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              disabled={loading}
              required
            />

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

            <Label>Routing Number</Label>
            <Input
              type="number"
              name="acctNo"
              placeholder="123456789"
              value={routing}
              onChange={(e) => setRouting(e.target.value)}
              disabled={loading}
              required
            />
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
