import React from "react";
import Footer from "../homewebsite/footer";
import Header from "../homewebsite/header";
import Nav from "../homewebsite/nav";
import "../chitietsanpham.css";
import { Link } from "react-router-dom";
import product7 from "../../../img/product7.jpg";
import product71 from "../../../img/product7-1.jpg";
const Sanphambanhsocolatanchay = () => {
  return (
    <div>
      <div className="wrapper ">
        <button className="scroll ">
          <i className="fas fa-arrow-up" />
        </button>
        <Header />
        <Nav />
        <div class="theme-background">
          <div class="theme-title">Bánh socola tan chảy & kem</div>
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
                      <span>Bánh socola tan chảy & kem</span>
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
                      <img src={product7} alt className="detail-img" />
                    </div>
                    <div className="detail-small">
                      <img src={product7} alt className="detail-small-img" />
                      <img src={product71} alt className="detail-small-img" />
                    </div>
                  </div>
                </div>
                <div className="col l-6">
                  <div className="infor">
                    <h1 class="infor-title">Bánh socola tan chảy & kem</h1>
                    <div class="infor__price-box">
                      <span class="price-product">150000đ</span>
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
                          <p className="tab-text">
                            Bao gồm một thìa xúc - cũng là khuôn tạo hình cơm -
                            có tay cầm; một dụng cụ cắt rong biển đơn giản bằng
                            thao tác dập xuống như dập dấu.
                          </p>
                          <p className="tab-text">
                            Bé nhà bạn chắc chắn sẽ rất thích thú khi được nhìn
                            ngắm và thưởng thức những đĩa cơm đáng yêu như thế
                            này.
                          </p>
                          <p className="tab-text">
                            <img src={product7} alt />
                          </p>
                          <p className="tab-text">
                            Hôm nay dọn tủ bếp thấy có cơ man nào là hạt khô:
                            nho khô, cranberry khô, hạt óc chó, hạt điều, hạt dẻ
                            cười, đậu phộng,… Ôi sao mà nhiều thế! Lần trước có
                            khách đến mang ra nhấm nháp với bia mà sao vẫn chưa
                            hết nhỉ!? Nhìn hạn sử dụng thì chỉ còn hai tuần nữa,
                            thế là phải chưng dụng làm bánh ngọt để uống trà
                            hoặc là cho vào túi để lúc đói nhấm nháp. Kiểu này
                            lại sắp có cái eo bánh mỳ rồi đây, bởi làm bánh ngọt
                            thì không thể thiếu trứng và bơ ơ ơ ơ……
                          </p>
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

export default Sanphambanhsocolatanchay;
