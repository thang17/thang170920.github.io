import React from "react";
import slider1 from "../../../img/theme1.jpg"

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
