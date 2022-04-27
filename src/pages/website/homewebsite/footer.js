import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faInstagram,faBitcoin} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div>
        <footer className="footer">
  <div className="top-footer">
    <div className="grid wide">
      <div className="row">
        <div className="col l-9">
          <div className="row">
            <div className="col l-3">
              <div className="footer__wrapper">
                <div className="footer__wrapper-tiltle">về chúng tôi</div>
                <ul className="footer__wrapper-list">
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Trang chủ</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Giới thiệu</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Sản phẩm</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Khuyến mãi</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Tin tức</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Lien hệ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col l-3">
              <div className="footer__wrapper">
                <div className="footer__wrapper-tiltle">điều khoản</div>
                <ul className="footer__wrapper-list">
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Trang chủ</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Giới thiệu</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Sản phẩm</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Khuyến mãi</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Tin tức</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Lien hệ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col l-3">
              <div className="footer__wrapper">
                <div className="footer__wrapper-tiltle">hướng dẫn</div>
                <ul className="footer__wrapper-list">
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Trang chủ</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Giới thiệu</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Sản phẩm</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Khuyến mãi</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Tin tức</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Lien hệ</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col l-3">
              <div className="footer__wrapper">
                <div className="footer__wrapper-tiltle">chính sách</div>
                <ul className="footer__wrapper-list">
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Trang chủ</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Giới thiệu</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Sản phẩm</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Khuyến mãi</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Tin tức</a>
                  </li>
                  <li className="footer__wrapper-item">
                    <a href="#" className="footer__wrapper-link">Liên hệ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col l-3">
          <div className="footer__login">
            <div className="footer__wrapper-tiltle">đăng kí nhận tin</div>
            <div className="footer__login-content"> Đăng ký nhận thông tin ưu đãi cùng với khuyến mãi khủng từ Moc Food</div>
            <div className="footer__login-search">
              <form action className="footer__login-form">
                <input type="email" className="footer__login-input" placeholder="Email của bạn" required />
                <button type="submit" className="footer__login-btn">
                <FontAwesomeIcon icon={faBitcoin} />
                </button>
              </form>
            </div>
            <div className="footer__social">
              <a href="#" className="footer__social-item footer_color">
              <FontAwesomeIcon icon={faFacebook}/>
              </a>
              <a href="#" className="footer__social-item footer_color ">
              <FontAwesomeIcon icon={faTwitter}/>
              </a>
              <a href="#" className="footer__social-item footer_color ">
              <FontAwesomeIcon icon={faGoogle}/>
              </a>
              <a href="#" className="footer__social-item footer_color ">
              <FontAwesomeIcon icon={faInstagram}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mid-footer">
    <div className="grid wide">
      <div className="col l-12">
        <h1 className="mid-footer__name">cửa hàng đồ ăn nhanh Moc Food</h1>
        <div className="mid-footer__address">
          <span>Moc Food:</span>
          <span>Số 68, Hùng Vương, Phú Thọ, Việt Nam</span>
        </div>
        <div className="mid-footer__contact">
          <span>Hotline: <a href="#"> 1900 6868</a></span>
          <span>Email: <a href="#">thangldph10527@fpt.edu.vn</a></span>
        </div>
      </div>
    </div>
  </div>
  <div className="bottom-footer">
    <i className="far fa-copyright" />
    <p>Copyright by <a href="">Đức Thắng</a></p>
  </div>
</footer>

    </div>
  )
}

export default Footer