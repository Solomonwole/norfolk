import { styled } from "styled-components";
import { PageContainer } from "../GlobalStyle";
import Mac from "./assets/mac.png";
import FullMac from "./assets/macf.png";

function HowItWorks() {
  return (
    <PageContainer>
      <Grid>
        <div className="left">
          <h2>How It Works</h2>
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
