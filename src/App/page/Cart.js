import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import cartProduct from "../../assets/images/cart_product_1.png";
import { Link } from 'react-router-dom'

export default function Cart() {
    
    return (
        <div>
            <Header />
            <section className="cart__section">
                <div className="container">
                    <div className="path">
                    <Link to="/" className="path__name">
                        Home
                    </Link>
                    <Link to="/product" className="path__name">
                        Sản Phẩm
                    </Link>
                    <Link to="/cart" className="path__name">
                        Cart
                    </Link>
                    </div>
                    <div className="cart__wrapper">
                    <h3>Giỏ hàng</h3>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Ảnh</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Số lượng</th>
                            <th>Tổng Số</th>
                            <th>Xóa</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                            <img src={cartProduct} alt="" />
                            </td>
                            <td>
                            <p>lắc tay D&amp;G</p>
                            </td>
                            <td>
                            <p className="price">
                                345.000
                                <span>đ</span>
                            </p>
                            </td>
                            <td>
                            <p>1</p>
                            </td>
                            <td>
                            <p className="price">
                                345.000
                                <span>đ</span>
                            </p>
                            </td>
                            <td>
                            <button className="btn">
                                <i className="fa fa-trash"></i>
                            </button>
                            </td>
                        </tr>
                        <tr>
                            <td>
                            <img src={cartProduct} alt="" />
                            </td>
                            <td>
                            <p>lắc tay D&amp;G</p>
                            </td>
                            <td>
                            <p className="price">
                                345.000
                                <span>đ</span>
                            </p>
                            </td>
                            <td>
                            <p>1</p>
                            </td>
                            <td>
                            <p className="price">
                                345.000
                                <span>đ</span>
                            </p>
                            </td>
                            <td>
                            <button className="btn">
                                <i className="fa fa-trash"></i>
                            </button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="cart__btn">
                        <div className="btn">Tiếp tục mua hàng</div>
                        <div className="btn">Xóa</div>
                        <div className="btn">cập nhật</div>
                    </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
