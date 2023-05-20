import { styled } from "styled-components";
import Header from "../../components/header/Header";
import HeroSlider from "../../components/hero/Hero";
import AboutUs from "../../components/AboutUs";
import Services from "../../components/Services";
import HowItWorks from "../../components/HowItWorks";

function Home() {
  return (
    <HomeStyle>
      <Header />
      <HeroSlider />
      <AboutUs />
      <Services />
      <HowItWorks/>
    </HomeStyle>
  );
}

export default Home;

const HomeStyle = styled.div`
  overflow-x: hidden;
`;
