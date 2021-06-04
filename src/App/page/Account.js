import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import phone from "../../assets/images/phone.svg";
import { Link } from "react-router-dom";

export default function Account() {
  return (
    <div>
      <Header />
      <section className="section__account">
        <div className="container">
          <div className="path">
            <Link to="/" className="path__name">
              Home
                </Link>
            <Link to="/account" className="path__name">
              Tài khoản
                </Link>
          </div>
          <div className="account__wrapper">
            <h3>Tài khoản</h3>
            <div className="row">
              <div className="col-sm-12 col-lg-9">
                <table>
                  <thead>
                    <tr>
                      <th>Order</th>
                      <th>Date</th>
                      <th>Tình trạng thanh toán</th>
                      <th>Tổng</th>
                      <th>Nợ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <p>#1006</p>
                      </td>
                      <td>
                        <p>May 13, 2013</p>
                      </td>
                      <td>
                        <p>Đã thanh toán</p>
                      </td>
                      <td>
                        <p className="price">
                          350.000 <span>đ</span>
                        </p>
                      </td>
                      <td>
                        <p className="price">0</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>#1006</p>
                      </td>
                      <td>
                        <p>May 13, 2013</p>
                      </td>
                      <td>
                        <p>Đã thanh toán</p>
                      </td>
                      <td>
                        <p className="price">
                          350.000 <span>đ</span>
                        </p>
                      </td>
                      <td>
                        <p className="price">0</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>#1006</p>
                      </td>
                      <td>
                        <p>May 13, 2013</p>
                      </td>
                      <td>
                        <p>Đã thanh toán</p>
                      </td>
                      <td>
                        <p className="price">
                          350.000 <span>đ</span>
                        </p>
                      </td>
                      <td>
                        <p className="price">0</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p>#1006</p>
                      </td>
                      <td>
                        <p>May 13, 2013</p>
                      </td>
                      <td>
                        <p>Thanh toán 50%</p>
                      </td>
                      <td>
                        <p className="price">
                          350.000 <span>đ</span>
                        </p>
                      </td>
                      <td>
                        <p className="price">
                          175.000<span>đ</span>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col-sm-12 col-lg-3">
                <div className="account__details">
                  <h4 className="details__title">Chi tiết tài khoản</h4>
                  <ul className="details__list">
                    <li className="list__item">
                      <i className="icon fa fa-user"></i>
                      <p className="name">
                        GiangLe
                            <span>Leanhgiang89@gmail.com</span>
                      </p>
                    </li>
                    <li className="list__item">
                      <i className="icon fa fa-map-marker"></i>
                      <p>Tòa nhà Hà Nội group 442 Đội Cấn, Ba Đình Hà Nội</p>
                    </li>
                    <li className="list__item">
                      <img className="icon" src={phone} alt="" />
                      <p>(04) 3786 8904</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}


