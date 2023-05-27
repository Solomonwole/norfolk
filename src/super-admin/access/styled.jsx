import { styled } from "styled-components";

export const AccessStyle = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #3c258e;
  color: #ffff;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  width: 100%;
  padding: 20px;

  input {
    height: 35px;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 10px;
    border: none;
    padding: 10px;
  }

  button {
    border: none;
    background: #fff;
    border-radius: 10px;
    color: #3c258e;
    font-weight: 700;
    height: 35px;
    cursor: pointer;
  }
`;
