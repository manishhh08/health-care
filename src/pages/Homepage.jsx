import { Container } from "react-bootstrap";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";
import Join from "../components/Join";
import Works from "../components/Works";

const Homepage = () => {
  return (
    <>
      <Container fluid className="bg-gradient-hero h-16">
        <IntroSection />
        <Feature />
        <Works />
        <Join />
        <Footer />
      </Container>
    </>
  );
};

export default Homepage;
