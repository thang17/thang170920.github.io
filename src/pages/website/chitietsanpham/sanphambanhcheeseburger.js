import React from "react";
import Footer from "../homewebsite/footer";
import Header from "../homewebsite/header";
import Nav from "../homewebsite/nav";
import "../chitietsanpham.css";
import { Link } from "react-router-dom";
import product5 from "../../../img/product5.jpg";
import product51 from "../../../img/product5-1.jpg";

const Sanphambanhcheeseburger = () => {
  return (
    <div>
      <div className="wrapper ">
        <button className="scroll ">
          <i className="fas fa-arrow-up" />
        </button>
        <Header />
        <Nav />
        <div class="theme-background">
          <div class="theme-title">Cheese Burger(Beef)</div>
        </div>
        <div className="container">
          <section className="frag">
            <div className="grid wide">
              <div className="row">
                <div className="col l-12">
                  <ul className="frag__container">
                    <li className="home">
                      <Link to="/" className="frag__link">
                        {" "}
                        Trang chủ
                      </Link>
                      <span className="gach">/</span>
                    </li>
                    <li>
                      <span>Sản Phẩm</span>
                      <span className="gach">/</span>
                    </li>
                    <li>
                      <span>Cheese Burger(Beef)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <div className="grid wide">
            <div id={10} className="chi-tiet-sp">
              <div className="row">
                <div className="col l-6">
                  <div className="detail-product">
                    <div className="detail-big">
                      <img src={product5} alt className="detail-img" />
                    </div>
                    <div className="detail-small">
                      <img src={product5} alt className="detail-small-img" />
                      <img src={product51} alt className="detail-small-img" />
                    </div>
                  </div>
                </div>
                <div className="col l-6">
                  <div className="infor">
                    <h1 class="infor-title">Cheese Burger(Beef)</h1>
                    <div class="infor__price-box">
                      <span class="price-product">180000đ</span>
                      <span class="price-sale">220000đ</span>
                    </div>
                    <div className="price-summary">
                      <span className="price-summary__title">mô tả ngắn:</span>
                      <span className="price-summary__des">
                        (Đang cập nhật)
                      </span>
                    </div>
                    <form action className="price-form">
                      <div className="price-number">Số lượng:</div>
                      <div className="price-number-input">
                        <button type="button" className="price-number-btn btn1">
                          -
                        </button>
                        <input
                          id="number-quality"
                          type=""
                          maxLength={3}
                          defaultValue={1}
                          className="price-number-quality"
                        />
                        <button type="button" className="price-number-btn btn2">
                          +
                        </button>
                      </div>
                    </form>
                    <div className="price-buy">
                      <button
                        type="submit"
                        className="price-buy-btn order"
                        onclick="duavaogiohang(idProduct,img,nameSpham,price,inputItem.value) || hideModal(img,nameSpham)"
                      >
                        <span className="price-buy-text">mua hàng</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="menu-tap">
                <div className="col l-12">
                  <div className="product-tap">
                    <ul className="tab-list">
                      <li className="tab-item active" data-target="#menu1">
                        mô tả sản phẩm
                      </li>
                      <li className="tab-item" data-target="#menu2">
                        tab tuỳ chỉnh
                      </li>
                      <li className="tab-item" data-target="#menu3">
                        hướng dẫn mua hàng
                      </li>
                    </ul>
                    <div id="menu1" className="tab-content active">
                      <div>
                        <div>
                          <div>
                            <p className="tab-text">
                              Bữa ăn sáng được coi là nguồn cung cấp năng lượng
                              chính cho mỗi chúng ta, giúp hoạt động cả ngày. Vì
                              vậy việc nạp đầy đủ năng lượng cho bữa ăn sáng là
                              điều vô cùng cần thiết, đặc biệt là khi công việc
                              bận rộn tất bật khiến chúng ta không có đủ thời
                              gian chăm lo cho bữa sáng trọng vẹn
                            </p>
                            <p className="tab-text">
                              <img src={product5} alt />
                            </p>
                            <p className="tab-text">
                              Hamburger được coi là sản phẩm đặc biệt với tiêu
                              chí “ ngon-bổ-rẻ” đem đến cho khách hàng chất
                              lượng tuyệt vời và an toàn cho sức khỏe. Với nguồn
                              năng lượng với hơn 1200 kcal dư sức cung cấp 120%
                              nhu cầu năng lượng cho ngày làm việc. Hamburger
                              được bổ sung thêm 9 loại vitamin và khoáng chất..
                            </p>
                            <p className="tab-text">
                              Bánh mì- món ăn rất quen thuộc đối với khẩu vị của
                              mỗi người Việt và kết hợp với thịt bò đem lại
                              hương vị đậm đà, ngon miệng. Hàm lượng dinh dưỡng
                              trong 1 khẩu phần bánh mì bò là 760kcal
                            </p>
                            <p className="tab-text">
                              <img src={product51} alt />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="menu2" className="tab-content">
                      <p className="tab-text not-mg">
                        Nội dung tùy chỉnh viết ở đây
                      </p>
                    </div>
                    <div id="menu3" className="tab-content">
                      <p className="tab-text not-mg">Hướng dẫn mua hàng</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Sanphambanhcheeseburger;
