import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import layer_product_new from '../../assets/images/Layer_product_new.png'
import layer from '../../assets/images/Layer.png'
import plane from '../../assets/images/plane.svg'
import gift from '../../assets/images/gift.svg'
import star from '../../assets/images/star.svg'
import logo from '../../assets/images/logo.png'
import blog from '../../assets/images/blog-img.png'
import item1 from '../../assets/images/item-mother-1.png'
import item2 from '../../assets/images/item-mother-2.png'
import item3 from '../../assets/images/item_2--right--img.png'
import item4 from '../../assets/images/item-mother-3.png'
import item5 from '../../assets/images/item-mother-4.png'
import item6 from '../../assets/images/Item_3--left--img.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import next from "../../assets/images/next.svg";
import prev from "../../assets/images/prev.svg";
import product1 from "../../assets/images/product_1.jpg";
import product2 from "../../assets/images/product_2.jpg";
import product3 from "../../assets/images/product_3.jpg";
import product4 from "../../assets/images/product_4.jpg";
import product5 from "../../assets/images/product_5.jpg";
import product6 from "../../assets/images/product_6.jpg";
import product8 from "../../assets/images/product_8.png";
import product9 from "../../assets/images/product_9.png";
import feedback1 from '../../assets/images/feedback_1--img.png'
import feedback2 from '../../assets/images/feedback_2--img.png'
import facebook from '../../assets/images/facebook.svg'
import twitter from "../../assets/images/twitter.svg";
import instagram from "../../assets/images/instagram.svg";
import google from "../../assets/images/google.svg";

import pinterest from "../../assets/images/pinterest.svg";
import linkedin from "../../assets/images/linkedin.svg";

