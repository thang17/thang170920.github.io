import Footer from "./homewebsite/footer";
import Header from "./homewebsite/header";
import Nav from "./homewebsite/nav";
import Home from "./product/home";

const Product = () => {
  return (
    <div className="wrapper ">
    <button className="scroll ">
      <i className="fas fa-arrow-up" />
    </button>
    <Header />
    <Nav />
    <Home/>
    <Footer />
  </div>
  )
}

export default Product