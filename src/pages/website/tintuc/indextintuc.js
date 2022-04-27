import React from "react";
import { Link } from "react-router-dom";
import blog1 from '../../../img/blog1.jpg'
import blog2 from '../../../img/blog2.jpg'
import blog3 from '../../../img/blog3.jpg'
import blog4 from '../../../img/blog4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faComment, faTag} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGoogle, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Indextintuc = () => {
  return (
    <div>
      <section className="body">
        <section className="frag">
          <div className="grid wide">
            <div className="row">
              <div className="col l-12">
                <ul className="frag__container">
                  <li className="home">
                    <Link to='/' className="frag__link">
                      Trang chủ
                    </Link>
                    <span className="gach">/</span>
                  </li>
                  <li>
                    <span>Tin tức</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="grid wide">
          <div className="row">
            <div className="col l-3">
              <div className="blog-category">
                <div className="blog-category__title">
                  <p>danh mục blog</p>
                </div>
                <ul className="blog-category__content">
                  <li className="blog-category__item list">
                    <Link to="/" className="blog-category__link">
                      Trang chủ
                    </Link>
                  </li>
                  <li className="blog-category__item list">
                    <Link to='/introduce' className="blog-category__link">
                      Giới thiệu
                    </Link>
                  </li>
                  <li className="blog-category__item list">
                    <Link to='/product' className="blog-category__link">
                      Sản phẩm
                    </Link>
                  </li>
                  <li className="blog-category__item list">
                    <a href="#" className="blog-category__link">
                      Khuyến mãi
                    </a>
                  </li>
                  <li className="blog-category__item list">
                    <a href="#" className="blog-category__link">
                      Tin tức
                    </a>
                  </li>
                </ul>
              </div>
              <div className="blog-category">
                <div className="blog-category__title">
                  <p>thẻ tags</p>
                </div>
                <ul className="blog-category__content">
                  <li className="blog-category__item blog-category__item--boder">
                    <a href="#" className="blog-category__link">
                      Hamburger
                    </a>
                  </li>
                  <li className="blog-category__item blog-category__item--boder">
                    <a href="#" className="blog-category__link">
                      Bánh ngọt
                    </a>
                  </li>
                  <li className="blog-category__item blog-category__item--boder">
                    <a href="#" className="blog-category__link">
                      Bánh Pizza
                    </a>
                  </li>
                  <li className="blog-category__item blog-category__item--boder">
                    <a href="#" className="blog-category__link">
                      Asian Bread
                    </a>
                  </li>
                  <li className="blog-category__item blog-category__item--boder">
                    <a href="#" className="blog-category__link">
                      Steak
                    </a>
                  </li>
                </ul>
              </div>
              <div className="blog-category" data-aos="fade-up">
                <div className="blog-category__title">
                  <p>tin tức nổi bật</p>
                </div>
                <ul className="blog-category__content not-pd">
                  <li className="blog-category__item ">
                    <div className="blog-category__box">
                      <a className="blog-category__box-img" href="#">
                        <img src={blog1} alt />
                      </a>
                      <a className="blog-category__box-text" href="#">
                        Cách làm Hamburger bò siêu nhanh cho bữa sáng
                      </a>
                    </div>
                  </li>
                  <li className="blog-category__item ">
                    <div className="blog-category__box">
                      <a className="blog-category__box-img" href="#">
                        <img src={blog2} alt />
                      </a>
                      <a className="blog-category__box-text" href="#">
                        Cách làm bánh pizza thơm ngon tại nhà
                      </a>
                    </div>
                  </li>
                  <li className="blog-category__item ">
                    <div className="blog-category__box">
                      <a className="blog-category__box-img" href="#">
                        <img src={blog3} alt />
                      </a>
                      <a className="blog-category__box-text" href="#">
                        Tận dụng kem bơ làm bánh cà phê ngon tuyệt
                      </a>
                    </div>
                  </li>
                  <li className="blog-category__item ">
                    <div className="blog-category__box">
                      <a className="blog-category__box-img" href="#">
                        <img src={blog4} alt />
                      </a>
                      <a className="blog-category__box-text" href="#">
                        Không thẻ cưỡng lại với kem ốc quế 3 tầng{" "}
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col l-9">
              <div className="list-blogs">
                <div className="myblog" data-aos="fade-up">
                  <div className="blog__thumnail">
                    <a href="/tin-tuc-1.html" className="blog__thumnail-link">
                      <img
                       src={blog1}
                        alt
                        className="blog__thumnail-img"
                      />
                    </a>
                  </div>
                  <div className="myblog__title">
                    <a href="/tin-tuc-1.html" className="myblock__title-link">
                      Cách làm Hamburger bò siêu nhanh cho bữa sáng
                    </a>
                  </div>
                  <p className="myblog__title-content">
                    Hamburger là món ăn nhanh được rất nhiều bạn trẻ yêu thích
                    hiện nay, vậy chúng ta cùng trổ tài với cách làm Hamburger
                    bò tại nhà nào các bạn. Nguyên liệu: - 1 bánh mì tròn - 300g
                    thịt bò xay - 30g bột chiên xù - 1 lát pho...
                    <a href="/tin-tuc-1.html">[Đọc tiếp]</a>
                  </p>
                  <div className="row ">
                    <div className="col l-9">
                      <div className="time-post">
                        <span className="time-date">
                          <FontAwesomeIcon icon={faCalendar} />
                          24/1/2022
                        </span>
                        <span className="time-comment">
                        <FontAwesomeIcon icon={faComment} />
                        </span>
                        <span className="time-tag">
                        <FontAwesomeIcon icon={faTag} />
                          Tags:
                          <a href="#" className="time-tag-link">
                            Bánh Pizza
                          </a>
                          ,
                          <a href="#" className="time-tag-link">
                            Hamberger
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="col l-3">
                      <div className="social">
                        <a href="#" className="social-link">
                          <i><FontAwesomeIcon icon={faFacebook}/></i>
                        </a>
                        <a href="#" className="social-link">
                        <i><FontAwesomeIcon icon={faTwitter}/></i>
                        </a>
                        <a href="#" className="social-link">
                         <i><FontAwesomeIcon icon={faGoogle}/></i>
                        </a>
                        <a href="#" className="social-link">
                        <i><FontAwesomeIcon icon={faYoutube}/></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="myblog" data-aos="fade-up">
                  <div className="blog__thumnail">
                    <a href="#" className="blog__thumnail-link">
                      <img
                        src={blog2}
                        alt
                        className="blog__thumnail-img"
                      />
                    </a>
                  </div>
                  <div className="myblog__title">
                    <a href="#" className="myblock__title-link">
                      Cách làm Pizza ngon tại nhà
                    </a>
                  </div>
                  <p className="myblog__title-content">
                    Vào đầu thế kỷ 20, người ta thấy có một loại bánh đặc biệt
                    theo những đoàn người Ý di cư sang châu Mỹ và có mặt ở nhiều
                    nước trên thế giới đó là bánh pizza. Đây là loại bánh có đế
                    tròn, dẹt được chế biến từ nước, bột mỳ và nấm men, sau khi
                    đã được...
                    <a href="#">[Đọc tiếp]</a>
                  </p>
                  <div className="row ">
                  <div className="col l-9">
                      <div className="time-post">
                        <span className="time-date">
                          <FontAwesomeIcon icon={faCalendar} />
                          24/1/2022
                        </span>
                        <span className="time-comment">
                        <FontAwesomeIcon icon={faComment} />
                        </span>
                        <span className="time-tag">
                        <FontAwesomeIcon icon={faTag} />
                          Tags:
                          <a href="#" className="time-tag-link">
                            Bánh Pizza
                          </a>
                          ,
                          <a href="#" className="time-tag-link">
                            Hamberger
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="col l-3">
                      <div className="social">
                        <a href="#" className="social-link">
                          <i><FontAwesomeIcon icon={faFacebook}/></i>
                        </a>
                        <a href="#" className="social-link">
                        <i><FontAwesomeIcon icon={faTwitter}/></i>
                        </a>
                        <a href="#" className="social-link">
                         <i><FontAwesomeIcon icon={faGoogle}/></i>
                        </a>
                        <a href="#" className="social-link">
                        <i><FontAwesomeIcon icon={faYoutube}/></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="myblog" data-aos="fade-up">
                  <div className="blog__thumnail">
                    <a href="#" className="blog__thumnail-link">
                      <img
                        src={blog3}
                        alt
                        className="blog__thumnail-img"
                      />
                    </a>
                  </div>
                  <div className="myblog__title">
                    <a href="#" className="myblock__title-link">
                      Tận dụng kem bơ làm bánh cà phê ngon tuyệt
                    </a>
                  </div>
                  <p className="myblog__title-content">
                    Với cách làm này, từ nay bạn không sợ phần kem bơ sau khi
                    trang trí những chiếc bánh kem bị bỏ đi uổng phí nữa nhé!
                    Nguyên liệu: - 400g kem bơ sữa tươi ( tỉ lệ bơ, sữa, đường
                    của kem là 1 : 1 : 0,3) - 500g bột mỳ - 200g đường (hoặc ...{" "}
                  </p>
                  <div className="row ">
                  <div className="col l-9">
                      <div className="time-post">
                        <span className="time-date">
                          <FontAwesomeIcon icon={faCalendar} />
                          24/1/2022
                        </span>
                        <span className="time-comment">
                        <FontAwesomeIcon icon={faComment} />
                        </span>
                        <span className="time-tag">
                        <FontAwesomeIcon icon={faTag} />
                          Tags:
                          <a href="#" className="time-tag-link">
                            Bánh Pizza
                          </a>
                          ,
                          <a href="#" className="time-tag-link">
                            Hamberger
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="col l-3">
                      <div className="social">
                        <a href="#" className="social-link">
                          <i><FontAwesomeIcon icon={faFacebook}/></i>
                        </a>
                        <a href="#" className="social-link">
                        <i><FontAwesomeIcon icon={faTwitter}/></i>
                        </a>
                        <a href="#" className="social-link">
                         <i><FontAwesomeIcon icon={faGoogle}/></i>
                        </a>
                        <a href="#" className="social-link">
                        <i><FontAwesomeIcon icon={faYoutube}/></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="myblog" data-aos="fade-up">
                  <div className="blog__thumnail">
                    <a href="#" className="blog__thumnail-link">
                      <img
                       src={blog4}
                        alt
                        className="blog__thumnail-img"
                      />
                    </a>
                  </div>
                  <div className="myblog__title">
                    <a href="#" className="myblock__title-link">
                      Không thẻ cưỡng lại với kem ốc quế 3 tầng
                    </a>
                  </div>
                  <p className="myblog__title-content">
                    Quả việt quất (blueberry) là loại quả được yêu thích trên
                    toàn thế giới không chỉ vì chúng ngon mà còn bởi chúng cung
                    cấp nhiều lợi ích sức khỏe của chúng ta. Nó có nhiều chất bổ
                    dưỡng giúp chống lại bệnh tiểu đường, bệnh tim mạch, giảm
                    cholester...{" "}
                  </p>
                  <div className="row ">
                  <div className="col l-9">
                      <div className="time-post">
                        <span className="time-date">
                          <FontAwesomeIcon icon={faCalendar} />
                          24/1/2022
                        </span>
                        <span className="time-comment">
                        <FontAwesomeIcon icon={faComment} />
                        </span>
                        <span className="time-tag">
                        <FontAwesomeIcon icon={faTag} />
                          Tags:
                          <a href="#" className="time-tag-link">
                            Bánh Pizza
                          </a>
                          ,
                          <a href="#" className="time-tag-link">
                            Hamberger
                          </a>
                        </span>
                      </div>
                    </div>
                    <div className="col l-3">
                      <div className="social">
                        <a href="#" className="social-link">
                          <i><FontAwesomeIcon icon={faFacebook}/></i>
                        </a>
                        <a href="#" className="social-link">
                        <i><FontAwesomeIcon icon={faTwitter}/></i>
                        </a>
                        <a href="#" className="social-link">
                         <i><FontAwesomeIcon icon={faGoogle}/></i>
                        </a>
                        <a href="#" className="social-link">
                        <i><FontAwesomeIcon icon={faYoutube}/></i>
                        </a>
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

export default Indextintuc;
