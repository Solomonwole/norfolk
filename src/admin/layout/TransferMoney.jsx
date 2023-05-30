import { AiOutlineClose } from "react-icons/ai";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import { FormError } from "../../GlobalStyle";
import { Link } from "react-router-dom";

function TransferMoney({ cancel }) {
  const [loading, setLoading] = useState(false);
  const [acctName, setAcctName] = useState("");
  const [acctNo, setAcctNo] = useState("");
  const [routing, setRouting] = useState("");
  const [swift, setSwift] = useState("");
  const [desc, setDesc] = useState("");
  const [bank, setBank] = useState("");
  const [error, setError] = useState(false);
  const [invalid, setInvalid] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    if (acctNo.length > 8) {
      setInvalid(false);
      setLoading(true);
      setTimeout(() => {
        setError(true);
        setLoading(false);
      }, 7000);
    } else {
      setInvalid(true);
    }
  };
  return (
    <>
      {!error ? (
        <Layout>
          <Card>
            <Content>
              <Title>Transfer Money</Title>
              <CloseIcon onClick={cancel}>
                <AiOutlineClose />
              </CloseIcon>
            </Content>
            <br />
            <FormContainer>
              <form onSubmit={handleForm}>
                <Label>Choose Bank</Label>
                <Input
                  type="text"
                  placeholder="Bank name"
                  name="bank"
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
                  onChange={(e) => setAcctName(e.target.value)}
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
                <Label>Wire Routing</Label>
                <Input
                  type="number"
                  name="routing"
                  placeholder="123456789"
                  value={routing}
                  onChange={(e) => setRouting(e.target.value)}
                  disabled={loading}
                  
                />
                <Label>Swift Code</Label>
                <Input
                  type="text"
                  name="swift"
                  placeholder="AAAA-BB-CC-123"
                  value={swift}
                  onChange={(e) => setSwift(e.target.value)}
                  disabled={loading}
                  
                />
                <Label>Description</Label>
                <Textarea
                  type="text"
                  name="swift"
                  placeholder="Enter a description"
                  rows="7"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  disabled={loading}
                  required
                />
                <Btns>
                  <GoBackButton type="button" onClick={cancel}>
                    Close
                  </GoBackButton>
                  <LogoutButton type="submit" onClick={() => {}}>
                    {!loading ? "Done" : <div className="loader"></div>}
                  </LogoutButton>
                </Btns>
              </form>
            </FormContainer>
          </Card>
        </Layout>
      ) : (
        <Layout>
          <Card error>
            <Content>
              <Title error>Transfer Error</Title>
              <CloseIcon onClick={cancel}>
                <AiOutlineClose />
              </CloseIcon>
            </Content>
            <Text>Unable to complete transfer</Text>
            <Link to="/support">Contact support</Link>
            <Btns>
              <GoBackButton type="button" onClick={cancel}>
                Close
              </GoBackButton>
            </Btns>
          </Card>
        </Layout>
      )}
    </>
  );
}
TransferMoney.propTypes = {
  cancel: PropTypes.func.isRequired,
};
export default TransferMoney;

export const Layout = styled.div`
  background: rgba(0, 0, 0, 0.699);
  backdrop-filter: blur(15px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
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
    width: 80px;
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
  margin-top: -30px;
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

export const FormContainer = styled.div`
  max-width: 400px;
  width: 400px;
  margin: auto;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #0f172a;
  font-size: 13px;
`;

export const Input = styled.input`
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
export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #475569;
  border-radius: 8px;
  font-family: "Mulish", sans-serif;
  /* height: 50px; */

  &::placeholder {
    color: #9e9ea7;
  }

  &:focus,
  &:hover {
    outline: none;
    border: 1px solid #475569;
  }
`;

const Btns = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const Button = styled.button`
  width: 99px;
  height: 44px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
`;

const GoBackButton = styled(Button)`
  border: 0.7px solid rgba(15, 23, 42, 0.3);
  color: rgba(15, 23, 42, 0.6);
  background: none;
`;

const LogoutButton = styled(Button)`
  background: #6e47ff;
  color: #ffffff;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Drop Down

