import React from "react";
import Footer from "./homewebsite/footer";
import Header from "./homewebsite/header";
import Nav from "./homewebsite/nav";
import Indextintuc from "./tintuc/indextintuc";
import Slider from "./tintuc/slider";
import './tintuc.css'

const Tintuc = () => {
  return (
    <div>
      <div className="wrapper ">
        <button className="scroll ">
          <i className="fas fa-arrow-up" />
        </button>
        <Header />
        <Nav /> 
        <Slider />
        <Indextintuc /> 
        <Footer />
      </div>
    </div>
  );
};

export default Tintuc;
