import { styled } from "styled-components";
import { PageContainer } from "../GlobalStyle";
import Mac from "./assets/mac.png";
import FullMac from "./assets/macf.png";
import { HiChatBubbleLeftRight, HiPresentationChartLine } from "react-icons/hi2";
import { MdSettingsInputAntenna } from "react-icons/md";
import { IoIosBulb } from "react-icons/io";

function HowItWorks() {
  return (
    <PageContainer>
      <Grid>
        <div className="left">
          <h2>How It Works</h2>
          <SmallBox>
            <div className="iconBox">
              <HiChatBubbleLeftRight />
            </div>
            <div className="content">
              <h3>Initial Consultation</h3>
              <p>
                We begin with an in-depth consultation to understand our
                clients&apos; goals, objectives, and unique requirements.
              </p>
            </div>
          </SmallBox>

          <SmallBox>
            <div className="iconBox">
              <MdSettingsInputAntenna />
            </div>
            <div className="content">
              <h3>Develop Strategy</h3>
              <p>
                Based on the initial consultation, we conduct a comprehensive
                analysis and develop a customised strategy that is tailored to
                our clients’ specific financial goals.
              </p>
            </div>
          </SmallBox>

          <SmallBox>
            <div className="iconBox">
              <IoIosBulb />
            </div>
            <div className="content">
              <h3>Implementation </h3>
              <p>
                We work with our clients to implement the financial strategy,
                providing ongoing support and guidance.
              </p>
            </div>
          </SmallBox>

          <SmallBox>
            <div className="iconBox">
              <HiPresentationChartLine />
            </div>
            <div className="content">
              <h3>Monitoring</h3>
              <p>
                We regularly monitor the financial strategy to ensure it remains
                aligned with clients&apos; goals and adjust as necessary.
              </p>
            </div>
          </SmallBox>
        </div>

        <div className="right">
          <img src={Mac} alt="" className="desktop" />
          <img src={FullMac} alt="" className="mobile" />
        </div>
      </Grid>
    </PageContainer>
  );
}

export default HowItWorks;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 100px 0;
  column-gap: 20px;
  row-gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    place-items: center;
  }

  .right {
    .mobile {
      display: none;

      @media (max-width: 480px) {
        display: block;
        width: 100%;
      }
    }
    .desktop {
      position: absolute;
      right: 0;
      @media (max-width: 480px) {
        display: none;
      }
    }
  }
`;

const SmallBox = styled.div`
  display: flex;
  margin: 30px 0;

  .iconBox {
    background: #3c258e35;
    border-radius: 10px;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    color: #3c258e;
    margin-right: 20px;
  }

  .content {
    width: 80%;
  }
`;
