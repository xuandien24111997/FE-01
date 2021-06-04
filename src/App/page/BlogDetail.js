import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import {Link } from 'react-router-dom'
import blog2 from '../../assets/images/blog_2.png'
import blog3 from '../../assets/images/blog_3.png'
import blog4 from '../../assets/images/blog_4.png'
import video from '../../assets/images/video.png'
import post_content from '../../assets/images/post_content.png'

export default function BlogDetail() {
  return (
    <div>
      <Header />
        <section className="section__blog-details">
        <div className="container">
          <div className="path">
            <Link to="/" className="path__name">
              Home
            </Link>
            <Link to="/blog" className="path__name">
              Blog
            </Link>
            <Link to="/blog-details" className="path__name">
             Trang sức
            </Link>
            <Link to="/blog-details" className="path__name">
             Lắc tay
            </Link>
          </div>
          <div className="blog-details__wrapper">
            <h3>BLOG</h3>
            <div className="row">
              <div className="col-sm-12 col-lg-3">
                <div className="blog-details__left">
                  <div className="new-post">
                    <h4 className="new-post__title">bài viết mới nhất</h4>
                    <ul className="new-post__list">
                      <li className="new-post__item">
                        <div className="new-post__img">
                          <img src={blog2} alt="" />
                        </div>
                        <div className="new-post__content">
                          <p className="new-post__date">
                            11 <span>/ Tháng 5</span>
                          </p>
                          <p className="new-post__author">Đăng bởi Giangle</p>
                        </div>
                      </li>
                      <li className="new-post__item">
                        <div className="new-post__img">
                          <img src={blog3} alt="" />
                        </div>
                        <div className="new-post__content">
                          <p className="new-post__date">
                            11 <span>/ Tháng 5</span>
                          </p>
                          <p className="new-post__author">Đăng bởi Giangle</p>
                        </div>
                      </li>
                      <li className="new-post__item">
                        <div className="new-post__img">
                          <img src={blog4} alt="" />
                        </div>
                        <div className="new-post__content">
                          <p className="new-post__date">
                            11 <span>/ Tháng 5</span>
                          </p>
                          <p className="new-post__author">Đăng bởi Giangle</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="tag">
                    <h3>Blog tag</h3>
                    <ul>
                      <li>
                        <a href="#">Hoa tai</a>
                      </li>
                      <li>
                        <a href="#">Son</a>
                      </li>
                      <li>
                        <a href="#">Nước hoa</a>
                      </li>
                      <li>
                        <a href="#">Giày</a>
                      </li>
                      <li>
                        <a href="#">Sandal</a>
                      </li>
                      <li>
                        <a href="#">Áo sơ mi</a>
                      </li>
                      <li>
                        <a href="#">Nước hoa</a>
                      </li>
                      <li>
                        <a href="#">Trẻ em</a>
                      </li>
                      <li>
                        <a href="#">Thời trang nữ</a>
                      </li>
                    </ul>
                  </div>
                  <div className="video">
                    <h3>Latest Video</h3>
                    <div className="video__item">
                      <button className="btn">
                        <div className="icon-play"></div>
                      </button>
                      <img src={video} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-lg-9">
                <div className="blog-details__right">
                  <div className="blog-show__item">
                    <div className="item__img">
                      <img src={post_content} alt="" />
                    </div>
                    <div className="item__content">
                      <div className="item__name">
                        Nàng béo không ngại diện váy áo nổi bật
                      </div>
                      <div className="item__desc">
                        Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm
                        nay tớ quay lại hâm nóng cái Blog này vào một ngày đầu hè
                        nóng oi bức, khi mà dân tình xô nhau đi tắm Free để giải
                        nhiệt.Trong tiết xuân hè, nàng ngoại cỡ thắp sáng phong
                        cách bằng quần họa tiết nhiệt đới đi kèm áo sơ mi nhã
                        nhặn.Trang phục họa tiết điện tử được nàng phối cùng chân
                        váy kẻ caro, làm nên style vừa hiện đại, vừa phảng phất
                        nét cổ điển.Lối diện đồ hàng ngày đơn giản, khỏe khoắn của
                        cô khi kết hợp chất liệu jean.Nữ blogger rực rỡ khi hòa
                        trộn các gam đỏ, hồng, tím... một cách vui tươi, kèm theo
                        các phụ kiện điệu đà.{" "}
                      </div>
                      <div className="item__author">
                        Bởi NamTran ( 27 / 05 / 2015 )
                      </div>
                      <div className="item__details">
                        <a href="#" className="details__read">
                          Đọc thêm<i className="fa fa-angle-right"></i>
                        </a>
                        <a href="#" className="details__comment">
                          23 Bình Luận
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="tag-choose">
                    <p className="tag-choose__name">Tag:  </p>
                    <ul>
                      <li>Men</li>
                    </ul>
                  </div>
                  <div className="blog-detail__form">
                    <h4 className="form__title">đóng góp ý kiến</h4>
                    <form className="form" action="#">
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
                        <input className="form__input" type="email" checked/>
                      </div>
                      <div className="form__group">
                        <label className="form__lable">
                          Ý Kiến<span className="form__obligatory">*</span>
                        </label>
                        <textarea className="form__input" rows="15" minLength="5" maxLength="100" ></textarea>
                      </div>
                      <button className="btn btn__submit" type="submit">
                        Gửi ý kiến
                      </button>
                    </form>
                  </div>
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