export default function Home() {
  const settingsProduct = {
    className: "product__setting",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          dots: false,
          arrows: false,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };



  return (
    <div>
      <Header />
      <div className="home">
        <div className="banner">
          <div className="container">
            <div className="banner row">
              <div className="col-md-5 col-sm-5 col-lg-6 ">
                <div className="banner__wrapper-product">
                  <img
                    className="banner__product-img img-fluid"
                    src={layer_product_new}
                    alt=""
                  />
                  <div className="banner__product-introduce">
                    <div className="banner__product-introduct__name">
                      GreenVera
                                    </div>
                    <div className="banner__product-introduct__info">
                      Sản phẩm tinh dầu dưỡng da mới nhất của Mandala
                                    </div>
                    <div className="banner__product-introduct__price">
                      GIÁ CHỈ 750.000
                                    <span className="banner__product-introduct__price-icon">
                        đ
                                    </span>
                    </div>
                    <div className="banner__product-introduct__buy">
                      <a href="#">MUA HÀNG</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-sm-7 col-lg-6 ">
                <div className="banner__layer">
                  <img
                    className="banner__layer-img img-fluid"
                    src={layer}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="fact">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <div className="fact__shipping ">
                  <div className="fact__shipping-repon ">
                    <img src={plane} alt="" className="fact__shipping__img" />
                  </div>
                  <div className="fact__shipping-repon1 ">
                    <p className="fact__shipping__text">
                      Miễn phí vận chuyển trên toàn quốc
                        </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="fact__gift">
                  <div className="fact__shipping-repon ">

                    <img src={gift} alt="" className="fact__shipping__img" />
                  </div>
                  <div className="fact__shipping-repon1 ">

                    <p className="fact__shipping__text">
                      Tặng ngay quà tặng trị giá 350.000đ
                        </p>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="fact__shipping ">
                  <div className="fact__shipping-repon ">

                    <img src={star} alt="" className="fact__shipping__img" />
                  </div>
                  <div className="fact__shipping-repon1 ">

                    <p className="fact__shipping__text">
                      Giảm 30% cho đơn hàng trên 5.000.000đ
                        </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product">
          <div className="container">
            <div className="justify-content-between d-flex">
              <div className="img-left">
                <div className="img-left_up">
                  <img className="pro_img" src={item1} />
                </div>
                <div className="img-left_down">
                  <img className="pro_img" src={item2} />
                </div>
              </div>
              <div className="img-right ">
                <img className="pro_img" src={item3} />
              </div>

            </div>
          </div>
        </section>
        <section className="product">
          <div className="container">
            <div className="justify-content-between d-flex">
              <div className="img-right_down ">
                <img className="pro_img" src={item6} />
              </div>
              <div className="img-left">
                <div className="img-left_up">
                  <img className="pro_img" src={item4} />
                </div>
                <div className="img-left_down">
                  <img className="pro_img" src={item5} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feedback ">
          <div className="container">
            <div className="feedback-carosel">
              <Slider {...settings}>
                <div className="feedback-repon-mobi d-flex row">
                  <div className="infor-avatar col-sm-3 col-lg-2 col-3">
                    <div className="feedback-img">
                      <img className="feedback-img__img" src={feedback1} alt="" />
                    </div>

                  </div>
                  <div className="infor_background  col-sm-9 col-lg-10">
                    <div className="infor-content ">
                      <div className="content-text">
                        " Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông
                        màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút
                        kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với
                        công nghệ cải tiến mới nhất, hảng Rohto "
                                </div>
                      <div className="">
                        <div className="infor-block">
                          <h6>
                            TUTILE
                                        <span className="infor-name">
                              _ Giám đốc phát triển sản phẩm
                                        </span>
                          </h6>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>
                <div className="feedback-repon-mobi d-flex row">
                  <div className="infor-avatar col-sm-3 col-lg-2 col-3">
                    <div className="feedback-img">
                      <img className="feedback-img__img" src={feedback2} alt="" />
                    </div>
                  </div>
                  <div className="infor_background  col-sm-9 col-lg-10">
                    <div className="infor-content ">
                      <div className="content-text">
                        " Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông
                        màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút
                        kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với
                        công nghệ cải tiến mới nhất, hảng Rohto "
                                </div>
                      <div className="">
                        <div className="infor-block">
                          <h6>
                            TUTILE
                                        <span className="infor-name">
                              _ Giám đốc phát triển sản phẩm
                                        </span>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="feedback-repon-mobi d-flex row">
                  <div className="infor-avatar col-sm-3 col-lg-2 col-3">
                    <div className="feedback-img">
                      <img className="feedback-img__img" src={feedback1} alt="" />
                    </div>
                  </div>
                  <div className="infor_background  col-sm-9 col-lg-10">
                    <div className="infor-content ">
                      <div className="content-text">
                        " Vẫn là vẻ bề ngoài vô cùng đơn giản với các tông
                        màu trắng, hồng làm chủ đạo nhưng lại tạo ra sức hút
                        kỳ lạ với những ai cầm trên tay sản phẩm ấy! Với
                        công nghệ cải tiến mới nhất, hảng Rohto "
                                </div>
                      <div className="">
                        <div className="infor-block">
                          <h6>
                            TUTILE
                                        <span className="infor-name">
                              _ Giám đốc phát triển sản phẩm
                                        </span>
                          </h6>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </Slider>
            </div>
          </div>
        </section>
        {/* detail-product */}
        <section className="detail-product">

          <div className="">
            <div className="container">
              <ul className="bestseller__product-list d-flex">
                <li>
                  <a href="#" className="list-item__new">
                    Sản phẩm mới
                  </a>
                </li>
                <li className="list-item_li-repon">
                  <a className="list-item__active" href="#">
                    Sản phẩm bán chạy
                  </a>
                </li>
                <li>
                  <a href="#" className="list-item__new">
                    Sản phẩm đặc biệt
                  </a>
                </li>
              </ul>
              <div className="line">
                <span className="line-before"></span>
                <span className="line-center">//////////////</span>
                <span className="line-after"></span>
              </div>
              <div className="bestseller__title ">
                <ul className="title-list d-flex ">
                  <li className="title-list_name">Mỹ Phẩm</li>
                  <li className="title-list_name">Chăm sóc da</li>
                  <li className="title-list_name">Dành cho tóc</li>
                  <li className="title-list_name">Nước hoa</li>
                  <li className="title-list_name">Trang sức</li>
                  <li className="title-list_name1" >Quà tặng</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="slide__product">
            <Slider {...settingsProduct}>
              <div className="product__item-list">
                <div className="item__img">
                  <img src={product1} alt="" />
                </div>
                <div className="item__content">
                  <p className="item__content-title">Tyffany</p>
                  <p className="item__content-name">Mỹ phẩm châu Âu</p>
                  <div className="line"></div>
                  <div className="item__content-price">
                    <p>
                      355.000
                          <span>đ</span>
                    </p>
                    <p className="price-sale">
                      450.000
                          <span>đ</span>
                    </p>
                  </div>
                </div>
                <div className="item__button">
                  <button className="item__button-icon item__button-buy">
                    <span className="icon-text">Mua hàng</span>
                  </button>
                  <button className="item__button-icon">
                    <i className="fa fa-heart"></i>
                  </button>
                  <button className="item__button-icon">
                    <i className="fa fa-sync-alt"></i>
                  </button>
                </div>
              </div>
              <div className="product__item-list">
                <div className="item__img">
                  <img src={product2} alt="" />
                </div>
                <div className="item__content">
                  <p className="item__content-title">Tyffany</p>
                  <p className="item__content-name">Mỹ phẩm châu Âu</p>
                  <div className="line"></div>
                  <div className="item__content-price">
                    <p>
                      355.000
                          <span>đ</span>
                    </p>
                    <p className="price-sale">
                      450.000
                          <span>đ</span>
                    </p>
                  </div>
                </div>
                <div className="item__button">
                  <button className="item__button-icon item__button-buy">
                    <span className="icon-text">Mua hàng</span>
                  </button>
                  <button className="item__button-icon">
                    <i className="fa fa-heart"></i>
                  </button>
                  <button className="item__button-icon">
                    <i className="fa fa-sync-alt"></i>
                  </button>
                </div>
              </div>
              <div className="product__item-list">
                <div className="item__img">
                  <img src={product3} alt="" />
                </div>
                <div className="item__content">
                  <p className="item__content-title">Tyffany</p>
                  <p className="item__content-name">Mỹ phẩm châu Âu</p>
                  <div className="line"></div>
                  <div className="item__content-price">
                    <p>
                      355.000
                          <span>đ</span>
                    </p>
                    <p className="price-sale">
                      450.000
                          <span>đ</span>
                    </p>
                  </div>
                </div>
                <div className="item__button">
                  <button className="item__button-icon item__button-buy">
                    <span className="icon-text">Mua hàng</span>
                  </button>
                  <button className="item__button-icon">
                    <i className="fa fa-heart"></i>
                  </button>
                  <button className="item__button-icon">
                    <i className="fa fa-sync-alt"></i>
                  </button>
                </div>
              </div>
              <div className="product__item-list">
                <div className="item__img">
                  <img src={product4} alt="" />
                </div>
                <div className="item__content">
                  <p className="item__content-title">Tyffany</p>
                  <p className="item__content-name">Mỹ phẩm châu Âu</p>
                  <div className="line"></div>
                  <div className="item__content-price">
                    <p>
                      355.000
                          <span>đ</span>
                    </p>
                    <p className="price-sale">
                      450.000
                          <span>đ</span>
                    </p>
                  </div>
                </div>
                <div className="item__button">
                  <button className="item__button-icon item__button-buy">
                    <span className="icon-text">Mua hàng</span>
                  </button>
                  <button className="item__button-icon">
                    <i className="fa fa-heart"></i>
                  </button>
                  <button className="item__button-icon">
                    <i className="fa fa-sync-alt"></i>
                  </button>
                </div>
              </div>
              <div className="product__item-list">
                <div className="item__img">
                  <img src={product5} alt="" />
                </div>
                <div className="item__content">
                  <p className="item__content-title">Tyffany</p>
                  <p className="item__content-name">Mỹ phẩm châu Âu</p>
                  <div className="line"></div>
                  <div className="item__content-price">
                    <p>
                      355.000
                          <span>đ</span>
                    </p>
                    <p className="price-sale">
                      450.000
                          <span>đ</span>
                    </p>
                  </div>
                </div>
                <div className="item__button">
                  <button className="item__button-icon item__button-buy">
                    <span className="icon-text">Mua hàng</span>
                  </button>
                  <button className="item__button-icon">
                    <i className="fa fa-heart"></i>
                  </button>
                  <button className="item__button-icon">
                    <i className="fa fa-sync-alt"></i>
                  </button>
                </div>
              </div>
              <div className="product__item-list">
                <div className="item__img">
                  <img src={product6} alt="" />
                </div>
                <div className="item__content">
                  <p className="item__content-title">Tyffany</p>
                  <p className="item__content-name">Mỹ phẩm châu Âu</p>
                  <div className="line"></div>
                  <div className="item__content-price">
                    <p>
                      355.000
                          <span>đ</span>
                    </p>
                    <p className="price-sale">
                      450.000
                          <span>đ</span>
                    </p>
                  </div>
                </div>
                <div className="item__button">
                  <button className="item__button-icon item__button-buy">
                    <span className="icon-text">Mua hàng</span>
                  </button>
                  <button className="item__button-icon">
                    <i className="fa fa-heart"></i>
                  </button>
                  <button className="item__button-icon">
                    <i className="fa fa-sync-alt"></i>
                  </button>
                </div>
              </div>
              <div className="product__item-list">
                <div className="item__img">
                  <img src={product8} alt="" />
                </div>
                <div className="item__content">
                  <p className="item__content-title">Tyffany</p>
                  <p className="item__content-name">Mỹ phẩm châu Âu</p>
                  <div className="line"></div>
                  <div className="item__content-price">
                    <p>
                      355.000
                          <span>đ</span>
                    </p>
                    <p className="price-sale">
                      450.000
                          <span>đ</span>
                    </p>
                  </div>
                </div>
                <div className="item__button">
                  <button className="item__button-icon item__button-buy">
                    <span className="icon-text">Mua hàng</span>
                  </button>
                  <button className="item__button-icon">
                    <i className="fa fa-heart"></i>
                  </button>
                  <button className="item__button-icon">
                    <i className="fa fa-sync-alt"></i>
                  </button>
                </div>
              </div>
              <div className="product__item-list">
                <div className="item__img">
                  <img src={product9} alt="" />
                </div>
                <div className="item__content">
                  <p className="item__content-title">Tyffany</p>
                  <p className="item__content-name">Mỹ phẩm châu Âu</p>
                  <div className="line"></div>
                  <div className="item__content-price">
                    <p>
                      355.000
                          <span>đ</span>
                    </p>
                    <p className="price-sale">
                      450.000
                          <span>đ</span>
                    </p>
                  </div>
                </div>
                <div className="item__button">
                  <button className="item__button-icon item__button-buy">
                    <span className="icon-text">Mua hàng</span>
                  </button>
                  <button className="item__button-icon">
                    <i className="fa fa-heart"></i>
                  </button>
                  <button className="item__button-icon">
                    <i className="fa fa-sync-alt"></i>
                  </button>
                </div>
              </div>
            </Slider>
          </div>
        </section>


        <section className="contact-icon container d-flex">
          <div className="contact-repon col-md-7 col-sm-12">
            <div className="contact-icon_center">
              <div className="icon_img">
                <img src={facebook} />
              </div>
              <div className="icon_name">FACEBOOK</div>
            </div>
            <div className="contact-icon_center">
              <div className="icon_img">
                <img src={twitter} />
              </div>
              <div className="icon_name">TWITTER</div>
            </div>
            <div className="contact-icon_center">
              <div className="icon_img">
                <img src={instagram} />
              </div>
              <div className="icon_name">INSTAGRAM</div>
            </div>
            <div className="contact-icon_center">
              <div className="icon_img">
                <img src={google} />
              </div>
              <div className="icon_name">GOOGLE+</div>
            </div>
          </div>
          <div className="contact-repon_new contact-repon col-md-3 col-sm-0">
            <div className="contact-icon_center">
              <div className="icon_img">
                <img src={pinterest} />
              </div>
              <div className="icon_name">PINTEREST</div>
            </div>
            <div className="contact-icon_center">
              <div className="icon_img">
                <img src={linkedin} />
              </div>
              <div className="icon_name">LINKEDIN</div>
            </div>
          </div>

        </section>

        <div className="information__details container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-lg-4">
              <div className="details__about-us">
                <div className="about-us__title">
                  <h2>Về chúng tôi</h2>
                  <div className="line">
                    <span className="line-before"></span>
                    <span className="line-center">//////////////</span>
                    <span className="line-after"></span>
                  </div>
                </div>
                <div className="about-us__content">
                  <div className="about-us__content-logo">
                    <a href="">
                      <img src={logo} alt="" />
                    </a>
                  </div>
                  <div className="about-us__content-title">
                    <h2>
                      giới thiệu chung về mỹ phẩm handmade mandala
                            </h2>
                  </div>
                  <div className="about-us__content-introduce">
                    <p>
                      Hi, chào các nàng ... sau khá nhiều lời hứa hão
                      thì hôm nay tớ quay lại hâm nóng cái Blog này vào
                      một ngày đầu hè nóng oi bức, khi mà dân tình xô
                      nhau đi tắm Free để giải nhiệt.Hi, chào các nàng
                      ... sau khá nhiều lời hứa hão thì hôm nay tớ quay
                      lại hâm nóng cái Blog này vào một ngày đầu hè nóng
                      oi bức, khi mà dân tình xô nhau đi tắm Free để
                      giải nhiệt.Hi, chào các nàng ... sau khá nhiều lời
                      hứa hão thì hôm nay tớ quay lại hâm nóng cái Blog
                      này vào một ngày đầu hè nóng oi bức, khi mà dân
                      tình xô nhau đi tắm Free để giải nhiệt.
                            </p>
                    <a href="">Xem thêm</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6 col-lg-4">
              <div className="details__blog">
                <div className="about-us__title">
                  <h2>Blog</h2>
                  <div className="line">
                    <span className="line-before"></span>
                    <span className="line-center">//////////////</span>
                    <span className="line-after"></span>
                  </div>
                </div>
                <div className="details__blog-img">
                  <img className="details__blog-img_blog" src={blog} alt="" />
                </div>
                <div className="about-us__content-title">
                  Review son kem bourjois velvet
                        </div>
                <p className="about-us__content-introduce">
                  Hi, chào các nàng ... sau khá nhiều lời hứa hão thì
                  hôm nay tớ quay lại hăm nóng cái Blog này vào một ngày
                  đầu hè nóng oi bức, khi mà dân tình xô nhau đi tắm
                  Free để giải nhiệt.
                        </p>
                <a href="#" className="details__block-details-a" >Bởi NamTran (27/05/2015)</a>
                <div className="details__block-details">
                  <a href="" className="introduct-link">
                    Đọc thêm
                            <i className="fa fa-angle-right"></i>
                  </a>
                  <a href="" className="comment-index">
                    23 Bình luận
                          </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <div className="row">
                <div className="col-sm-6 col-lg-12">
                  <div className="details__send-mail">
                    <div className="about-us__title">
                      <h2>gửi email cho chúng tôi</h2>
                      <div className="line">
                        <span className="line-before"></span>
                        <span className="line-center">//////////////</span>
                        <span className="line-after"></span>
                      </div>
                    </div>
                    <div className="send-email__form">
                      <form>
                        <input
                          className="email-input"
                          type="text"
                          placeholder="Email của bạn"
                        />
                        <p className="email-text">
                          Gửi email để nhận những ưu đãi mới nhất
                                </p>
                        <button className="email-btn" type="submit">
                          GỬI
                                </button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-12">
                  <div className="details__product-tag">
                    <div className="about-us__title">
                      <h2>tag sản phẩm</h2>
                      <div className="line">
                        <span className="line-before"></span>
                        <span className="line-center">//////////////</span>
                        <span className="line-after"></span>
                      </div>
                    </div>
                    <ul className="product__tag-list">
                      <li className="tag-item">
                        <a href="#" className="tag-item-link">
                          Đồng hồ
                                </a>
                      </li>
                      <li className="tag-item">
                        <a href="#" className="tag-item-link">
                          Túi
                                </a>
                      </li>
                      <li className="tag-item">
                        <a href="#" className="tag-item-link">
                          Phụ kiện
                                </a>
                      </li>
                      <li className="tag-item">
                        <a href="#" className="tag-item-link">
                          Đồng hồ
                                </a>
                      </li>
                      <li className="tag-item">
                        <a href="#" className="tag-item-link">
                          Túi
                                </a>
                      </li>
                      <li className="tag-item">
                        <a href="#" className="tag-item-link">
                          Giày
                                </a>
                      </li>
                      <li className="tag-item">
                        <a href="#" className="tag-item-link">
                          Sandal
                                </a>
                      </li>
                      <li className="tag-item">
                        <a href="#" className="tag-item-link">
                          Áo sơ mi
                                </a>
                      </li>
                      <li className="tag-item">
                        <a href="#" className="tag-item-link">
                          Nước hoa
                                </a>
                      </li>
                      <li className="tag-item">
                        <a href="#" className="tag-item-link">
                          Giày
                                </a>
                      </li>
                      <li className="tag-item">
                        <a href="#" className="tag-item-link">
                          Sandal
                                </a>
                      </li>
                      <li className="tag-item">
                        <a href="#" className="tag-item-link">
                          Trẻ em
                                </a>
                      </li>
                      <li className="tag-item">
                        <a href="#" className="tag-item-link">
                          Thời trang nữ
                                </a>
                      </li>
                      <li className="tag-item">
                        <a href="#" className="tag-item-link">
                          Trẻ em
                                </a>
                      </li>
                      <li className="tag-item">
                        <a href="#" className="tag-item-link">
                          Thời trang nữ
                                </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
