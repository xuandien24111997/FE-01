import React from "react";
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import { Link } from "react-router-dom";
function Login() {
  return (
    <div>
      <Header />
      <section className="section__login">
        <div className="container">
          <div className="path">
            <Link to="/" className="path__name">
              Home
          </Link>
            <Link to="/login" className="path__name">
              Login
          </Link>
          </div>
          <div className="login__wrapper">
            <div className="login__header">
              <h3>Đăng nhập</h3>
              <Link to="/register" className="btn">
                Đăng kí
            </Link>
            </div>
            <form className="form" action="#">
              <h4 className="form__title">khách hàng đăng ký</h4>
              <p className="form__text">
                Nếu bạn có tài khoản, xin vui lòng đăng nhập
            </p>
              <div className="form__group">
                <label className="form__lable">
                  Địa chỉ email<span className="form__obligatory">*</span>
                </label>
                <input className="form__input" type="text" />
              </div>
              <div className="form__group">
                <label className="form__lable">
                  Password<span className="form__obligatory">*</span>
                </label>
                <input className="form__input" type="password" />
              </div>
              <div className="form__buttons">
                <a className="form__link" href="#">
                  Quên mật khẩu?
              </a>
                <button className="btn btn-submit" type="submit">
                  Đăng nhập
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

export default Login;