import { useState } from "react";
import {
  Content,
  HamburgerIcon,
  HamburgerMenu,
  Header,
  LogoutButton,
  MenuItem,
  MobileSidebar,
  Modal,
  Overlay,
  Sidebar,
  SidebarMenu,
  SidebarMenuItem,
  SidebarTitle,
} from "./styled";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import Norfolk from "../../assets/logo.svg";
import { FiSettings } from "react-icons/fi";
import { MdSpaceDashboard } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";
import Avatar from "./Avatar";
import LogoutModal from "./LogoutModal";
import TransferMoney from "./TransferMoney";
import { styled } from "styled-components";

function SuperLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [transfer, setTransfer] = useState(false);

  const handleAvatarClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleMenuItemClick = () => {
    setIsModalOpen(false);
  };
  const handleLogout = () => {
    setLogoutModal(true);
    setIsModalOpen(false);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Layout>
      <Header>
        <div></div>

        <HamburgerMenu onClick={handleMobileMenuToggle}>
          <HamburgerIcon />
        </HamburgerMenu>

        <div className="right">
          <Avatar name="Super Admin" status="" onClick={handleAvatarClick} />
        </div>

        <Modal open={isModalOpen}>
          <MenuItem onClick={handleMenuItemClick}>
            <NavLink to="/settings">
              <FiSettings className="icon" /> Settings
            </NavLink>
          </MenuItem>

          <MenuItem onClick={handleLogout} className="logout">
            <FiLogOut className="icon" /> Logout
          </MenuItem>
        </Modal>
      </Header>

      <div style={{ display: "flex" }}>
        <Sidebar>
          <SidebarMenu>
            <SidebarTitle>
              <img src={Norfolk} alt="" className="desktop" />
            </SidebarTitle>
            <SidebarMenuItem onClick={handleMenuItemClick}>
              <NavLink to="/super">
                <MdSpaceDashboard className="icon" />
                Dashboard
              </NavLink>
            </SidebarMenuItem>
          </SidebarMenu>
          <LogoutButton onClick={handleLogout}>
            <BiLogInCircle className="icon" /> Logout
          </LogoutButton>
        </Sidebar>

        <Content>{children}</Content>
      </div>

      <Overlay open={isMobileMenuOpen} onClick={handleMobileMenuToggle} />
      {isMobileMenuOpen && (
        <MobileSidebar>
          <SidebarMenu>
            <SidebarTitle>
              <img src={Norfolk} alt="" />
            </SidebarTitle>
            <SidebarMenuItem onClick={handleMenuItemClick}>
              <NavLink to="/super">
                <MdSpaceDashboard className="icon" />
                Dashboard
              </NavLink>
            </SidebarMenuItem>
          </SidebarMenu>
          <LogoutButton onClick={handleLogout}>
            <BiLogInCircle className="icon" /> Logout
          </LogoutButton>
        </MobileSidebar>
      )}

      {logoutModal && <LogoutModal cancel={() => setLogoutModal(false)} />}
      {transfer && <TransferMoney cancel={() => setTransfer(false)} />}
    </Layout>
  );
}

SuperLayout.propTypes = {
  children: PropTypes.node,
};

export default SuperLayout;

const Layout = styled.div`
  overflow: hidden;
`;
