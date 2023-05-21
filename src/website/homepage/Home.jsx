import { styled } from "styled-components";
import Header from "../../components/header/Header";
import HeroSlider from "../../components/hero/Hero";
import AboutUs from "../../components/AboutUs";
import Services from "../../components/Services";
import HowItWorks from "../../components/HowItWorks";
import Faqs from "../../components/Faqs";
import Footer from "../../components/footer/Footer";
import { useEffect, useState } from "react";
import Contact from "../../components/Contact";

function Home() {
  const [contact, setContact] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContact = () => {
    setContact(true);
  };
  return (
    <HomeStyle>
      <Header />
      <HeroSlider contact={handleContact} />
      <AboutUs />
      <Services contact={handleContact} />
      <HowItWorks />
      <Faqs contact={handleContact} />
      <Footer />
      {contact && <Contact cancel={() => setContact(false)} />}
    </HomeStyle>
  );
}

export default Home;

const HomeStyle = styled.div`
  overflow-x: hidden;
`;
