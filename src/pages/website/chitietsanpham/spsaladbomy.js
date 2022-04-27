import React from "react";
import Footer from "../homewebsite/footer";
import Header from "../homewebsite/header";
import Nav from "../homewebsite/nav";
import "../chitietsanpham.css";
import { Link } from "react-router-dom";
import product9 from "../../../img/product9.jpg";
import product91 from "../../../img/product9-1.jpg";

const Spsaladbomy = () => {
  return (
    <div>
      <div className="wrapper ">
        <button className="scroll ">
          <i className="fas fa-arrow-up" />
        </button>
        <Header />
        <Nav />
        <div class="theme-background">
          <div class="theme-title">Salad Bò Mỹ</div>
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
                      <span>Salad Bò Mỹ</span>
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
                      <img src={product9} alt className="detail-img" />
                    </div>
                    <div className="detail-small">
                      <img src={product9} alt className="detail-small-img" />
                      <img src={product91} alt className="detail-small-img" />
                    </div>
                  </div>
                </div>
                <div className="col l-6">
                  <div className="infor">
                    <h1 class="infor-title">Salad Bò Mỹ</h1>
                    <div class="infor__price-box">
                      <span class="price-product">160000đ</span>
                      <span class="price-sale">200000đ</span>
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
                                  <p className="tab-text">
                                    Khách hàng lựa chọn 1 trong 5 mẫu Cupcake
                                    xinh xắn tại Sweet Cake (cụ thể hình ảnh và
                                    tên từng loại xem chi tiết), 1 set bao gồm 8
                                    chiếc bánh xinh xắn (khách hàng chọn tối
                                    thiểu là 4 chiếc/ 1 mẫu - 1 set tối đa được
                                    chọn 2 mẫu bánh).
                                  </p>
                                  <p className="tab-text">
                                    oàn bộ nguyên liệu dùng trong làm bánh của
                                    cửa hàng đều nhập nhập từ thương hiệu uy tín
                                    tại Mỹ, Eu: Betty crocker, Wilton, Anchor và
                                    Dolphin. Khách hàng có thể lựa chọn 1 trong
                                    2 vị Vani và Chocolate cho mỗi mẫu bánh của
                                    cửa hàng.
                                  </p>
                                  <p className="tab-text">
                                    <img
                                      src={product9}
                                      alt
                                    />
                                  </p>
                                  <p className="tab-text">
                                    Bếp bánh của Sweet Cake với sự chuyên nghiệp
                                    trên 15 năm kinh nghiệm tại các khách sạn
                                    Fortuna, O'pera , Silk Path luôn nhận được
                                    sự khen gợi của khách hàng ngay từ những
                                    ngày đầu làm việc.
                                  </p>
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

export default Spsaladbomy;
