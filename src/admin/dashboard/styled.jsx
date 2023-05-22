import { css, styled } from "styled-components";

export const Welcome = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-family: "Plus Jakarta Sans", sans-serif;
    color: #0f172a;
    opacity: 0.5;
    font-size: 400;
  }
`;

export const Grid = styled.div`
  margin: 32px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;

  @media (max-width: 1338px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (max-width: 1108px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 582px) {
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  width: 273px;
  height: 140px;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .title {
    color: #1e293b;
    font-weight: 700;
  }

  h2 {
    color: #0f172a;
  }

  span {
    margin-right: 5px;
    ${(props) =>
      parseFloat(props.value) < 2.5
        ? css`
            color: #eb0e3e;
          `
        : css`
            color: #08ae68;
          `};
  }

  @media (max-width: 1338px) {
    width: 100%;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;

  @media (max-width: 884px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  width: 734px;
  height: 493px;
  /* height: 1050px; */
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;

  .chart {
    width: 484px;
    height: 380px;

    @media (max-width: 480px) {
      width: 100%;
    }
  }

  p {
    font-size: 14px;
  }

  h2 {
    /* color: #6e47ff; */
  }
  @media (max-width: 884px) {
    width: 100%;
  }
`;
export const SmallCard = styled.div`
  width: 100%;
  height: 493px;
  background: #ffffff;
  border-radius: 10px;
  padding: 20px;

  h3 {
    color: #0f172a;
  }

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 20px;

    .type {
      display: flex;
      align-items: center;

      span {
        color: #0f172a;
        opacity: 0.7;
      }
    }

    .green {
      background: #2cbb76;
      border-radius: 5px;
      width: 15px;
      height: 15px;
      margin-right: 10px;
    }
    .red {
      background: #ff4408;
      border-radius: 5px;
      width: 15px;
      height: 15px;
      margin-right: 10px;
    }
    .pending {
      background: #ffd361;
      border-radius: 5px;
      width: 15px;
      height: 15px;
      margin-right: 10px;
    }
  }
  @media (max-width: 884px) {
    width: 100%;
  }
`;

// Transactions

export const TransactionCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 0;
  margin: 32px 0;
  overflow-x: scroll;

  min-height: 300px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  h3 {
    color: #0f172a;
    font-family: "Plus Jakarta Sans", sans-serif;
    font-size: 20px;
  }

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
        cursor: pointer;
      }
    }
  }
`;

const Button = styled.button`
  width: 130px;
  height: 44px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  margin-left: 20px;
`;

export const StatusButton = styled(Button)`
  border: 0.7px solid rgba(15, 23, 42, 0.3);
  color: rgba(15, 23, 42, 0.6);
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    font-size: 20px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.thead`
  background-color: #f7f6f9;
`;

export const TableHeaderCell = styled.th`
  padding: 20px 12px;
  text-align: left;
  color: #0f172a;
  font-weight: 500;
  font-size: 14px;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  border-bottom: 1px solid #f1f5f9;

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.td`
  padding: 20px 12px;
  font-size: 14px;
  font-weight: 400;
  text-transform: capitalize;
`;

export const StatusCell = styled.div`
  width: 104px;
  height: 32px;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ status }) => {
    switch (status) {
      case "successful":
        return `
          background-color: #F0FDFA;
          color: #0D9488;
        `;
      case "failed":
        return `
          background-color: #FFE7EC;
          color: #EB0E3E;
        `;
      case "pending":
        return `
          background-color: #FFF8D4;
          color: #DDA515;
        `;
      default:
        return "";
    }
  }}
`;
