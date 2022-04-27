import React from 'react'
import Footer from "./homewebsite/footer";
import Header from "./homewebsite/header";
import Nav from "./homewebsite/nav";
import './chitietsanpham.css'
import SanphambanhTorrija from './chitietsanpham/sanphambanhTorrija';
const HomebanhTorrija = () => {
  return (
    <div><div className="wrapper ">
    <button className="scroll ">
      <i className="fas fa-arrow-up" />
    </button>
    <Header />
    <Nav />
    <SanphambanhTorrija />
    <Footer />
  </div></div>
  )
}

export default HomebanhTorrija