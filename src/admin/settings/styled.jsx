import { styled } from "styled-components";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
export const TabBg = styled.div`
  background: #efefef;
  border-radius: 6px;
  width: 448px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 32px 0;

  button {
    border: none;
    color: #0f172aaa;
    font-size: 16px;
    background: none;
    padding: 10px;
    width: 100%;
    height: 60px;

    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
      background-color: #6e47ff;
      color: #ffffff;
      width: 100%;
    }

    &:nth-child(1).active {
      border-radius: 6px 0px 0px 6px;
    }
    &:nth-child(2).active {
      border-right: none;
    }
    &:nth-child(3).active {
      border-radius: 0px 6px 6px 0px;
    }

    &:nth-child(2).inactive {
      border-left: 1px solid #d9d9d9;
      border-right: 1px solid #d9d9d9;
    }
  }
`;
