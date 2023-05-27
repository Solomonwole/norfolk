import { styled } from "styled-components";

export const Form = styled.form`
  margin: 30px 0;
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: -15px;
  }
  input {
    margin: 20px 0;
    padding: 10px;
    height: 40px;
  }

  .lower {
    text-transform: lowercase;
  }
`;
