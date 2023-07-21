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
  SearchContainer,
  SearchIcon,
  SearchInput,
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
import { BsHeadset } from "react-icons/bs";
import { MdSpaceDashboard } from "react-icons/md";
import { BiLogInCircle } from "react-icons/bi";
import { IoReceiptSharp, IoSettings } from "react-icons/io5";
import Avatar from "./Avatar";
import { Button } from "../../GlobalStyle";
import Transfer from "./assets/transfer.svg";
import LogoutModal from "./LogoutModal";
import TransferMoney from "./TransferMoney";
import { styled } from "styled-components";

function AdminDashboardLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [transfer, setTransfer] = useState(false);
  const userName = localStorage.getItem("Name");
  const status = localStorage.getItem("Status");

  const handleAvatarClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleTransfer = () => {
    setTransfer(true);
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
        <SearchContainer>
          <SearchIcon />
          <SearchInput type="text" placeholder="Search" />
        </SearchContainer>

        <HamburgerMenu onClick={handleMobileMenuToggle}>
          <HamburgerIcon />
        </HamburgerMenu>

        <div className="right">
          <Button onClick={handleTransfer}>
            <img src={Transfer} alt="" /> Transfer Money
          </Button>
          <Avatar name={userName} status={status} onClick={handleAvatarClick} />
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
              <NavLink to="/dashboard">
                <MdSpaceDashboard className="icon" />
                Dashboard
              </NavLink>
            </SidebarMenuItem>
            <SidebarMenuItem onClick={handleMenuItemClick}>
              <NavLink to="/transactions">
                <IoReceiptSharp className="icon" />
                Transactions
              </NavLink>
            </SidebarMenuItem>
            <SidebarMenuItem onClick={handleMenuItemClick}>
              <NavLink to="/support">
                <BsHeadset className="icon" />
                Help & Support
              </NavLink>
            </SidebarMenuItem>
            <SidebarMenuItem onClick={handleMenuItemClick}>
              <NavLink to="/settings">
                <IoSettings className="icon" /> Settings
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
              <NavLink to="/dashboard">
                <MdSpaceDashboard className="icon" />
                Dashboard
              </NavLink>
            </SidebarMenuItem>
            <SidebarMenuItem onClick={handleMenuItemClick}>
              <NavLink to="/transactions">
                <IoReceiptSharp className="icon" />
                Transactions
              </NavLink>
            </SidebarMenuItem>
            <SidebarMenuItem onClick={handleMenuItemClick}>
              <NavLink to="/support">
                <BsHeadset className="icon" />
                Help & Support
              </NavLink>
            </SidebarMenuItem>
            <SidebarMenuItem onClick={handleMenuItemClick}>
              <NavLink to="/settings">
                <IoSettings className="icon" /> Settings
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

AdminDashboardLayout.propTypes = {
  children: PropTypes.node,
};

export default AdminDashboardLayout;

const Layout = styled.div`
  overflow: hidden;
`;
