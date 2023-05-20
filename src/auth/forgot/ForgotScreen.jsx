import Image from "../assets/image.jpg";
import { AuthHOne, Button } from "../../GlobalStyle";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthScreen, FormContainer, Input, Label } from "../login/styled";
import { AiOutlineClose } from "react-icons/ai";
import Mail from "../assets/mail.svg";
import { styled } from "styled-components";
import { Layout } from "../../admin/layout/TransferMoney";

function ForgotScreen() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const handleForgot = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email).then(() => {
        setLoading(false);
        setModal(true);
        toast.success("sent");
      });
    } catch (error) {
      setLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      {!modal ? (
        <AuthScreen>
          <div className="left">
            <img src={Image} alt="" />
          </div>

          <div className="right">
            <div className="head">
              <AuthHOne>Forgot Password?</AuthHOne>
              <p>
                An email will be sent with instructions to reset your password.
              </p>
            </div>

            <FormContainer>
              <form onSubmit={handleForgot}>
                <Label>Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="johndoe@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />

                <Button type="submit">
                  {loading ? <div className="loader"></div> : "Continue"}
                </Button>
              </form>
            </FormContainer>

            <p className="acct">
              Remember your password? <Link to="/login">Login</Link>
            </p>
          </div>
        </AuthScreen>
      ) : (
        <Layout>
          <Card>
            <Content>
              <Title>Email Sent!</Title>
              <CloseIcon onClick={() => setModal(false)}>
                <AiOutlineClose />
              </CloseIcon>
            </Content>
            <Text>Please check your email for further instructions</Text>
            <img src={Mail} alt="" />
            <Button onClick={() => navigate("/login")}>Go to Login</Button>
          </Card>
        </Layout>
      )}
    </>
  );
}

export default ForgotScreen;

export const Card = styled.div`
  width: 525px;
  height: ${(props) => (props.error ? "258px" : "")};
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 130px;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  @media (max-width: 525px) {
    width: 90%;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.h2`
  color: ${(props) => (props.error ? "#ee1400" : "#6e47ff")};
`;
export const Text = styled.p`
  font-size: 14px;
  margin-top: 30px;
`;
export const CloseIcon = styled.div`
  width: 30px;
  height: 30px;
  background: #f1f5f9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
