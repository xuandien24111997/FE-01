import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <Header />
        <section className="section__contact">
          <div className="container">
            <div className="path">
              <Link to="/" className="path__name">
                Home
                </Link>
              <Link to="/contact" className="path__name">
                Liên hệ
                      </Link>
            </div>
            <div className="contact__wrapper">
              <h3>Liên hệ</h3>
              <div className="row">
                <div className="col-sm-12 col-lg-6">
                  <div
                    className="contact__map"
                    style={{ height: "405px", width: "100%" }}
                  >
                    <iframe
                      width="100%"
                      height={400}
                      src="https://maps.google.com/maps?q=150+Duy+Tân,+Hòa+Thuận+Nam,+Hải+Châu,+Đà+Nẵng+550000,+Việt+Nam&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      frameBorder={0}
                      scrolling="no"
                      marginHeight={0}
                      marginWidth={0}
                    />
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6">
                  <div className="contact__form">
                    <h4>gửi email cho chúng tôi</h4>
                    <form action="#">
                      <div className="form__group">
                        <label className="form__lable">
                          Tên<span className="form__obligatory">*</span>
                        </label>
                        <input className="form__input" type="text" />
                      </div>
                      <div className="form__group">
                        <label className="form__lable">
                          Email<span className="form__obligatory">*</span>
                        </label>
                        <input className="form__input" type="text" />
                      </div>
                      <div className="form__group">
                        <label className="form__lable form__lable-textarea">
                          Tin nhắn<span className="form__obligatory">*</span>
                        </label>
                        <textarea
                          className="form__input form__textarea"
                          rows="10"
                        ></textarea>
                      </div>
                      <div className="form__buttons">
                        <button className="btn btn-submit" type="submit">
                          Gửi
                                  </button>
                      </div>
                    </form>
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
