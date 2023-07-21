import { styled } from "styled-components";
import { PageContainer } from "../GlobalStyle";
import Invest from "./assets/invest.png";
import Advice from "./assets/advice.png";
import Check from "./assets/check.png";
import PropTypes from "prop-types"

function Services({ contact }) {
  return (
    <Layout id="services">
      <PageContainer>
        <h2>Our Services</h2>
        <p className="subtext">
          Our team of experts provides tailored solutions and strategic advice
          to help you navigate the complexities of the financial landscape
        </p>

        <div className="grid">
          <Box>
            <img src={Invest} alt="" />
            <h4>Banking</h4>
            <p>
              Our banking services include mergers and acquisitions,
              capital raising, and corporate finance advisory. We work closely
              with our clients to develop customised financial strategies that
              maximise value and achieve their business objectives.
            </p>
            <button onClick={contact}>Learn More</button>
          </Box>
          <Box>
            <img src={Advice} alt="" />
            <h4>Financial Advisory</h4>
            <p>
              Our financial advisory services include valuation, due diligence,
              and restructuring. We help our clients make informed decisions by
              providing expert analysis and recommendations based on our deep
              industry expertise and extensive experience.
            </p>
            <button onClick={contact}>Learn More</button>
          </Box>
          <Box>
            <img src={Check} alt="" />
            <h4>Risk Management</h4>
            <p>
              Our risk management services helps identify and evaluate potential
              risks and develop comprehensive risk management solutions that are
              tailored to our clients specific needs. This includes credit risk,
              market risk, liquidity risk and operational risk using several
              risk management tools.
            </p>
            <button onClick={contact}>Learn More</button>
          </Box>
        </div>
      </PageContainer>
    </Layout>
  );
}

Services.propTypes = {
  contact: PropTypes.func.isRequired,
};

export default Services;

const Layout = styled.div`
  h2 {
    text-align: center;
  }
  .subtext {
    text-align: center;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 20px;
    row-gap: 20px;
    margin-top: 66px;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  }
`;

const Box = styled.div`
  background: #3c258e;
  border-radius: 10px;
  color: #fff;
  width: 100%;
  padding: 50px 20px;

  h4 {
    margin: 20px 0;
  }
  p {
    font-size: 14px;
    line-height: 30px;
  }
  button {
    margin: 20px 0;
    background: #ffffff;
    border-radius: 8px;
    width: 155px;
    height: 44px;
    border: none;
    color: #151f36;
    font-size: 15px;
  }
`;
