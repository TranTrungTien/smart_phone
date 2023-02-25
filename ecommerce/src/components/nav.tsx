import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="header-bottom header-sticky d-none d-lg-block d-xl-block">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="hb-menu">
              <nav style={{ display: "block" }}>
                <ul>
                  <li className="">
                    <Link to={"/"}>Trang chủ</Link>
                  </li>
                  <li className="megamenu-holder">
                    <span>IPHONE</span>
                    <ul className="megamenu hb-megamenu">
                      <li>
                        <Link to={`/ip14`}>Iphone 14</Link>
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
                      <li>
                        <Link to={`/ip13`}>Iphone 13</Link>
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
                      <li>
                        <Link to={`/ip12`}>Iphone 12</Link>
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
                      <li>
                        <Link to={`/ip11`}>Iphone 11</Link>
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
                      <li>
                        <Link to={`/ipx`}>Iphone X</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to={`/about-us`}>Về chúng tôi</Link>
                  </li>
                  <li>
                    <Link to={`/contact`}>Liên hệ</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
