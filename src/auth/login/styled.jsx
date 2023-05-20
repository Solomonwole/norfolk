import { styled } from "styled-components";

export const AuthScreen = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  height: 100vh;
  background: #fff;
  overflow: hidden;

  .right {
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .head {
      max-width: 400px;
      width: 400px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin-bottom: 50px;

      p{
        margin-top: 15px;
      }

      @media (max-width: 480px) {
        width: 100%;
      }
    }
  }

  a {
    color: #6e47ff;
  }
  .acct {
    margin: 20px 0;
  }

  @media (max-width: 880px) {
    .left {
      display: none;
    }
    display: block;
    overflow: hidden;
    height: 80vh;

    .right {
      width: 100%;
      height: 100%;
    }
  }
`;

export const FormContainer = styled.div`
  max-width: 400px;
  width: 400px;
  /* margin: auto; */
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
`;

export const PasswordContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  border: none;
  padding: 0;
`;

export const PasswordInput = styled(Input)`
  height: 50px;
  border: 1px solid #475569;
  border-radius: 8px;
`;

export const TogglePasswordButton = styled.button`
  position: absolute;
  top: 15px;
  right: 10px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 20px;
  color: #6e47ff;
`;

export const ForgotPasswordLink = styled.div`
  display: block;
  text-align: right;
  margin-bottom: 15px;
  color: #6e47ff;
`;

export const RememberMeContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const Checkbox = styled.input`
  margin-right: 10px;
`;

export const RememberMeText = styled.span`
  font-size: 14px;
`;
