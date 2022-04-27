import React from "react";
import banner1 from "../../../img/banner1.jpg"
import banner2 from "../../../img/banner2.jpg"

const Section = () => {
  return (
    <div>
      <section className="banner">
        <div className="grid wide">
          <div className="row  ">
            <div className="col l-4" data-aos="fade-right">
              <div className="banner__item ">
                <a className="banner__link" href="#">
                  <img
                    src={banner1}
                    alt
                    className="banner-img"
                  />
                </a>
                <div className="banner__text banner__text-1">
                  <span className="banner__text-engname">
                    American <p>Pigga</p>
                  </span>
                  <p className="banner__text-vietname">pizza bò xào</p>
                </div>
              </div>
            </div>
            <div className="col l-8" data-aos="fade-left">
              <div className="banner__item">
                <a className="banner__link" href="#">
                  <img
                    src={banner2}
                    alt
                    className="banner-img"
                  />
                </a>
                <div className="banner__text mg-l">
                  <span className="banner__text-engname">
                    Asian<p className="banner__text-engname-p">Bread</p>
                  </span>
                  <p className="banner__text-vietname">Bánh mì hảo hạng</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section;
