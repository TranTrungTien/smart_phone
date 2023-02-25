import React from "react";

const SaleOff = () => {
  return (
    <div className="li-static-home">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 relative">
            <img
              src="https://didongviet.vn/dchannel/wp-content/uploads/2019/01/sam-iphone-trung-chi-vang-didongviet-min.jpg"
              alt=""
              className="w-full h-auto object-cover object-center"
            />
            <div className="li-static-home-content">
              <p
                style={{ color: "white", fontSize: "18px" }}
                className="text-lg"
              >
                Giảm Giá Tới 20% Trong Tuần
              </p>
              <h2 style={{ color: "white" }} className="text-xl">
                Iphone 14
              </h2>
              <p
                className="schedule text-lg"
                style={{ color: "white", fontSize: "18px" }}
              >
                Giá chỉ từ
                <span style={{ fontSize: "40px", color: "white" }}>
                  {" "}
                  20.000.000 VND
                </span>
              </p>
              <div className="default-btn">
                <a href="shop-left-sidebar.html" className="links">
                  Shopping Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaleOff;
