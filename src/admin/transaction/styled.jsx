import { styled } from "styled-components";

export const Welcome = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .status-div {
    position: relative;

    .exp-options {
      position: absolute;
      margin-top: 10px;

      background: #6e47ff;
      box-shadow: 0px 4px 10px -4px rgba(11, 13, 23, 0.1);
      border-radius: 5px;
      padding: 5px 0;
      width: 137px;
      z-index: 10;

      button {
        text-align: start;
        font-weight: 500;
        padding: 5px 10px;
        width: 100%;
        border: none;
        font-size: 14px;
        margin: 5px 0;
        background: transparent;
        color: #fff;
      }
    }
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  p {
    font-size: 14px;
  }

  .pag{
    display: flex;
    align-items: center;
  }
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  button {
    width: 43px;
    height: 43px;
    background: #f3e9ff;
    border-radius: 10px;
    border: none;

    color: #8c30f5;
  }

  button:hover {
    color: #fff;
    background: #8c30f5;
  }
`;
