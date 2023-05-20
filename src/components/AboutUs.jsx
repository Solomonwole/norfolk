import { styled } from "styled-components";
import LeftTop from "../components/assets/leftTop.png";
import RightDown from "../components/assets/rightDown.png";
import About from "../components/assets/about.png";
import { PageContainer } from "../GlobalStyle";

function AboutUs() {
  return (
    <Layout>
      <img src={LeftTop} alt="" className="leftTop" />
      <img src={RightDown} alt="" className="rightDown" />

      <PageContainer>
        <div className="content">
          <img src={About} alt="" className="image" />
          <Card>
            <h3>About Us</h3>
            <p>
              At Norfolk, our mission is to provide you with exceptional
              financial solutions and personalised services. Our team of
              experienced professionals is dedicated to understanding your
              unique needs and goals, we work tirelessly to ensure that your
              financial success is our top priority and with a focus on
              innovation and technology, we offer services to meet the needs of
              businesses and individuals alike. From investment banking, private
              equity services to risk management and financial advisory
              services, we are here to help you achieve your financial
              objectives.
            </p>
          </Card>
        </div>
      </PageContainer>
    </Layout>
  );
}

export default AboutUs;

const Layout = styled.div`
  background: #fdf6ef;
  width: 100%;
  min-height: 592px;
  position: relative;
  margin: 100px 0;

  

  .leftTop {
    display: flex;
    justify-content: flex-start;
  }
  .rightDown {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .image {
    width: 80%;
    max-width: 712px;
    margin: auto;
    z-index: 1;

    @media (max-width: 885px) {
      width: 500px;
    }
    @media (max-width: 885px) {
      width: 370px;
    }
  }

  .content {
    width: 100%;
    height: 100%;
    position: relative;
  }

  @media (max-width: 480px) {
      height: 100%;
      padding: 20px 0;
    }
`;

const Card = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  background: #f7e5d3;
  border-radius: 5px;
  width: 602px;
  height: 384px;
  z-index: 2;
  padding: 20px;
  h3 {
    margin-bottom: 20px;
  }

  @media (max-width: 885px) {
    height: 285px;
    width: 500px;
    top: 18px;
  }
  @media (max-width: 480px) {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;
