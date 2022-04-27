import React from 'react'
import { Link } from 'react-router-dom';

import product1 from '../../../img/product1.jpg';
import product2 from '../../../img/product2.jpg';
import product3 from '../../../img/product3.jpg';
import product4 from '../../../img/product4.jpg';
import product5 from '../../../img/product5.jpg';
import product6 from '../../../img/product6.jpg';
import product7 from '../../../img/product7.jpg';
import product8 from '../../../img/product8.jpg';
import product9 from '../../../img/product9.jpg';

const Home = () => {
  return (
    <div>
      <div class="theme-background">
            <div class="theme-title">Tất cả sản phẩm</div>
        </div>
        <section className="body">
  <section className="frag">
    <div className="grid wide">
      <div className="row">
        <div className="col l-12">
          <ul className="frag__container">
            <li className="home">
              <Link to='/' className="frag__link"> Trang chủ</Link>
              <span className="gach">/</span>
            </li>
            <li>
              <span>Tất cả sản phẩm</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <div className="grid wide">
    <div className="row ">
      <div className="col l-3">
        <div className="category">
          <div className="category__colection">
            <h2 className="colection__title">
              <span className="colection__title-head">danh mục sản phẩm</span>
            </h2>
            <div className="colection__content">
              <ul className="colection__content-list">
                <li className="colection__content-item">
                  <a href="#" className="colection__content-link">Sản phẩm mới</a>
                </li>
                <li className="colection__content-item">
                  <a href="#" className="colection__content-link">Sản phẩm nổi bật</a>
                </li>
                <li className="colection__content-item">
                  <a href="#" className="colection__content-link">Pizza</a>
                </li>
                <li className="colection__content-item">
                  <a href="#" className="colection__content-link">Bánh ngọt</a>
                </li>
                <li className="colection__content-item">
                  <a href="#" className="colection__content-link">Bánh kem</a>
                </li>
                <li className="colection__content-item">
                  <a href="#" className="colection__content-link">Dồ ăn nhẹ</a>
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
                  <Link to='/spaghetti' className="selling__product-link">
                    <img src={product1} alt className="selling__product-img" />
                  </Link>
                </div>
                <div className="selling__product-content">
                  <Link to='/spaghetti' className="selling__product-title">Spaghetti Bolognaise</Link>
                  <div className="selling__product-price-box">
                    <span className="selling__product-price">340.000đ</span>
                  </div>
                </div>
              </div>
              <div className="selling__product-box">
                <div className="selling__product-image">
                  <Link to='/spbobittet' className="selling__product-link">
                    <img src={product2} alt className="selling__product-img" />
                  </Link>
                </div>
                <div className="selling__product-content">
                  <Link to='/spbobittet' className="selling__product-title">Salad bò bíp-tết</Link>
                  <div className="selling__product-price-box">
                    <span className="selling__product-price">234.000đ</span>
                    <span className="selling__product-price-sale">267.000đ</span>
                  </div>
                </div>
              </div>
              <div className="selling__product-box">
                <div className="selling__product-image">
                  <Link to='/sppizzahaisan' className="selling__product-link">
                    <img src={product3} alt className="selling__product-img" />
                  </Link>
                </div>
                <div className="selling__product-content">
                  <Link to='/sppizzahaisan' className="selling__product-title">Pizza hải sản xúc xích</Link>
                  <div className="selling__product-price-box">
                    <span className="selling__product-price">220.000đ</span>
                  </div>
                </div>
              </div>
              <div className="selling__product-box">
                <div className="selling__product-image">
                  <Link to='/homebanhTorrija' className="selling__product-link">
                    <img src={product4} alt className="selling__product-img" />
                  </Link>
                </div>
                <div className="selling__product-content">
                  <Link to='/homebanhTorrija' className="selling__product-title">Bánh Torrija</Link>
                  <div className="selling__product-price-box">
                    <span className="selling__product-price">50.000đ</span>
                    <span className="selling__product-price-sale">60.000đ</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col l-9">
        <div className="colection__title no-bottom">
          <h2 className="colection__title-head product--left"> tất cả sản phẩm</h2>
        </div>  
        <div className="product-list active" id="menu1">
          <div className="row ">
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link to='/spbobittet' className="product__preview-link">
                    <img src={product1} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">340.000đ</span>
                    <span className="product__price-sale" />
                  </div>
                  <Link to='/spbobittet' className="product__name">Spaghetti Bolognaise</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link to='/spbobittet' className="product__preview-link">
                    <img src={product2} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">234.000đ</span>
                    <span className="product__price-sale">267.000đ</span>
                  </div>
                  <Link to='/spbobittet' className="product__name"> Salad bò bíp-tết</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link to='/sppizzahaisan' className="product__preview-link">
                    <img src={product3} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">220.000đ</span>
                    <span className="product__price-sale" />
                  </div>
                  <Link to='/sppizzahaisan' className="product__name">Pizza hải sản xúc xích</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link to='/homebanhTorrija' className="product__preview-link">
                    <img src={product4} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">50.000đ</span>
                    <span className="product__price-sale">60000đ</span>
                  </div>
                  <Link to='/homebanhTorrija' className="product__name"> Bánh Torrija</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link to='/homesanphambanhtaonuong' className="product__preview-link">
                    <img src={product5} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">90.000đ</span>
                    <span className="product__price-sale">100.000đ</span>
                  </div>
                  <Link to='/homesanphambanhtaonuong' className="product__name">Bánh Táo nướng</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link to='/sanphamcomrangquantrung' className="product__preview-link">
                    <img src={product6} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">180.000đ</span>
                    <span className="product__price-sale">220.000đ</span>
                  </div>
                  <Link to='/sanphamcomrangquantrung' className="product__name">Cheese Burger (Beef)</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link to='/Sanphambanhsocolatanchay' className="product__preview-link">
                    <img src={product7} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">150.000đ</span>
                    <span className="product__price-sale" />
                  </div>
                  <Link to='/Sanphambanhsocolatanchay' className="product__name">Bánh Socola tan chảy &amp; kem</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link to='/sanphamcomrangquantrung' className="product__preview-link">
                    <img src={product8} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">120.000đ</span>
                    <span className="product__price-sale">150.000đ</span>
                  </div>
                  <Link to='/sanphamcomrangquantrung' className="product__name">Cơm Rang trứng cuộn</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link to='/spsaladbomy' className="product__preview-link">
                    <img src={product9} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">160.000đ</span>
                    <span className="product__price-sale">200.000đ</span>
                  </div>
                  <Link to='/spsaladbomy' className="product__name">Salar Bò Mỹ</Link>
                </div>
              </div>
            </div>
          </div>
        </div> 
        <div className="product-list" id="menu2">
          <div className="row ">
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link href="#" className="product__preview-link">
                    <img src={product9} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">160.000đ</span>
                    <span className="product__price-sale">200.000đ</span>
                  </div>
                  <Link href="#" className="product__name">Salar Bò Mỹ</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link href="#" className="product__preview-link">
                    <img src={product8} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">120.000đ</span>
                    <span className="product__price-sale">150.000đ</span>
                  </div>
                  <Link href="#" className="product__name">Cơm Rang trứng cuộn</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link to='/spaghetti' className="product__preview-link">
                    <img src={product1} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">340.000đ</span>
                    <span className="product__price-sale" />
                  </div>
                  <Link to='/spaghetti' className="product__name">Spaghetti Bolognaise</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link href="#" className="product__preview-link">
                    <img src={product2} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">234.000đ</span>
                    <span className="product__price-sale">267.000đ</span>
                  </div>
                  <Link href="#" className="product__name"> Salad bò bíp-tết</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link href="#" className="product__preview-link">
                    <img src={product3} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">220.000đ</span>
                    <span className="product__price-sale" />
                  </div>
                  <Link href="#" className="product__name">Pizza hải sản xúc xích</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link href="#" className="product__preview-link">
                    <img src={product4} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">50.000đ</span>
                    <span className="product__price-sale">60000đ</span>
                  </div>
                  <Link href="#" className="product__name"> Bánh Torrija</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link href="#" className="product__preview-link">
                    <img src={product5} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">90.000đ</span>
                    <span className="product__price-sale">100.000đ</span>
                  </div>
                  <Link href="#" className="product__name">Bánh Táo nướng</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link href="#" className="product__preview-link">
                    <img src={product5} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">180.000đ</span>
                    <span className="product__price-sale">220.000đ</span>
                  </div>
                  <Link href="#" className="product__name">Cheese Burger (Beef)</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link href="#" className="product__preview-link">
                    <img src={product7} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">150.000đ</span>
                    <span className="product__price-sale" />
                  </div>
                  <Link href="#" className="product__name">Bánh Socola tan chảy &amp; kem</Link>
                </div>
              </div>
            </div>                             
          </div>
        </div>
        <div className="product-list" id="menu3">
          <div className="row ">
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link href="/san-pham-spaghetti.html" className="product__preview-link">
                    <img src={product8} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">340.000đ</span>
                    <span className="product__price-sale" />
                  </div>
                  <Link href="/san-pham-spaghetti.html" className="product__name">Spaghetti Bolognaise</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link href="#" className="product__preview-link">
                    <img src={product2} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">234.000đ</span>
                    <span className="product__price-sale">267.000đ</span>
                  </div>
                  <Link href="#" className="product__name"> Salad bò bíp-tết</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link href="#" className="product__preview-link">
                    <img src={product3} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">220.000đ</span>
                    <span className="product__price-sale" />
                  </div>
                  <Link href="#" className="product__name">Pizza hải sản xúc xích</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link href="#" className="product__preview-link">
                    <img src={product4} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">50.000đ</span>
                    <span className="product__price-sale">60000đ</span>
                  </div>
                  <Link href="#" className="product__name"> Bánh Torrija</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link href="#" className="product__preview-link">
                    <img src={product5} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">90.000đ</span>
                    <span className="product__price-sale">100.000đ</span>
                  </div>
                  <Link href="#" className="product__name">Bánh Táo nướng</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link href="#" className="product__preview-link">
                    <img src={product6} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">180.000đ</span>
                    <span className="product__price-sale">220.000đ</span>
                  </div>
                  <Link href="#" className="product__name">Cheese Burger (Beef)</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link href="#" className="product__preview-link">
                    <img src={product7} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">150.000đ</span>
                    <span className="product__price-sale" />
                  </div>
                  <Link href="#" className="product__name">Bánh Socola tan chảy &amp; kem</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link href="#" className="product__preview-link">
                    <img src={product8} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">120.000đ</span>
                    <span className="product__price-sale">150.000đ</span>
                  </div>
                  <Link href="#" className="product__name">Cơm Rang trứng cuộn</Link>
                </div>
              </div>
            </div>
            <div className="col l-4 mg-bt">
              <div className="product">
                <div className="product__preview">
                  <Link href="#" className="product__preview-link">
                    <img src={product9} alt className="product__preview-img" />
                  </Link>
                  <div className="product__preview-buybox">
                  </div>
                </div>
                <div className="product__infor">
                  <div className="product__price">
                    <span className="product__price-main">160.000đ</span>
                    <span className="product__price-sale">200.000đ</span>
                  </div>
                  <Link href="#" className="product__name">Salar Bò Mỹ</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <section className="pagination">
    <button className="pagination-btn active" data-target="#menu1">1</button>
    <button className="pagination-btn" data-target="#menu2">2</button>
    <button className="pagination-btn" data-target="#menu3">3</button>
  </section> */}
</section>

    </div>
  )
}

export default Home