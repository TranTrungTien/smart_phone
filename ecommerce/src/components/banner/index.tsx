import React from "react";
import LeftNav from "../left-nav";
const Banner = () => {
  return (
    <>
      <LeftNav />
      <div className="li-static-banner pt-20 pt-sm-30 pt-xs-30">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="single-banner pb-xs-30 w-full h-full">
                <a href="#" className="w-full h-full">
                  <img
                    src="images/ip_saleoff.webp"
                    alt="Li's Static Banner"
                    className="w-full h-full object-cover object-center"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="single-banner pb-xs-30 w-full h-full">
                <a href="#" className="w-full h-full">
                  <img
                    src="images/ip_ssaleoff2.webp"
                    alt="Li's Static Banner"
                    className="w-full h-full object-cover object-center"
                  />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="single-banner w-full h-full">
                <a href="#" className="w-full h-full">
                  <img
                    src="images/ip_ssaleoff3.png"
                    alt="Li's Static Banner"
                    className="w-full h-full object-cover object-center"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
