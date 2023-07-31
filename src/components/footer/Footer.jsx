import { styled } from "styled-components";
import { PageContainer } from "../../GlobalStyle";
import Logo from "../../assets/logowhite.svg";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoMdMailUnread } from "react-icons/io";
import { HiLocationMarker } from "react-icons/hi";

function Footer() {
  return (
    <Layout>
      <PageContainer>
        <Grid>
          <div className="one">
            <img src={Logo} alt="" />
            <p>Get empowered with financial success</p>
            <div className="socials">
              <a href="#">
                <div className="icon">
                  <BsInstagram />
                </div>
              </a>
              <a href="#">
                <div className="icon">
                  <AiOutlineTwitter />
                </div>
              </a>
              <a href="#">
                <div className="icon">
                  <FaTelegramPlane />
                </div>
              </a>
            </div>
          </div>

          <div className="two">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <a href="/#about-us">About Us</a>
              </li>
              <li>
                <a href="/#services">Services</a>
              </li>
              <li>
                <a href="/#faqs">FAQs</a>
              </li>
            </ul>
          </div>

          <div className="two">
            <h3>Our Services</h3>
            <ul>
              <li>
                <NavLink>Banking</NavLink>
              </li>
              <li>
                <NavLink>Financial Advisory</NavLink>
              </li>
              <li>
                <NavLink>Private Equity</NavLink>
              </li>
              <li>
                <NavLink>Risk Management</NavLink>
              </li>
              <li>
                <NavLink to="/ghost">Staff</NavLink>
              </li>
            </ul>
          </div>

          <div className="two">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="mailto:info@supportnorfolkig.com">
                  <IoMdMailUnread className="icon" /> info@supportnorfolkig.com
                </a>
              </li>

              <li>
                <HiLocationMarker className="loc" />
                Boulevard Costa del Este, PH Financial Park Tower, Piso 17,
                Panamá, Panama
              </li>
            </ul>
          </div>
        </Grid>

        <CopyRight>
          <p>Norfolk©Copyright 2023. All rights reserved</p>
          <p>Terms & Conditions | Privacy Policy | Disclaimer</p>
        </CopyRight>
      </PageContainer>
    </Layout>
  );
}

export default Footer;

const Layout = styled.footer`
  background: #151f36;
  padding: 30px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  .one {
    p {
      color: #fff;
      margin: 30px 0;
    }
    .socials {
      display: flex;
      align-items: center;
      .icon {
        background: #ffffff3a;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffffff;
        margin-right: 10px;
      }
    }
  }

  .two {
    h3 {
      color: #c4c2ff;
      font-weight: 700;
      font-size: 20px;
    }

    ul {
      li {
        list-style: none;
        margin: 20px 0;
        color: #fff;
        display: flex;
        align-items: center;

        a {
          color: #fff;
          font-weight: 400;
          font-size: 14px;
          display: flex;
          align-items: center;
        }

        .icon {
          margin-right: 5px;
          font-size: 20px;
          color: #c4c2ff;
        }
        .loc {
          margin-right: 5px;
          font-size: 50px;
          color: #c4c2ff;
        }
      }
    }
  }
`;

const CopyRight = styled.div`
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 13px;
  cursor: pointer;

  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    row-gap: 10px;
  }
`;
