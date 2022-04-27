import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faShoppingBag} from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="grid wide">
          <div className="row no-gutters">
            <div className="col l-10">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#" className="nav__item-link active">
                    trang chủ
                  </a>
                </li>
                <li className="nav__item">
                  <Link to='/introduce' className="nav__item-link">
                    giới thiệu
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to="/product" className="nav__item-link">
                    sản phẩm
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to='/tintuc' className="nav__item-link">
                    tin tức
                  </Link>
                </li>
                <li className="nav__item">
                  <Link to='/signin' className="nav__item-link">
                    tài khoản
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col l-2">
              <div className="nav-icon">
                <div className="nav__search">
                  <FontAwesomeIcon className="fas fa-search nav__search-icon" icon={faSearch} />
                  <form action className="nav__search-form">
                    <input
                      className="nav__search-input"
                      type="text"
                      placeholder="Gõ tìm kiếm..."
                      required
                    />
                    <button type="submit" className="nav__search-submit">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                </div>
                <div className="nav__cart">
                  <a className="nav__cart-link">
                    <FontAwesomeIcon className="fas fa-shopping-basket nav__cart-icon" icon={faShoppingBag}  />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
