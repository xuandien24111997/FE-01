import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import product1 from "../../assets/images/product_12.png";
import product2 from "../../assets/images/product_13.png";
import product3 from "../../assets/images/product_14.png";
import product4 from "../../assets/images/product_15.png";
import product5 from "../../assets/images/product_10.png";
import product6 from "../../assets/images/product_16.png";
import product7 from "../../assets/images/product_17.png";
import product8 from "../../assets/images/product_18.png";
import product9 from "../../assets/images/product_19.png";
import author from "../../assets/images/auther.jpg";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
const useStyles = makeStyles((theme) => ({
  root: {
    borderBottom: "1px solid #e6e6e6",
    marginBottom: "5rem",
    color: "#818181",
  },
}));
function ProductDetails() {
  const productData = [
    product1,
    product2,
    product3,
    product4,

    product1,
    product2,
    product3,
    product4,
    
    product1,
    product2,
    product3,
    product4,
    
    product1,
    product2,
    product3,
    product4,
  ];
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [productPos, setProductPos] = useState(0);
  const [imgUrl, setImgUrl] = useState(product1);
  const [facebookOn, setFacebookOn] = useState(false);
  const [tweetOn, setTweetOn] = useState(false);
  const [googleOn, setGoogleOn] = useState(false);
  const displayProduct = productData
    .slice(productPos, productPos + 5)
    .map((product, key) => {
      return (
        <img
          key={key}
          src={product}
          alt=""
          className={imgUrl === product && "activeImg"}
          onMouseEnter={() => setImgUrl(product)}
          onMouseLeave={() => setImgUrl(product)}
        />
      );
    });
  const downButton = () => {
    if (productPos <= productData.length - 5) setProductPos(productPos + 1);
  };
  const upButton = () => {
    if (productPos > 0) setProductPos(productPos - 1);
  };
  const tweetHandle = () => {
    setFacebookOn(false);
    setTweetOn(!tweetOn);
    setGoogleOn(false);
    setTimeout(function () {
      setTweetOn(false);
    }, 2000);
  };
  const facebookHandle = () => {
    setFacebookOn(!facebookOn);
    setTweetOn(false);
    setGoogleOn(false);
    setTimeout(function () {
      setFacebookOn(false);
    }, 2000);
  };
  const googleHandle = () => {
    setFacebookOn(false);
    setTweetOn(false);
    setGoogleOn(!googleOn);
    setTimeout(function () {
      setGoogleOn(false);
    }, 2000);
  };
  return (
    <div>
        <Header />
      <section className="product-details__page">
        <div className="container">
          <div className="path">
            <Link to="/" className="path__name">
              Home
            </Link>
            <Link to="#" className="path__name">
              S???n ph???m
            </Link>
            <Link to="/product" className="path__name">
              Trang s???c
            </Link>
            <Link to="/product-details" className="path__name">
              L???c tay
            </Link>
          </div>
          <div className="product-detail__wrapper">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-7">
                <div className="product-details__left">
                  <div className="product-details__img">
                    <div className="slide-top arrow" onClick={() => upButton()}>
                      <i className="fa fa-arrow-up"></i>
                    </div>
                    <div className="product-details__slider">
                      {displayProduct}
                    </div>
                    <div
                      className="slide-bottom arrow"
                      onClick={() => downButton()}
                    >
                      <i className="fa fa-arrow-down"></i>
                    </div>
                  </div>
                  <div className="product-details__featured">
                    <img src={imgUrl} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-5">
                <div className="product-details__right">
                  <h2>L???c tay TYFFANY xu h?????ng m???i nh???t </h2>
                  <h3>TYFFANY ms 3201</h3>
                  <p className="product-price">
                    950.000??
                    <div className="product-price__first">999.000??</div>
                  </p>
                  <div className="product-desc">
                    Kh??ng th??? ph??? nh???n, th???i trang v?? phong c??ch ch??nh l?? ???tuy??n
                    ng??n??? kh??ng l???i m???nh m??? nh???t c???a m???i ng?????i ph??? n???. Do ????,
                    vi???c mua s???m th???i trang tr??? th??nh ni???m vui, v?? c?? khi l??
                    ngu???n c???m h???ng v?? t???n ????? ph??i ?????p s???ng vui, s???ng ?????p h??n
                    trong m???t n???a c??n l???i c???a th??? gi???i. ????? F5 t??? ????? c???a m??nh
                    tr?????c nh???ng xu h?????ng ng??y m???t ??a d???ng h??n trong th??? gi???i
                    th???i trang, nhi???u ch??? em kh??ng ng???n ng???i chi ti??u ???m???nh tay???
                    ????? s??? h???u nh???ng m??n ????? y??u th??ch.
                  </div>
                  <form className="product-form">
                    <div className="form__ground">
                      <lable className="form__lable">M??u s???c</lable>
                      <select className="form__input">
                        <option value="0">Ch???n m??u</option>
                        <option value="1">M??u ?????ng</option>
                        <option value="2">M??u B???c</option>
                        <option value="3">M??u V??ng</option>
                      </select>
                    </div>
                    <div className="form__ground">
                      <lable className="form__lable">Size</lable>
                      <select className="form__input">
                        <option value="0">Ch???n size</option>
                        <option value="1">12</option>
                        <option value="2">13</option>
                        <option value="3">14</option>
                      </select>
                    </div>
                    <div className="form__ground">
                      <lable className="form__lable">S??? l?????ng</lable>
                      <input className="form__input" type="number" />
                    </div>
                    <div className="form__btn">
                      <p className="item__btn">
                        <button>
                          <span>Mua h??ng</span>
                        </button>
                        <button>
                          <i className="fa fa-heart"></i>
                        </button>
                        <button>
                          <i className="fa fa-sync"></i>
                        </button>
                      </p>
                    </div>
                  </form>
                  <div className="social-network">
                    <p className="social-network__title">
                      Shipping &amp;
                      <span> Returns</span>
                    </p>
                    <ul className="social-network__list">
                      <li className="social-network__item">
                        <button
                          className="btn-facebook btn"
                          onClick={() => facebookHandle()}
                        >
                          <i className="fa fa-facebook-square"></i>
                          <span class="item__name">Like</span>
                        </button>
                        {facebookOn && (
                          <div className="count">
                            1K
                            <div className="arrow-left"></div>
                          </div>
                        )}
                      </li>
                      <li className="social-network__item">
                        <button
                          className="btn-twitter btn"
                          onClick={() => tweetHandle()}
                        >
                          <i className="fa fa-twitter-square"></i>
                          <span class="item__name">Tweet</span>
                        </button>
                        {tweetOn && (
                          <div className="count">
                            1K
                            <div className="arrow-left"></div>
                          </div>
                        )}
                      </li>
                      <li className="social-network__item">
                        <button
                          className="btn-google btn"
                          onClick={() => googleHandle()}
                        >
                          <i className="fa fa-google-plus"></i>
                          <span>1</span>
                        </button>
                        {googleOn && (
                          <div className="count">
                            1K
                            <div className="arrow-left"></div>
                          </div>
                        )}
                      </li>
                    </ul>
                    <button className="btn btn__in">
                      <i className="fa fa-linkedin"></i>
                      <span className="item__name">Share</span>
                    </button>
                    <button className="btn btn__pinterest">
                      <i className="fa fa-pinterest"></i>
                      <span className="item__name">In it</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="detail-additional">
        <div className="container">
          <div className="detail-additional__wrapper">
            <div className="row">
              <div className="col-sm-12 col-lg-9">
                <div className="detail-addtional__left">
                  <div className={classes.root}>
                    <Tabs
                      value={value}
                      onChange={handleChange}
                      indicatorColor="#000"
                      variant="fullWidth"
                    >
                      <Tab label="?????c ??i???m n???i b???t" />
                      <Tab label="Th??ng tin s???n ph???m" />
                      <Tab label="????nh gi??" />
                    </Tabs>
                  </div>
                  {value === 0 && (
                    <div className="over-view__highlight">
                      <div className="highlight__item">
                        <div className="item__info">
                          <h3>the mark of a legend</h3>
                          <p>
                            {" "}
                            T??? h??o ???????c ghi l?? n??m m?? Tiffany &amp; Co l?? th??nh
                            l???p, b??? s??u t???p mang t??nh bi???u t?????ng n??y cung c???p
                            cho m???t c??i g???t ?????u v???i qua trong khi th??? hi???n m???t
                            c???m gi??c hi???n ?????i v???i ki???u d??ng ?????p ???????ng cong v??
                            ???????ng n??t m?????t m??.
                          </p>
                        </div>
                        <div className="item__img">
                          <img src={product5} alt="" />
                        </div>
                      </div>
                      <div className="highlight__item">
                        <div className="item__info">
                          <h3>the mark of a legend</h3>
                          <p>
                            {" "}
                            T??? h??o ???????c ghi l?? n??m m?? Tiffany &amp; Co l?? th??nh
                            l???p, b??? s??u t???p mang t??nh bi???u t?????ng n??y cung c???p
                            cho m???t c??i g???t ?????u v???i qua trong khi th??? hi???n m???t
                            c???m gi??c hi???n ?????i v???i ki???u d??ng ?????p ???????ng cong v??
                            ???????ng n??t m?????t m??.
                          </p>
                        </div>
                        <div className="item__img">
                          <img src={product6} alt="" />
                        </div>
                      </div>
                      <div className="highlight__item">
                        <div className="item__info">
                          <h3>the mark of a legend</h3>
                          <p>
                            {" "}
                            T??? h??o ???????c ghi l?? n??m m?? Tiffany &amp; Co l?? th??nh
                            l???p, b??? s??u t???p mang t??nh bi???u t?????ng n??y cung c???p
                            cho m???t c??i g???t ?????u v???i qua trong khi th??? hi???n m???t
                            c???m gi??c hi???n ?????i v???i ki???u d??ng ?????p ???????ng cong v??
                            ???????ng n??t m?????t m??.
                          </p>
                        </div>
                        <div className="item__img">
                          <img src={product7} alt="" />
                        </div>
                      </div>
                      <div className="highlight__item">
                        <div className="item__info">
                          <h3>the mark of a legend</h3>
                          <p>
                            {" "}
                            T??? h??o ???????c ghi l?? n??m m?? Tiffany &amp; Co l?? th??nh
                            l???p, b??? s??u t???p mang t??nh bi???u t?????ng n??y cung c???p
                            cho m???t c??i g???t ?????u v???i qua trong khi th??? hi???n m???t
                            c???m gi??c hi???n ?????i v???i ki???u d??ng ?????p ???????ng cong v??
                            ???????ng n??t m?????t m??.
                          </p>
                        </div>
                        <div className="item__img">
                          <img src={product8} alt="" />
                        </div>
                      </div>
                    </div>
                  )}
                  {value === 1 && (
                    <div className="over-view__product-info">
                      <div className="product-info__img">
                        <img src={product4} alt="" />
                      </div>
                      <p className="product-info__desc">
                        Kh??ng th??? ph??? nh???n, th???i trang v?? phong c??ch ch??nh l??
                        ???tuy??n ng??n??? kh??ng l???i m???nh m??? nh???t c???a m???i ng?????i ph???
                        n???. Do ????, vi???c mua s???m th???i trang tr??? th??nh ni???m vui,
                        v?? c?? khi l?? ngu???n c???m h???ng v?? t???n ????? ph??i ?????p s???ng vui,
                        s???ng ?????p h??n trong m???t n???a c??n l???i c???a th??? gi???i. ????? F5
                        t??? ????? c???a m??nh tr?????c nh???ng xu h?????ng ng??y m???t ??a d???ng h??n
                        trong th??? gi???i th???i trang, nhi???u ch??? em kh??ng ng???n ng???i
                        chi ti??u ???m???nh tay??? ????? s??? h???u nh???ng m??n ????? y??u th??ch.
                      </p>
                    </div>
                  )}
                  {value === 2 && (
                    <div className="over-view__product-rating">
                      <div className="rating__form">
                        <h3>h??y ????? l???i nh???n x??t c???a b???n</h3>
                        <ul>
                          <li>
                            <i className="fa fa-heart"></i>
                          </li>
                          <li>
                            <i className="fa fa-heart"></i>
                          </li>
                          <li>
                            <i className="fa fa-heart"></i>
                          </li>
                          <li>
                            <i className="fa fa-heart"></i>
                          </li>
                          <li>
                            <i className="fa fa-heart"></i>
                          </li>
                        </ul>
                        <form action="#">
                          <div className="form__ground">
                            <label className="form__lable">N???i dung</label>
                            <textarea
                              className="form__input"
                              rows="5"
                            ></textarea>
                          </div>
                          <button className=" btn form__submit">
                            Nh???n X??t
                          </button>
                        </form>
                      </div>
                      <div className="rating__comment">
                        <h3>Nh???n x??t g???n ????y</h3>
                        <ul>
                          <li>
                            <div className="comment__product">
                              <p>L???c tay TYFFANY xu h?????ng m???i nh???t</p>
                              <ul>
                                <li>
                                  <i className="fa fa-heart"></i>
                                </li>
                                <li>
                                  <i className="fa fa-heart"></i>
                                </li>
                                <li>
                                  <i className="fa fa-heart"></i>
                                </li>
                                <li>
                                  <i className="fa fa-heart"></i>
                                </li>
                                <li>
                                  <i className="fa fa-heart"></i>
                                </li>
                              </ul>
                            </div>
                            <div className="comment__info">
                              <div className="comment__author">
                                Nh???n x??t b???i
                                <span className="author__name">Th??y Tr??c</span>
                                v??o ng??y 18-8-2020
                              </div>
                              <div className="comment__content">
                                <img src={author} alt="" />
                                <p>?????p l???m lu??n!!</p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-sm-12 col-lg-3">
                <div className="detail-addtional__right">
                  <div className="best-seller">
                    <h3>s???n ph???m b??n ch???y</h3>
                    <div className="item__list">
                      <div className="item__item">
                        <div className="item__img">
                          <img src={product9} alt="" />
                        </div>
                        <div className="item__infor">
                          <p className="item__name">M??? ph???m ch??u ??u</p>
                          <div className="item__rating">
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <span>(4 l?????t mua)</span>
                          </div>
                          <p className="item__price">355.000??</p>
                        </div>
                      </div>
                      <div className="item__item">
                        <div className="item__img">
                          <img src={product9} alt="" />
                        </div>
                        <div className="item__infor">
                          <p className="item__name">M??? ph???m ch??u ??u</p>
                          <div className="item__rating">
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <span>(4 l?????t mua)</span>
                          </div>
                          <p className="item__price">355.000??</p>
                        </div>
                      </div>
                      <div className="item__item">
                        <div className="item__img">
                          <img src={product9} alt="" />
                        </div>
                        <div className="item__infor">
                          <p className="item__name">M??? ph???m ch??u ??u</p>
                          <div className="item__rating">
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <span>(4 l?????t mua)</span>
                          </div>
                          <p className="item__price">355.000??</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="buy-alot">
                    <h3>s???n ph???m mua nhi???u</h3>
                    <div className="item__list">
                      <div className="item__item">
                        <div className="item__img">
                          <img src={product9} alt="" />
                        </div>
                        <div className="item__infor">
                          <p className="item__name">M??? ph???m ch??u ??u</p>
                          <div className="item__rating">
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <span>(4 l?????t mua)</span>
                          </div>
                          <p className="item__price">355.000??</p>
                        </div>
                      </div>
                      <div className="item__item">
                        <div className="item__img">
                          <img src={product9} alt="" />
                        </div>
                        <div className="item__infor">
                          <p className="item__name">M??? ph???m ch??u ??u</p>
                          <div className="item__rating">
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <span>(4 l?????t mua)</span>
                          </div>
                          <p className="item__price">355.000??</p>
                        </div>
                      </div>
                      <div className="item__item">
                        <div className="item__img">
                          <img src={product9} alt="" />
                        </div>
                        <div className="item__infor">
                          <p className="item__name">M??? ph???m ch??u ??u</p>
                          <div className="item__rating">
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <span>(4 l?????t mua)</span>
                          </div>
                          <p className="item__price">355.000??</p>
                        </div>
                      </div>
                      <div className="item__item">
                        <div className="item__img">
                          <img src={product9} alt="" />
                        </div>
                        <div className="item__infor">
                          <p className="item__name">M??? ph???m ch??u ??u</p>
                          <div className="item__rating">
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <i className="fa fa-heart"></i>
                            <span>(4 l?????t mua)</span>
                          </div>
                          <p className="item__price">355.000??</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default ProductDetails;
