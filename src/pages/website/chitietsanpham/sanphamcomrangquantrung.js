import React from "react";
import Footer from "../homewebsite/footer";
import Header from "../homewebsite/header";
import Nav from "../homewebsite/nav";
import "../chitietsanpham.css";
import { Link } from "react-router-dom";
import product8 from "../../../img/product8.jpg";
import product81 from "../../../img/product8-1.jpg";

const Sanphamcomrangquantrung = () => {
  return (
    <div>
      <div className="wrapper ">
        <button className="scroll ">
          <i className="fas fa-arrow-up" />
        </button>
        <Header />
        <Nav />
        <div class="theme-background">
          <div class="theme-title">Cơm rang trứng cuộn</div>
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
                      <span>Cơm rang trứng cuộn</span>
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
                      <img src={product8} alt className="detail-img" />
                    </div>
                    <div className="detail-small">
                      <img src={product8} alt className="detail-small-img" />
                      <img src={product81} alt className="detail-small-img" />
                    </div>
                  </div>
                </div>
                <div className="col l-6">
                  <div className="infor">
                    <h1 class="infor-title">Cơm rang trứng cuộn</h1>
                    <div class="infor__price-box">
                      <span class="price-product">120000đ</span>
                      <span class="price-sale">150000đ</span>
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
                              <p className="tab-text">
                                Nguồn nguyên liệu tươi ngon được nhập chính
                                ngạch hằng ngày đã qua kiểm định an toàn thực
                                phẩm nên khách hàng có thể hoàn toàn yên tâm về
                                độ tươi ngon của những chiếc bánh nơi đây.
                              </p>
                              <p className="tab-text">
                                Bột mỳ trắng mịn cùng với phương pháp nhào bột
                                thủ công để làm nên những chiếc đế bánh khi
                                nướng thì nở xốp và giòn mà không hề chai cứng.
                                Một sự kết hợp hoàn hảo giữa đế bánh và nhân
                                bánh, Chiếc bánh bạn nhận được sẽ vẫn còn nóng
                                hổi, viền bánh hơi cháy cạnh rất thơm và giòn
                                tan khi đưa vào miệng. Nhân bánh đặc sánh phô
                                mai với sốt cà chua đỏ tươi và nhiều bột xen lẫn
                                các lát thịt, hải sản tươi thơm ngon làm nên
                                chiếc pizza hoàn hảo và đúng phong vị nhất.
                              </p>
                              <p className="tab-text">
                                <img src={product8} alt />
                              </p>
                              <p className="tab-text">
                                Thời gian nướng và nhiệt độ nướng bánh: Thời
                                gian nướng rất quan trọng. Chiếc pizza mang tới
                                tận nhà cho khách cũng rất nóng hổi chứ không hề
                                nguội. Nếu pizza để nguội thì vị thực sự của nó
                                sẽ biến mất. Thời gian để nướng chiếc pizza rất
                                quan trọng. Nếu không căn được thời gian nướng
                                thì chiếc bánh có thể bị cháy, hoặc có thể đế
                                bánh không thể giòn và cũng có thể là đế bánh
                                chín không đều. Vậy nên nền nhiệt và thời gian
                                rất quan trọng để quyết định cho ra một chiếc
                                pizza đế bánh giòn rụm khi đưa vào miệng và phần
                                nhân bánh vẫn không bị cháy. Nhiệt độ nướng tại
                                cửa hàng pizza luôn đạt tại 250-350 độ C với
                                thời gian 1-2 phút. Nếu tự làm ở nhà thì nướng
                                mất khoảng 7-8 phút trong nền nhiệt 250 độ C.
                              </p>
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

export default Sanphamcomrangquantrung;
