import { PageContainer } from "../../GlobalStyle";
import {
  Btn,
  HamburgerIcon,
  Head,
  MobileMenuContainer,
  MobileMenuContent,
  NavMenu,
  NavbarContainer,
} from "./styled";
import Logo from "../../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLogged = localStorage.getItem("isLogged");
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      {" "}
      <NavbarContainer>
        <PageContainer>
          <Head>
            <div>
              <Link to="/">
                <img src={Logo} alt="" />
              </Link>
            </div>

            <NavMenu>
              <li>
                <NavLink to="/" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <a href="/#about" onClick={() => setMobileMenuOpen(false)}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/#services" onClick={() => setMobileMenuOpen(false)}>
                  Our Services
                </a>
              </li>
              <li>
                <a href="/#blog" onClick={() => setMobileMenuOpen(false)}>
                  Blog
                </a>
              </li>
              <li>
                <a href="/#faqs" onClick={() => setMobileMenuOpen(false)}>
                  FAQs
                </a>
              </li>
            </NavMenu>
            <HamburgerIcon onClick={toggleMobileMenu}>
              <FiMenu />
            </HamburgerIcon>

            {!isLogged ? (
              <div className="btn">
                <Link to="/login">
                  <Btn outline>Login</Btn>
                </Link>
                <Link to="/sign-up">
                  <Btn>Sign Up</Btn>
                </Link>
              </div>
            ) : (
              <div className="btn">
                <Link to="/dashboard">
                  <Btn>Dashboard</Btn>
                </Link>
              </div>
            )}
          </Head>
        </PageContainer>
      </NavbarContainer>
      <MobileMenuContainer open={isMobileMenuOpen}>
        <MobileMenuContent>
          <li>
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <a href="/#about" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </a>
          </li>
          <li>
            <a href="/#services" onClick={() => setMobileMenuOpen(false)}>
              Our Services
            </a>
          </li>
          <li>
            <a href="/#blog" onClick={() => setMobileMenuOpen(false)}>
              Blog
            </a>
          </li>
          <li>
            <a href="/#faqs" onClick={() => setMobileMenuOpen(false)}>
              FAQs
            </a>
          </li>
        </MobileMenuContent>
      </MobileMenuContainer>
    </>
  );
}

export default Header;
