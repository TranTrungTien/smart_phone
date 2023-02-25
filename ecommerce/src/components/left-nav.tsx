import React from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  return (
    <div className="slider-with-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="category-menu">
              <div className="category-heading">
                <h2 className="categories-toggle">
                  <span>danh mục</span>
                </h2>
              </div>
              <div id="cate-toggle" className="category-menu-list">
                <ul>
                  <li className="right-menu">
                    <Link to={`/ip14`}>Iphone 14</Link>
                    <ul className="cat-mega-menu">
                      <li className="right-menu cat-mega-title">
                        <ul>
                          <li>
                            <Link to={`/ip14`}>Iphone 14 Thường</Link>
                          </li>
                          <li>
                            <Link to={`/ip14`}>Iphone 14 Pro</Link>
                          </li>
                          <li>
                            <Link to={`/ip14`}>Iphone 14 Pro Max</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="right-menu">
                    <Link to={`/ip13`}>Iphone 13</Link>
                    <ul className="cat-mega-menu">
                      <li className="right-menu cat-mega-title">
                        <ul>
                          <li>
                            <Link to={`/ip13`}>Iphone 13 Thường</Link>
                          </li>
                          <li>
                            <Link to={`/ip13`}>Iphone 13 Pro</Link>
                          </li>
                          <li>
                            <Link to={`/ip13`}>Iphone 13 Pro Max</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="right-menu">
                    <Link to={`/ip12`}>Iphone 12</Link>
                    <ul className="cat-mega-menu">
                      <li className="right-menu cat-mega-title">
                        <ul>
                          <li>
                            <Link to={`/ip12`}>Iphone 12 Thường</Link>
                          </li>
                          <li>
                            <Link to={`/ip12`}>Iphone 12 Pro</Link>
                          </li>
                          <li>
                            <Link to={`/ip12`}>Iphone 12 Pro Max</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="right-menu">
                    <Link to={`/ip11`}>Iphone 11</Link>
                    <ul className="cat-mega-menu">
                      <li className="right-menu cat-mega-title">
                        <ul>
                          <li>
                            <Link to={`/ip11`}>Iphone 11 Thường</Link>
                          </li>
                          <li>
                            <Link to={`/ip11`}>Iphone 11 Pro</Link>
                          </li>
                          <li>
                            <Link to={`/ip11`}>Iphone 11 Pro Max</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li className="">
                    <Link to={`/ip11`}>Iphone X</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="relative w-full min-h-[380px] max-h-[380px]">
              <img
                src="/images/ip_large_banner.jpg"
                alt=""
                className="bg-banner-position relative object-cover object-center max-h-[550px]"
              />
              <div className="slider-progress"></div>
              <div className="slider-content absolute top-1/4 left-10">
                <h5>
                  Giảm giá tới <span>20%</span> Trong tuần
                </h5>
                <h2>Iphone 14 Pro 128GB</h2>
                <h3>
                  <span> 21.990.000 VNĐ</span>
                </h3>
                <div className="default-btn slide-btn">
                  <Link className="links" to={"./ip14"}>
                    Shopping Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
