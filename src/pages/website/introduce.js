import React from "react";
import Footer from "./homewebsite/footer";
import Header from "./homewebsite/header";
import Nav from "./introduce/nav";


const Introduce = () => {
  return (
    <div className="wrapper ">
    <button className="scroll ">
      <i className="fas fa-arrow-up" />
    </button>
    <Header />
    <Nav />
    <Footer />
  </div>
  )
}

export default Introduce