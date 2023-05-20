import { styled } from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
  margin: 32px 0;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const Box = styled.div`
  width: 100%;
  background: ${(props) => props.blank ? "":"#fff"};
  padding: 40px 20px;
  border-radius: 20px;

  .contact {
    a {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      color: #6e47ff;

      .icon {
        color: #6e47ff;
        font-size: 22px;
      }
    }
  }

  .socials {
    margin-top: 40px;

    p{
        font-weight: 600;
    }

    .icons {
      display: flex;
      align-items: center;
      margin-top: 10px;
      

      .round {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
        color: #fff;
        background: #6e47ff;
        cursor: pointer;
      }
    }
  }
`;
