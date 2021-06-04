import React from 'react';
import map from "../../assets/images/map.svg";
import phone from "../../assets/images/phone.svg";
import fax from "../../assets/images/fax.svg";
import email from "../../assets/images/email.svg";
import footer_extend from "../../assets/images/footer_extend.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top container">
        <div className="row">
          <div className="footer-top ">
            <div className="col-sm-12 col-lg-4">
              <div className="top_contact-title">
                <p className="top_contact-title">LIÊN HỆ VỚI CHÚNG TÔI</p><br />
                <ul>
                  <li className="li_footer"> <img alt="img" src={map} /> Tầng 4, tòa nhà Hanoi Group Số 442 Đội Cấn, P. Cống Vị, Q. Ba Đình, Hà Nội</li>
                  <li className="li_footer"> <img alt="img" src={phone} /> (04) 6674 2332 - &emsp;<img alt="img" src={fax} /> (04) 3786 8904 </li>
                  <li className="li_footer"> <img alt="img" src={phone} /> (08) 6608 9686 <span> &ensp; <img alt="img" src={email} /> Support@bizweb.vn</span> </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-lg-2">
              <div className="top_contact-title">
                <p className="top_contact-title"> CHUYỂN HÀNG</p><br />
                <ul>
                  <li className="li_footer"> Mua sắm trực tuyến</li>
                  <li className="li_footer"> Đến từ chúng tôi gửi đến</li>
                  <li className="li_footer"> Chính sách vận chuyển</li>
                  <li className="li_footer"> Vận chuyển thông tin</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-lg-2">
              <div className="top_contact-title">
                <p className="top_contact-title"> CHUYỂN HÀNG</p><br />
                <ul>
                  <li className="li_footer"> Mua sắm trực tuyến</li>
                  <li className="li_footer"> Đến từ chúng tôi gửi đến</li>
                  <li className="li_footer"> Chính sách vận chuyển</li>
                  <li className="li_footer"> Vận chuyển thông tin</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-lg-2">
              <div className="top_contact-title">
                <p className="top_contact-title"> CHUYỂN HÀNG</p><br />
                <ul>
                  <li className="li_footer"> Mua sắm trực tuyến</li>
                  <li className="li_footer"> Đến từ chúng tôi gửi đến</li>
                  <li className="li_footer"> Chính sách vận chuyển</li>
                  <li className="li_footer"> Vận chuyển thông tin</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-lg-2">
              <div className="top_contact-title">
                <p className="top_contact-title"> CHUYỂN HÀNG</p><br />
                <ul>
                  <li className="li_footer"> Mua sắm trực tuyến</li>
                  <li className="li_footer"> Đến từ chúng tôi gửi đến</li>
                  <li className="li_footer"> Chính sách vận chuyển</li>
                  <li className="li_footer"> Vận chuyển thông tin</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="footer-algin-center container-fluid"></div>

      <div className="container">
        <div className="footer-bottom row">
          <div className="col-sm-6 col-md-8">
            <p className="footer-bottom_left">
              © Copyright 2008-2014 DKT Technology JSC
            </p>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="footer-bottom_right d-flex justify-content-end">
              <img src={footer_extend} alt="" />
            </div>
          </div>
        </div>
      </div>





    </div>
  );
}

export default Footer;
