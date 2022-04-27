import React from "react";
import Footer from "./homewebsite/footer";
import Header from "./homewebsite/header";
import Nav from "./homewebsite/nav";
import Section from "./homewebsite/section";
import Section2 from "./homewebsite/section2";
import Slider from "./homewebsite/slider";


const Home = () => {
  return (
    <div className="wrapper ">
      <button className="scroll ">
        <i className="fas fa-arrow-up" />
      </button>
      <Header />
      <Nav />
      <Slider />
      <Section />
      <Section2 />
      <Footer />
    </div>
  );
};

export default Home;
