import React from "react";
import slider1 from "../../../img/slider1.jpg"
import slider2 from "../../../img/slider2.jpg"
import slider3 from "../../../img/slider3.jpg"
import slider4 from "../../../img/slider4.jpg"
import slider5 from "../../../img/slider5.jpg"

const Slider = () => {
  return (
    <div>
      <div className="swiper-container">
        <div className="grid">
          <div className="row no-gutters">
            <div className="col l-12">
              <div className="swiper mySwiper1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img src={slider1} alt />
                  </div>
                  <div className="swiper-slide">
                    <img  src={slider2} alt />
                  </div>
                  <div className="swiper-slide">
                    <img  src={slider3} alt />
                  </div>
                  <div className="swiper-slide">
                    <img  src={slider4} alt />
                  </div>
                  <div className="swiper-slide">
                    <img  src={slider5}  />
                  </div>
                </div>
                <div className="swiper-button-next1" />
                <div className="swiper-button-prev1" />
                <div className="swiper-pagination" />
                <div className="slider__text">
                  <span className="slider__heading">Moc Restaurant</span>
                  <span className="slider__description">
                    Hệ thống ăn uống và giải trí hàng đầu tại Việt Nam với hơn
                    200 cửa hàng lớn nhỏ trên cả 3 miền nhằm mang đến sự phục vụ
                    tốt nhất dành cho bạn và cả gia đình!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
