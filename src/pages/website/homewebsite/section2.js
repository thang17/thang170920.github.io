import React from "react";
import product1 from "../../../img/product1.jpg";
import product2 from "../../../img/product2.jpg";
import product3 from "../../../img/product3.jpg";
import product4 from "../../../img/product4.jpg";
import product6 from "../../../img/product6.jpg";
import product5 from "../../../img/product5.jpg";
import product7 from "../../../img/product7.jpg";
import salebanner from "../../../img/sale-banner.jpg";
import salebanner2 from "../../../img/sale-banner2.jpg";
import salebanner3 from "../../../img/sale-banner3.jpg";
import {Link} from 'react-router-dom'


const Section2 = () => {
  return (
    <div>
      <section className="body">
        <div className="grid wide">
          <div className="row ">
            <div className="col l-3">
              <div className="category">
                <div className="category__colection">
                  <h2 className="colection__title">
                    <span className="colection__title-head">
                      danh mục sản phẩm
                    </span>
                  </h2>
                  <div className="colection__content">
                    <ul className="colection__content-list">
                      <li className="colection__content-item">
                        <a href="#" className="colection__content-link">
                          Sản phẩm mới
                        </a>
                      </li>
                      <li className="colection__content-item">
                        <a href="#" className="colection__content-link">
                          Sản phẩm nổi bật
                        </a>
                      </li>
                      <li className="colection__content-item">
                        <a href="#" className="colection__content-link">
                          Pizza
                        </a>
                      </li>
                      <li className="colection__content-item">
                        <a href="#" className="colection__content-link">
                          Bánh ngọt
                        </a>
                      </li>
                      <li className="colection__content-item">
                        <a href="#" className="colection__content-link">
                          Bánh kem
                        </a>
                      </li>
                      <li className="colection__content-item">
                        <a href="#" className="colection__content-link">
                          Dồ ăn nhẹ
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="category__selling">
                  <div className="colection__title">
                    <h2 className="colection__title-head">sản phẩm bán chạy</h2>
                  </div>
                  <div className="selling__product">
                    <div className="selling__product-box">
                      <div className="selling__product-image">
                        <Link
                         to="/spaghetti"
                          className="selling__product-link"
                        >
                          <img
                            src={product1}
                            alt
                            className="selling__product-img"
                          />
                        </Link>
                      </div>
                      <div className="selling__product-content">
                        <Link
                          to="/spaghetti"
                          className="selling__product-title"
                        >
                          Spaghetti Bolognaise
                        </Link>
                        <div className="selling__product-price-box">
                          <span className="selling__product-price">
                            340.000đ
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="selling__product-box">
                      <div className="selling__product-image">
                        <Link
                          to='/spbobittet'
                          className="selling__product-link"
                        >
                          <img
                            src={product2}
                            alt
                            className="selling__product-img"
                          />
                        </Link>
                      </div>
                      <div className="selling__product-content">
                        <Link
                          to='/spbobittet'
                          className="selling__product-title"
                        >
                          Salad bò bíp-tết
                        </Link>
                        <div className="selling__product-price-box">
                          <span className="selling__product-price">
                            234.000đ
                          </span>
                          <span className="selling__product-price-sale">
                            267.000đ
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="selling__product-box">
                      <div className="selling__product-image">
                        <Link
                          to='/sppizzahaisan'
                          className="selling__product-link"
                        >
                          <img
                            src={product3}
                            alt
                            className="selling__product-img"
                          />
                        </Link>
                      </div>
                      <div className="selling__product-content">
                        <Link
                          to='/sppizzahaisan'
                          className="selling__product-title"
                        >
                          Pizza hải sản xúc xích
                        </Link>
                        <div className="selling__product-price-box">
                          <span className="selling__product-price">
                            220.000đ
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="selling__product-box">
                      <div className="selling__product-image">
                        <Link
                          to='/homebanhTorrija'
                          className="selling__product-link"
                        >
                          <img
                            src={product4}
                            alt
                            className="selling__product-img"
                          />
                        </Link>
                      </div>
                      <div className="selling__product-content">
                        <Link
                          to='/homebanhTorrija'
                          className="selling__product-title"
                        >
                          Bánh Torrija
                        </Link>
                        <div className="selling__product-price-box">
                          <span className="selling__product-price">
                            50.000đ
                          </span>
                          <span className="selling__product-price-sale">
                            60.000đ
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col l-9">
              <div className="row ">
                <div className="col l-12">
                  <div className="main-product">
                    <div className="colection__title no-bottom">
                      <h2 className="colection__title-head product--left">
                        sản phẩm nổi bật
                      </h2>
                    </div>
                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                    <div className="swiper mySwiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="product">
                            <div className="product__preview">
                              <Link
                                to='/spaghetti'
                                className="product__preview-link"
                              >
                                <img
                                  src={product1}
                                  alt
                                  className="product__preview-img"
                                />
                              </Link>
                              <div className="product__preview-buybox"></div>
                            </div>
                            <div className="product__infor">
                              <div className="product__price">
                                <span className="product__price-main">
                                  340.000đ
                                </span>
                                <span className="product__price-sale" />
                              </div>
                              <a
                                to='/spaghetti'
                                className="product__name"
                              >
                                Spaghetti Bolognaise
                              </a>
                            </div>
                          </div>

                          <div className="product">
                            <div className="product__preview">
                              <Link
                                 to='/spbobittet'
                                className="product__preview-link"
                              >
                                <img
                                  src={product2}
                                  alt
                                  className="product__preview-img"
                                />
                              </Link>
                              <div className="product__preview-buybox"></div>
                            </div>
                            <div className="product__infor">
                              <div className="product__price">
                                <span className="product__price-main">
                                  234.000đ
                                </span>
                                <span className="product__price-sale">
                                  267.000đ
                                </span>
                              </div>
                              <Link
                                to='/spbobittet'
                                className="product__name"
                              >
                                {" "}
                                Salad bò bíp-tết
                              </Link>
                            </div>
                          </div>
                          <div className="product">
                            <div className="product__preview">
                              <Link
                               to='/sppizzahaisan'
                                className="product__preview-link"
                              >
                                <img
                                  src={product3}
                                  alt
                                  className="product__preview-img"
                                />
                              </Link>
                              <div className="product__preview-buybox"></div>
                            </div>
                            <div className="product__infor">
                              <div className="product__price">
                                <span className="product__price-main">
                                  220.000đ
                                </span>
                                <span className="product__price-sale" />
                              </div>
                              <Link
                               to='/sppizzahaisan'
                                className="product__name"
                              >
                                Pizza hải sản xúc xích
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="swiper mySwiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="product">
                            <div className="product__preview">
                              <Link
                                to='/spaghetti'
                                className="product__preview-link"
                              >
                                <img
                                  src={product5}
                                  alt
                                  className="product__preview-img"
                                />
                              </Link>
                              <div className="product__preview-buybox"></div>
                            </div>
                            <div class="product__infor">
                              <div class="product__price">
                                <span class="product__price-main">
                                  180.000đ
                                </span>
                                <span class="product__price-sale">
                                  220.000đ
                                </span>
                              </div>
                              <Link
                                to='/sanphambanhcheeseburger'
                                class="product__name"
                              >
                                Cheese Burger (Beef)
                              </Link>
                            </div>
                          </div>

                          <div className="product">
                            <div className="product__preview">
                              <Link
                                to="/spbobittet"
                                className="product__preview-link"
                              >
                                <img
                                  src={product7}
                                  alt
                                  className="product__preview-img"
                                />
                              </Link>
                              <div className="product__preview-buybox"></div>
                            </div>
                            <div class="product__infor">
                              <div class="product__price">
                                <span class="product__price-main">
                                  150.000đ
                                </span>
                                <span class="product__price-sale"></span>
                              </div>
                              <Link
                                to='/Sanphambanhsocolatanchay'
                                class="product__name"
                              >
                                Bánh Socola tan chảy & kem
                              </Link>
                            </div>
                          </div>
                          <div className="product">
                            <div className="product__preview">
                              <Link
                                to='/sppizzahaisan'
                                className="product__preview-link"
                              >
                                <img
                                  src={product6}
                                  alt
                                  className="product__preview-img"
                                />
                              </Link>
                              <div className="product__preview-buybox"></div>
                            </div>
                            <div class="product__infor">
                              <div class="product__price">
                                <span class="product__price-main">
                                  120.000đ
                                </span>
                                <span class="product__price-sale">
                                  150.000đ
                                </span>
                              </div>
                              <Link
                               to='/sanphamcomrangquantrung'
                                class="product__name"
                              >
                                Cơm Rang trứng cuộn
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col l-12">
                  <div className="sale-banner" data-aos="fade-up">
                    <div className="sale-banner__item">
                      <img src={salebanner} alt className="sale-banner__img" />
                      <div className="sale-banner__text">
                        <span className="sale-banner__title">Best sale of</span>
                        <span className="sale-banner__des">
                          Giảm 50% tất cả các mặt hàng
                        </span>
                      </div>
                      <span className="sale-banner__percent">
                        <span>-50%</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col l-12">
                  <div className="colection__title no-bottom">
                    <h2 className="colection__title-head product--left">
                      sản phẩm mới
                    </h2>
                  </div>
                  <div className="new-product">
                    <div className="row">
                      <div className="col l-12">
                        <div className="swiper mySwiper2">
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <div className="product">
                                <div className="product__preview">
                                  <Link
                                    to='/spaghetti'
                                    className="product__preview-link"
                                  >
                                    <img
                                      src={product6}
                                      alt
                                      className="product__preview-img"
                                    />
                                  </Link>
                                  <div className="product__preview-buybox"></div>
                                </div>
                                <div class="product__infor">
                                  <div class="product__price">
                                    <span class="product__price-main">
                                      120.000đ
                                    </span>
                                    <span class="product__price-sale">
                                      150.000đ
                                    </span>
                                  </div>
                                  <Link
                                    to='/sanphamcomrangquantrung'
                                    class="product__name"
                                  >
                                    Cơm Rang trứng cuộn
                                  </Link>
                                </div>
                              </div>

                              <div className="product">
                                <div className="product__preview">
                                  <Link
                                    to='/spbobittet'
                                    className="product__preview-link"
                                  >
                                    <img
                                      src={product5}
                                      alt
                                      className="product__preview-img"
                                    />
                                  </Link>
                                  <div className="product__preview-buybox"></div>
                                </div>
                                <div class="product__infor">
                                  <div class="product__price">
                                    <span class="product__price-main">
                                      180.000đ
                                    </span>
                                    <span class="product__price-sale">
                                      220.000đ
                                    </span>
                                  </div>
                                  <Link
                                    to='/sanphambanhcheeseburger'
                                    class="product__name"
                                  >
                                    Cheese Burger (Beef)
                                  </Link>
                                </div>
                              </div>
                              <div className="product">
                                <div className="product__preview">
                                  <Link
                                    to='/sppizzahaisan'
                                    className="product__preview-link"
                                  >
                                    <img
                                      src={product7}
                                      alt
                                      className="product__preview-img"
                                    />
                                  </Link>
                                  <div className="product__preview-buybox"></div>
                                </div>
                                <div class="product__infor">
                                  <div class="product__price">
                                    <span class="product__price-main">
                                      150.000đ
                                    </span>
                                    <span class="product__price-sale"></span>
                                  </div>
                                  <Link
                                    to='/Sanphambanhsocolatanchay'
                                    class="product__name"
                                  >
                                    Bánh Socola tan chảy & kem
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col l-6">
                  <div className="sale-banner" data-aos="fade-left">
                    <div className="sale-banner__item">
                      <img src={salebanner2} alt className="sale-banner__img" />
                    </div>
                  </div>
                </div>
                <div className="col l-6">
                  <div className="sale-banner" data-aos="fade-right">
                    <div className="sale-banner__item">
                      <img src={salebanner3} alt className="sale-banner__img" />
                    </div>
                  </div>
                </div>
                <div className="col l-12">
                  <div className="week-product">
                    <div className="colection__title no-bottom">
                      <h2 className="colection__title-head product--left">
                        bán chạy trong tuần
                      </h2>
                    </div>
                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                    <div className="swiper mySwiper3">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="product">
                            <div className="product__preview">
                              <Link
                                to='/spaghetti'
                                className="product__preview-link"
                              >
                                <img
                                  src={product1}
                                  alt
                                  className="product__preview-img"
                                />
                              </Link>
                              <div className="product__preview-buybox"></div>
                            </div>
                            <div className="product__infor">
                              <div className="product__price">
                                <span className="product__price-main">
                                  340.000đ
                                </span>
                                <span className="product__price-sale" />
                              </div>
                              <Link
                                 to='/spaghetti'
                                className="product__name"
                              >
                                Spaghetti Bolognaise
                              </Link>
                            </div>
                          </div>

                          <div className="product">
                            <div className="product__preview">
                              <Link
                                to='/spbobittet'
                                className="product__preview-link"
                              >
                                <img
                                  src={product2}
                                  alt
                                  className="product__preview-img"
                                />
                              </Link>
                              <div className="product__preview-buybox"></div>
                            </div>
                            <div className="product__infor">
                              <div className="product__price">
                                <span className="product__price-main">
                                  234.000đ
                                </span>
                                <span className="product__price-sale">
                                  267.000đ
                                </span>
                              </div>
                              <a
                                href="/san-pham-salad-bobittet.html"
                                className="product__name"
                              >
                                {" "}
                                Salad bò bíp-tết
                              </a>
                            </div>
                          </div>
                          <div className="product">
                            <div className="product__preview">
                              <Link
                                 to='/spbobittet'
                                className="product__preview-link"
                              >
                                <img
                                  src={product3}
                                  alt
                                  className="product__preview-img"
                                />
                              </Link>
                              <div className="product__preview-buybox"></div>
                            </div>
                            <div className="product__infor">
                              <div className="product__price">
                                <span className="product__price-main">
                                  220.000đ
                                </span>
                                <span className="product__price-sale" />
                              </div>
                              <Link
                               to='/sppizzahaisan'
                                className="product__name"
                              >
                                Pizza hải sản xúc xích
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section2;
