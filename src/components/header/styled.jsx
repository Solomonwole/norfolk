import { styled } from "styled-components";

export const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .btn {
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

export const Btn = styled.button`
  width: 110px;
  height: 44px;
  color: ${(props) => (props.outline ? "#6e47ff" : "#fff")};
  background: ${(props) => (props.outline ? "none" : "#6e47ff")};
  border-radius: 8px;
  border: ${(props) => (props.outline ? "1.5px solid #6E47FF;" : "none")};
  margin-left: 20px;
  cursor: pointer;
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    list-style: none;
    margin: 0 20px;
  }
  a {
    color: #000;
    font-weight: 600;
  }
  a.active {
    color: #6e47ff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const HamburgerIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 35px;
    color: #6e47ff;
  }
`;

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  z-index: 10;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.open ? "translateX(0)" : "translateX(-100%)")};
`;

export const MobileMenuContent = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  color: #fff;
  font-size: 25px;

  li {
    margin-bottom: 20px;
  }

  a {
    color: #000;
    font-weight: 600;
  }
`;
