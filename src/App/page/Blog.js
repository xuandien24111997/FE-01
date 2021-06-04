import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../layouts/Header"
import Footer from "../layouts/Footer"
import ReactPaginate from "react-paginate";
import blog1 from "../../assets/images/blog_1.png";
import blog2 from "../../assets/images/blog_2.png";
import blog3 from "../../assets/images/blog_3.png";
import blog4 from "../../assets/images/blog_4.png";
import blog5 from "../../assets/images/blog_5.png";
import blog6 from "../../assets/images/blog_6.png";
import blog7 from "../../assets/images/blog_7.png";
import blog8 from "../../assets/images/blog_8.png";
import blog9 from "../../assets/images/blog_9.png";
function Blog() {
    
  const [pageNumber, setPageNumber] = useState(0);
  
  const postPerPage = 9;
  
  const pagesVisited = pageNumber * postPerPage;
  
  const postData = [
    blog1,
    blog2,
    blog3,
    blog4,
    blog5,
    blog6,
    blog7,
    blog8,
    blog9,

    blog4,
    blog5,
    blog6,
    blog7,
    blog8,
    blog9,
    blog1,
    blog1,
    blog2,

    blog7,
    blog8,
    blog9,
    blog1,
    blog2,
    blog3,
    blog4,
    blog5,
    blog6
  ];
  const pageCount = Math.ceil(postData.length / postPerPage);
  const displayBlog = postData
    .slice(pagesVisited, pagesVisited + postPerPage)
    .map((product, id) => {
      return (
        <div className="blog-show__item" key={id} >
          <Link to="/blog-details">
            <div className="item__img" >
              <img src={product} alt="" key={id}  />
            </div>
          </Link>
          <div className="item__content">
            <Link to="/blog-details" className="item__name">
              Review son kem bourjois velvet
            </Link>
            <p className="item__desc">
              Hi, chào các nàng ... sau khá nhiều lời hứa hão thì hôm nay tớ
              quay lại hăm nóng cái Blog này vào một ngày đầu hè nóng oi bức,
              khi mà dân tình xô nhau đi tắm Free để giải nhiệt.
            </p>
            <div className="item__author">Bởi NamTran ( 27 / 05 / 2015 )</div>
            <div className="item__details">
              <Link className="details__read" to="/blog-details">
                Đọc thêm<i className="fa fa-angle-right"></i>
              </Link>
              <Link className="details__comment" to="/blog-details">
                23 Bình luận
              </Link>
            </div>
          </div>
        </div>
      );
    });
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
      <div>
        <Header />
        <section className="section__blog">

            <div className="container">
                <div className="path">
                    <Link to="/" className="path__name">
                    Home
                    </Link>
                    <Link to="/blog" className="path__name">
                    Blog
                    </Link>
                </div>

                <div className="blog__wrapper">
                <h3>BLOG</h3>
                <div className="blog__block">
                    <div className="control-bar">
                        <div className="control-bar__show">
                        <div className="grid">
                            <i className="fa fa-th-large active"></i>
                        </div>
                        <div className="list">
                            <i className="fa fa-list"></i>
                        </div>
                        </div>
                    <div className="control-bar__page">
                        <div className="pagination-wrapper">
                        <ReactPaginate
                            forcePage={pageNumber}
                            previousLabel={<i className="fa fa-caret-left"></i>}
                            nextLabel={<i className="fa fa-caret-right"></i>}

                            pageCount={pageCount}
                            
                            onPageChange={(selected) => changePage(selected)}
                            containerClassName={"pagination"}
                            activeClassName={"active"}
                        />
                        </div>
                    </div>
                    </div>
                    <div className="blog-show">{displayBlog}</div>

                    <div className="control-bar">
                    <div className="control-bar__show">
                        <div className="grid">
                        <i className="fa fa-th-large active"></i>
                        </div>
                        <div className="list">
                        <i className="fa fa-list"></i>
                        </div>
                    </div>
                    <div className="control-bar__page">
                        <div className="pagination-wrapper">
                        <ReactPaginate
                            forcePage={pageNumber}
                            previousLabel={<i className="fa fa-caret-left"></i>}
                            nextLabel={<i className="fa fa-caret-right"></i>}
                            pageCount={pageCount}
                            onPageChange={(selected) => changePage(selected)}
                            containerClassName={"pagination"}
                            activeClassName={"active"}
                        />
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

export default Blog;
