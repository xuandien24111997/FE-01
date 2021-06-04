import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Link } from "react-router-dom";
import about from "../../assets/images/about.png";
import logo from "../../assets/images/logo.png";

export default function About() {
  return (
    <div>
      <Header />
      <section className="about">
        <div className="container">
          <div className="path">
            <Link to="/" className="path__name">
              Home
                    </Link>
            <Link to="/about" className="path__name">
              Về chúng tôi
                    </Link>
          </div>
          <div className="about__wrap">
            <h3>Về chúng tôi</h3>
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <div>
                  <img src={about} alt="" style={{ maxWidth: "100%" }} />
                </div>
              </div>
              <div className="col-sm-12 col-lg-6">
                <div className="about__content">
                  <div className="about__logo">
                    <img src={logo} alt="" />
                  </div>
                  <h3>Giới thiệu chung về mỹ phẩm handmade Mandala</h3>
                  <p className="about__text">
                    Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                    quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi
                    bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt. Hi,
                    chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
                    quay lại hâm nóng cái Blog này vào một ngày đầu hè nóng oi
                    bức, khi mà dân tình xô nhau đi tắm Free để giải nhiệt.sau khá
                    nhiều lời hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog
                    này vào một ngày đầu hè nóng oi bức, khi mà dân tình xô nhau
                    đi tắm Free để giải nhiệt.
                            </p>
                  <a href="" className="about__link">
                    Xem thêm
                            </a>
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
