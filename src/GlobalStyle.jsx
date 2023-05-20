import { styled } from "styled-components";

export const AuthHOne = styled.h1`
  color: #6e47ff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 32px;
  text-align: start;
`;
export const AuthHTwo = styled.h2`
  color: #6e47ff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-size: 28px;
  text-align: start;
`;

export const Button = styled.button`
  background: #6e47ff;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 100%;
  height: 56px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
`;
export const FormError = styled.div`
  margin-top: -12px;
  margin-bottom: 15px;
  span {
    color: #ff0000;
    font-size: 12px;
    font-style: italic;
  }
`;

export const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;