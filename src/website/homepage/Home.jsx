import { styled } from "styled-components";
import Header from "../../components/header/Header";
import HeroSlider from "../../components/hero/Hero";

function Home() {
  return (
    <HomeStyle>
      <Header />
      <HeroSlider />
    </HomeStyle>
  );
}

export default Home;


const HomeStyle = styled.div`
  overflow-x: hidden;
`