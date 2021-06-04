import React from 'react'
import { Link } from "react-router-dom";
import notFound from '../../assets/images/404.png'

export default function NotPage() {
  return (
    <div>
      <section className="error__page">
        <div className="container">
          <div className="error__wrapper">
            <div className="error__img">
              <img src={notFound} alt="" />
            </div>
            <p className="error__msg">
              Đây không phải là trong web bạn đang tìm kiếm
                    </p>
            <form action="#">
              <div className="form__group">
                <input className="form__input" type="text" />
                <i className="fa fa-search"></i>
              </div>
            </form>
            <div className="error__link">
              <Link to="/contact" className="link__item">
                Liên hệ
                        </Link>
              <Link to="/" className="link__item">
                Trang chủ
                        </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
