import React from 'react'
import Sanphambanhmybotoi from './chitietsanpham/sanphambanhmybotoi';
import Footer from "./homewebsite/footer";
import Header from "./homewebsite/header";
import Nav from "./homewebsite/nav";
import './chitietsanpham.css'
const Chitietsanpham = () => {
  return (
    <div className="wrapper ">
    <button className="scroll ">
      <i className="fas fa-arrow-up" />
    </button>
    <Header />
    <Nav />
    <Sanphambanhmybotoi />
    <Footer />
  </div>
  )
}

export default Chitietsanpham