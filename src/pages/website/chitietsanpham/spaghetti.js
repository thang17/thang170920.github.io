import React from "react";
import Footer from "../homewebsite/footer";
import Header from "../homewebsite/header";
import Nav from "../homewebsite/nav";
import "../chitietsanpham.css";
import { Link } from "react-router-dom";
import product1 from "../../../img/product1.jpg";
import product11 from "../../../img/product1-1.jpg";

const Spaghetti = () => {
  return (
    <div>
      <div className="wrapper ">
        <button className="scroll ">
          <i className="fas fa-arrow-up" />
        </button>
        <Header />
        <Nav />
        <div class="theme-background">
          <div class="theme-title">Spaghetti Bolognaise</div>
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
                      <span>Spaghetti Bolognaise</span>
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
                      <img src={product1} alt className="detail-img" />
                    </div>
                    <div className="detail-small">
                      <img src={product1} alt className="detail-small-img" />
                      <img src={product11} alt className="detail-small-img" />
                    </div>
                  </div>
                </div>
                <div className="col l-6">
                  <div className="infor">
                    <h1 class="infor-title">Spaghetti Bolognaise</h1>
                    <div class="infor__price-box">
                      <span class="price-product">340000đ</span>
                      <span class="price-sale"></span>
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
                            <div>
                              <div>
                                <div>
                                  <div>
                                    <div>
                                      <p className="tab-text">
                                        Món mỳ Spaghetti không chỉ phổ biến
                                        trong các nhà hàng lớn mà ngay trong bữa
                                        cơm gia đình cũng trở nên vô cùng thân
                                        thuộc. Nguyên liệu để làm ra món mỳ trứ
                                        danh này là từ lúa mì và các loại bột
                                        khác theo quy trình nhạo thành bột rồi
                                        được tạo ra với vô số các hình dạng khác
                                        nhau.
                                      </p>
                                      <p className="tab-text">
                                        Có thể nói mỳ Spaghetti được xếp vào
                                        hạng những món ăn phong phú và đa dạng
                                        nhất với đủ các loại sợi như: dạng sợi
                                        dài Spaghetti, Capellini, dạng lá như
                                        Lasagna hoặc dạng xoắn Fusilli nhưng có
                                        lẽ phổ biến hơn cả vẫn là Spaghetti.
                                      </p>
                                      <p className="tab-text">
                                        <img
                                          src={product1}
                                          alt
                                        />
                                      </p>
                                      <p className="tab-text">
                                        Ban đầu sợi mỳ Spaghetti dài rất đáng
                                        kể, nhưng dần dần nhiều sợi mỳ có độ dài
                                        ngắn hơn trở nên được ưa chuộng trong
                                        nửa sau thế kỉ 20 và ở thời điểm hiện
                                        tại thì spaghetti chủ yếu dài khoảng
                                        25-30cm. Nhiều món ăn pasta khác đều có
                                        cơ sở dựa trên nó mà hình thành.
                                      </p>
                                      <p className="tab-text">
                                        <img
                                          src={product11}
                                          alt
                                        />
                                      </p>
                                      <p className="tab-text">
                                        Vừa thơm ngon vừa bổ dưỡng, lại đẹp mắt
                                        và có vô vàn mùi vị để lựa chọn, vậy nên
                                        không có lý do gì để du khách không
                                        thưởng thức món mỳ Spaghetti nổi tiếng
                                        này khi đi du lịch Italia cùng MocFood
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
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

export default Spaghetti;
