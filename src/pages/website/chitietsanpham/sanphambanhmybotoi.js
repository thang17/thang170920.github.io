import React from "react";
import { Link } from "react-router-dom";
import product10 from "../../../img/product10.jpg";
import product101 from "../../../img/product10-1.jpg";
const Sanphambanhmybotoi = () => {
  return (
    <div>
        <div class="theme-background">
            <div class="theme-title">Bánh mì bơ tỏi</div>
        </div>
      <div className="container">
        <section className="frag">
          <div className="grid wide">
            <div className="row">
              <div className="col l-12">
                <ul className="frag__container">
                  <li className="home">
                    <Link to='/' className="frag__link">
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
                    <span>Bánh mì bơ tỏi</span>
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
                    <img
                      src={product10}
                      alt
                      className="detail-img"
                    />
                  </div>
                  <div className="detail-small">
                    <img
                      src={product10}
                      alt
                      className="detail-small-img"
                    />
                    <img
                      src={product101}
                      alt
                      className="detail-small-img"
                    />
                  </div>
                </div>
              </div>
              <div className="col l-6">
                <div className="infor">
                  <h1 className="infor-title">Bánh mì bơ tỏi</h1>
                  <div className="infor__price-box">
                    <span className="price-product">70000đ</span>
                    <span className="price-sale" />
                  </div>
                  <div className="price-summary">
                    <span className="price-summary__title">mô tả ngắn:</span>
                    <span className="price-summary__des">(Đang cập nhật)</span>
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
                    <p className="tab-text">
                      Điểm qua một số mẫu bánh gato sinh nhật dễ thương làm quà
                      tặng độc đáo cho bé cùng GATO nào. Loại bánh gato sinh
                      nhật này ngoài làm quà sinh nhật cho bé, bạn có thể đặt
                      những chiếc birthday cake dễ thương này làm quà sinh nhật
                      cho cả những người “chưa muốn lớn” nữa :) Bánh sinh nhật
                      loại này không chỉ đẹp mà ăn còn rất ngon!
                    </p>
                    <p className="tab-text">
                      Quà sinh nhật cho gia đình – ngoài birthday cake – còn có
                      hoa sinh nhật rất phổ biến. Bạn nghĩ sao nếu kết hợp 2 món
                      quà tặng sinh nhật đó
                    </p>
                    <p className="tab-text">
                      <img src={product10} alt />
                    </p>
                    <p className="tab-text">
                      Đĩa xôi nóng hổi, thơm nức mùi dứa, nước dừa và đậu xanh
                      cùng những hạt nếp dẻo hòa lẫn vị ngọt của xoài chín mang
                      đến một bữa sáng thật ấm áp.
                    </p>
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
    </div>
  );
};

export default Sanphambanhmybotoi;
