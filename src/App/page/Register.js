import React from "react";
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { Link } from "react-router-dom";
import backCome from "../../assets/images/back_come.svg";
function Register() {
  return (
    <div>
      <Header />
      <section className="section__register">
        <div className="container">
          <div className="path">
            <Link to="/" className="path__name">
              Home
          </Link>
            <Link to="/register" className="path__name">
              Đăng kí
          </Link>
          </div>
          <div className="register__wrapper">
            <h3>Đăng kí</h3>
            <form className="form" action="#">
              <h4 className="form__title">Thông tin cá nhân</h4>
              <div className="form__group">
                <label className="form__lable">
                  Tên trước<span className="form__obligatory">*</span>
                </label>
                <input className="form__input" type="text" />
              </div>
              <div className="form__group">
                <label className="form__lable">
                  Tên sau<span className="form__obligatory">*</span>
                </label>
                <input className="form__input" type="text" />
              </div>
              <div className="form__group">
                <label className="form__lable">
                  Email<span className="form__obligatory">*</span>
                </label>
                <input className="form__input" type="email" />
              </div>
              <div className="form__group">
                <label className="form__lable">
                  Password<span className="form__obligatory">*</span>
                </label>
                <input className="form__input" type="password" />
              </div>
              <div className="form__group form__announce">
                <input id="announce" type="checkbox" />
                <label className="form__lable" for="announce">
                  {" "}
                Đăng ký nhận bản tin
              </label>
              </div>
            </form>
            <form className="form" action="#" style={{ marginTop: "-4rem" }}>
              <h4 className="form__title">Thông tin đăng nhập</h4>
              <div className="form__group">
                <label className="form__lable">
                  Mật khẩu<span className="form__obligatory">*</span>
                </label>
                <input className="form__input" type="password" />
              </div>
              <div className="form__group">
                <label className="form__lable">
                  Xác nhận mật khẩu<span className="form__obligatory">*</span>
                </label>
                <input className="form__input" type="password" />
              </div>
              <div className="form__buttons">
                <button className="btn btn-submit" type="submit">
                  Gửi
              </button>
                <button className="btn btn-submit" type="submit">
                  <img src={backCome} alt="" />
                Quay lại
              </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>

  );
}

export default Register;