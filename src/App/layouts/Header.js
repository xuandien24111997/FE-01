import React, { useState } from 'react';
import logo from "../../assets/images/logo.png";
import product from "../../assets/images/product.png";
import {  Link } from "react-router-dom";

function Header() {
  const [show, setShow] = useState(false);
  return (
    <div className="header ">
      <div className="container">
        <div className="row">
          <div className="head-logo col-sm-6 col-lg-3 col-3">
            <Link to="/">
              <img  src={logo} alt="" />
            </Link>
          </div>
          <div className="head-menu col-lg-7 col-7">
            <ul className="menu-list ">
              <li> <Link className="menu-list_a" to="/">TRANG CHỦ </Link></li>
              <li> <Link className="menu-list_a" to="/about">GIỚI THIỆU </Link> </li>
              <li className="menu-list_dropdown" > <Link className="menu-list_a" to="/product"> SẢN PHẨM</Link> <i className="fas fa-chevron-down"></i>
                <ul className="menu-list_dropdown-list">
                  <div className="menu-list_dropdown-arrow"></div>
                  <div className="menu-list_dropdown-table row ">
                    <div className="col-sm-12 col-md-4 ">
                      <p className="dropdown-tittle ">DƯỠNG DA</p> <hr />
                      <ul className="dropdown-details">
                        <li className="li-details">Áo khoác</li>
                        <li className="li-details">Bộ áo liền quần</li>
                        <li className="li-details">Dresses</li>
                        <li className="li-details">Quần/Váy</li>
                        <li className="li-details">Quần Short</li>
                        <li className="li-details">Quần Jean</li>
                        <li className="li-details">Đồ đan</li>
                        <li className="li-details">Áo nỉ</li>
                      </ul>
                    </div>
                    <div className="col-sm-12 col-md-4">
                      <p className="dropdown-tittle">NƯỚC HOA</p><hr />
                      <ul className="dropdown-details">
                        <li className="li-details">Áo cánh / Áo sơ mi</li>
                        <li className="li-details">Túi xách & Balô</li>
                        <li className="li-details">Khăn quàng cổ và Foulards</li>
                        <li className="li-details">Dệt kim Hats & Gloves</li>
                        <li className="li-details">Vớ & Stock</li>
                        <li className="li-details">Jewerly</li>
                        <li className="li-details">Bị bảo vệ</li>
                        <li className="li-details">Giày</li>
                      </ul>
                    </div>
                    <div className="col-sm-12 col-md-4">
                      <p className="dropdown-tittle"> <Link to="/cart">TRANG SỨC </Link> </p><hr />
                      <ul className="dropdown-details">
                        <li className="li-details"> <Link to="/product-detail">Áo cánh / Áo sơ mi </Link> </li>
                        <li className="li-details">Túi xách & Balô</li>
                        <li className="li-details">Khăn quàng cổ và Foulards</li>
                        <li className="li-details">Dệt kim Hats & Gloves</li>
                        <li className="li-details">Vớ & Stock</li>
                        <li className="li-details">Jewerly</li>
                        <li className="li-details">Bị bảo vệ</li>
                        <li className="li-details">Giày</li>
                      </ul>
                    </div>
                  </div>
                </ul>
              </li>
              <li><Link className="menu-list_a" to="/blog"> TIN TỨC </Link></li>
              <li> <Link className="menu-list_a" to="/404-fonud-page"> BẢN ĐỒ </Link> </li>
              <li><Link className="menu-list_a" to="/contact"> LIÊN HỆ </Link></li>
            </ul>
          </div>
          <div className="head-item col-sm-4 col-lg-2 col-2 ">
            <ul className="d-flex">
              <li className="head-item_cart "> <Link to="/cart"> <i className="fas fa-shopping-cart"></i> </Link> 
                <ul className="item-cart">
                  {/* arrow up */}
                  <div className="item-cart_arrow"></div>
                  {/* list cart  */}
                  <div className="item-cart_list">
                    {/* no 1  */}
                    <div className="item-cart_list-cart ">
                      <div className="item-cart_list-img">
                        <img src={product} alt="" />
                      </div>
                      <div className="item-cart_list-title">
                        <span className="item-cart_name">Áo sơ mi Nam</span><br />
                        <span className="item-cart_cost">120.000
                                <span className="item-cart_cost-icon">đ</span>
                        </span>
                      </div>
                      <div className="item-cart_list-remove">
                        <i className="fas fa-times"></i>
                      </div>
                    </div>
                    <br />
                    <div className="item-cart_list-cart ">
                      <div className="item-cart_list-img">
                        <img src={product} alt="" />
                      </div>
                      <div className="item-cart_list-title">
                        <span className="item-cart_name">Áo sơ mi Nam</span><br />
                        <span className="item-cart_cost">120.000
                                <span className="item-cart_cost-icon">đ</span>
                        </span>
                      </div>
                      <div className="item-cart_list-remove">
                        <i className="fas fa-times"></i>
                      </div>
                    </div>
                    <hr />
                    <div className="item-cart_list-title d-flex row">
                      <div className="col-7" >
                        <span className="list-cart_total ">Tổng số</span>
                      </div>
                      <div className="col-5">
                        <span className="item-cart_total-cost">240.000
                                  <span className="item-cart_cost-icon">đ</span>
                        </span>
                      </div>
                    </div><br />
                    <div className="list-cart_view-cart">
                      GIỎ HÀNG
                      </div>
                  </div>
                </ul>
              </li>
              <li className="head-item_search"><i className="fas fa-search"></i></li>
              <li className="head-item_mobile"
                onClick={() => setShow(!show)} >
                <i className=" head-item_mobile-show  fas fa-align-justify" ></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {
        show && (
          <div className="head_show-list ">
            <ul className="show-list_menu-ul">
              <li className="show-list_menu-li"><Link className="menu-list_a" to="/">TRANG CHỦ </Link></li>
              <li className="show-list_menu-li"><Link className="menu-list_a" to="/about">GIỚI THIỆU</Link></li>
              <li className="show-list_menu-li"><Link className="menu-list_a" to="/product"> SẢN PHẨM</Link>  </li>
              <li className="show-list_menu-li"><Link className="menu-list_a" to="/blog"> TIN TỨC </Link></li>
              <li className="show-list_menu-li"><Link className="menu-list_a" to="/404-fonud-page"> BẢN ĐỒ </Link></li>
              <li className="show-list_menu-li"><Link className="menu-list_a" to="/contact"> LIÊN HỆ </Link></li>
            </ul>
          </div>
        )}
    </div>
  );
}

export default Header;
