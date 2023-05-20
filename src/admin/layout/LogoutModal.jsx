import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import { AiOutlineClose } from "react-icons/ai";
import { auth } from "../../firebase/firebaseConfig";

function LogoutModal({ cancel }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    auth.signOut;
    navigate("/login");
  };
  return (
    <Layout>
      <Card>
        <Content>
          <Title>Log Out?</Title>
          <CloseIcon onClick={cancel}>
            <AiOutlineClose />
          </CloseIcon>
        </Content>
        <Text>Are you sure you want to Logout?</Text>
        <Btns>
          <GoBackButton onClick={cancel}>Go Back</GoBackButton>
          <LogoutButton onClick={handleLogout}>Log Out</LogoutButton>
        </Btns>
      </Card>
    </Layout>
  );
}

LogoutModal.propTypes = {
  cancel: PropTypes.func.isRequired,
};
export default LogoutModal;

const Layout = styled.div`
  background: rgba(0, 0, 0, 0.8);
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
const Card = styled.div`
  width: 525px;
  height: 258px;
  background: #ffffff;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 525px) {
    width: 90%;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  color: #eb0e3e;
`;

const CloseIcon = styled.div`
  width: 30px;
  height: 30px;
  background: #f1f5f9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.p`
  font-size: 14px;
  margin-top: -30px;
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
const LogoutButton = styled(Button)`
  background: #eb0e3e;
  color: #ffffff;
  border: none;
`;

const GoBackButton = styled(Button)`
  border: 0.7px solid rgba(15, 23, 42, 0.3);
  color: rgba(15, 23, 42, 0.6);
  background: none;
`;
