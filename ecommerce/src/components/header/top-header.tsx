import React from "react";

const TopHeader = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="header-top-left">
              <ul className="phone-wrap">
                <li>
                  <span>Đường dây nóng:</span>
                  <a href="#">(+123) 123 321 345</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9 col-md-8">
            <div className="header-top-right">
              <ul className="ht-menu">
                <li>
                  <div className="ht-setting-trigger">
                    <span>Cài đặt</span>
                  </div>
                  <div className="setting ht-setting">
                    <ul className="ht-setting-list">
                      <li>
                        <a href="login-register.html">Tôi</a>
                      </li>
                      <li>
                        <a href="checkout.html">Thanh toán</a>
                      </li>
                      <li>
                        <a href="login-register.html">Đăng nhập</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="currency-selector-wrapper">Tiền tệ :</span>
                  <div className="ht-currency-trigger">
                    <span>VND</span>
                  </div>
                  <div className="currency ht-currency">
                    <ul className="ht-setting-list">
                      <li>
                        <a href="#">VND</a>
                      </li>
                      <li className="active">
                        <a href="#">USD</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <span className="language-selector-wrapper">Ngôn ngữ :</span>
                  <div className="ht-language-trigger">
                    <span>Tiếng việt</span>
                  </div>
                  <div className="language ht-language">
                    <ul className="ht-setting-list">
                      <li className="active">
                        <a href="#">Tiếng việt</a>
                      </li>
                      <li>
                        <a href="#">Tiếng anh</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
