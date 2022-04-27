import React from "react";
import { Link } from "react-router-dom";
import product4 from "../../../img/product4.jpg";
import product41 from "../../../img/product4-1.jpg";

const SanphambanhTorrija = () => {
  return (
    <div>
      <div class="theme-background">
        <div class="theme-title">Bánh Torrija</div>
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
                    <span>Bánh Torrija</span>
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
                    <img src={product4} alt className="detail-img" />
                  </div>
                  <div className="detail-small">
                    <img src={product4} alt className="detail-small-img" />
                    <img src={product41} alt className="detail-small-img" />
                  </div>
                </div>
              </div>
              <div className="col l-6">
                <div className="infor">
                  <h1 class="infor-title">Bánh Torrija</h1>
                  <div class="infor__price-box">
                    <span class="price-product">50000đ</span>
                    <span class="price-sale">60000đ</span>
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
                    <div>
                      <p className="tab-text">
                        Bánh cupcake dễ thương đã trở thành một hiện tượng trong
                        giới trẻ Việt hiện nay. Những chiếc bánh cupcake ngon
                        miệng và vô cùng đẹp mắt đã làm bao trái tim yêu ẩm thực
                        rung động. Cupcake có rất nhiều vị phù hợp với mọi lứa
                        tuổi: bánh cupcake socola, bánh cupcake dâu tây sữa
                        chua, bánh cupcake trà xanh… Ta có thể mua cupcake ở bất
                        kì cửa hàng bánh nào. Hay bây giờ có rất nhiều người tự
                        tay làm cupcake tại nhà để làm bánh sinh nhật tặng người
                        thân và bạn bè. Tuy nhiên có những điều thú vị về
                        cupcake mà không phải ai cũng biết. Hãy cùng nhau tìm
                        hiểu nhé!
                      </p>
                      <p className="tab-text">
                        <img src={product4} alt />
                      </p>
                      <p className="tab-text">
                        Đã nhiều lần thưởng thức những chiếc bánh cupcake ngon
                        miệng, dễ thương, liệu bạn đã bao giờ tự hỏi nguồn gốc
                        cupcake là ở đâu? Tên gọi bánh cupcake là gì?
                      </p>
                      <p className="tab-text">
                        Cupcake đã được 200 tuổi rồi đó. Cupcake xuất hiện đầu
                        tiên tại Mỹ vào thế kỷ 19 và nhanh chóng tạo thành một
                        bước đột phá và phổ biến trong các gian bếp. Theo trang
                        Food Timeline, người ta vẫn chưa tìm ra nguồn gốc thật
                        sự của tên gọi cupcake. Họ có 2 lý giải cho tên gọi như
                        sau: 1 là chiếc bánh truyền thông được nướng trong những
                        chiếc cup nhỏ, 2 là những thành phần nguyên liệu của
                        bánh được đong theo cup.
                      </p>
                      <p className="tab-text">
                        <img src={product41} alt />
                      </p>
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
    </div>
  );
};

export default SanphambanhTorrija;
