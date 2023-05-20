import styled, { css } from "styled-components";
import { FiSearch, FiMenu } from "react-icons/fi";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 103, 112, 0.05);
  z-index: 5;
  width: 83%;
  position: fixed;
  right: 0;

  .right {
    display: flex;
    align-items: center;

    button {
      width: 178px;
      height: 44px;
      background: #6e47ff;
      border-radius: 8px;
      margin-right: 20px;

      img {
        margin-right: 10px;
      }

      @media (max-width: 320px) {
        display: none;
      }
    }
  }
  @media (max-width: 884px) {
    flex-wrap: wrap;
    width: 100%;
  }
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Logo = styled.div`
  .mobile {
    display: none;
  }
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
  @media (max-width: 884px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: block;
      width: 80%;
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border: 0.7px solid rgba(15, 23, 42, 0.3);
  border-radius: 10px;
  width: 427px;
  height: 44px;

  @media (max-width: 1027px) {
    width: 300px;
  }
  @media (max-width: 884px) {
    display: none;
  }
`;

export const SearchIcon = styled(FiSearch)`
  color: #999;
`;

export const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  margin-left: 5px;
  width: 427px;
`;

export const Modal = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  width: 200px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: ${(props) => (props.open ? "block" : "none")};

  .logout {
    &:hover {
      background: #c10;
      border-radius: 20px;
      color: #fff;
    }
  }

  @media (max-width: 480px) {
    top: 75px;
  }
`;
export const MenuItem = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background: #6e47ff;
    border-radius: 20px;
    color: #fff;
  }

  .icon {
    font-size: 1.2rem;
    margin-right: 10px;
    margin-bottom: -3px;
  }
  a {
    color: inherit;
  }
  a:hover {
    background: #6e47ff;
    border-radius: 20px;
    color: #ffffff;
  }
`;

// Mobile Menu

export const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  margin-right: 15px;

  @media (max-width: 884px) {
    display: block;
  }
`;

export const HamburgerIcon = styled(FiMenu)`
  font-size: 1.8rem;
  margin-bottom: -10px;
`;

// Overlay for the navigations on mobile
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;

  display: none;

  ${(props) =>
    props.open &&
    css`
      display: block;
    `}
`;

export const MobileSidebar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 250px;
  padding: 0;
  z-index: 11;
  background: #ffffff;
  box-shadow: 4px 0px 4px rgba(5, 55, 78, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

// Admin Sidebar

export const Sidebar = styled.div`
  width: 224px;
  height: 100vh;
  padding: 0;
  background: #ffffff;
  box-shadow: 4px 0px 4px rgba(5, 55, 78, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 6;
  position: fixed;

  @media (max-width: 884px) {
    display: none;
  }
`;

export const SidebarTitle = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;

  img {
    margin-bottom: 20px;
  }
`;

export const SidebarMenu = styled.ul`
  list-style-type: none;
  padding: 20px 0;
  padding-right: 20px;
  margin: 0;
  width: 100%;
`;

export const SidebarMenuItem = styled.li`
  margin-bottom: 10px;
  padding: 0;
  cursor: pointer;

  .icon {
    margin-right: 10px;
    font-size: 1.5rem;
  }

  a {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    height: 64px;
    padding: 10px 20px;
    text-decoration: none;
    color: #0f172ab0;

    &:hover {
      background: #6f47ff53;
      box-shadow: 0px 15px 50px rgba(110, 71, 255, 0.15);
      border-radius: 0px 50px 50px 0px;
      color: #ffffff;
    }
  }

  a.active {
    background: #6e47ff;
    box-shadow: 0px 15px 50px rgba(110, 71, 255, 0.15);
    border-radius: 0px 50px 50px 0px;
    color: #ffffff;
  }
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding-top: 120px;
  padding-left: 246px;
  background: #FAFAFB;
  min-height: 100vh;

  @media (max-width: 884px){
    padding-left: 20px;
  }
`;

export const LogoutButton = styled.button`
  margin-top: auto;
  margin-bottom: 20px;
  cursor: pointer;
  color: #f82310;
  background: none;
  border-radius: 20px;
  border: none;
  width: 100%;
  text-align: left;
  padding: 10px 20px;
  height: 64px;

  display: flex;
  align-items: center;
  font-size: 1.2rem;

  .icon {
    font-size: 1.4rem;
    margin-right: 10px;
  }
`;
