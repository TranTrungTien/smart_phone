import React from "react";
import ProductCard from "./product-card";
import { IProductCard } from "../intefaces";

type IProps = {
  label: string;
  bannerImageLink: string[];
  product: IProductCard[];
};

const Category = ({ bannerImageLink, label, product }: IProps) => {
  return (
    <section className="mt-24 product-area li-laptop-product li-laptop-product-2 pb-45">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="li-section-title">
              <h2>
                <span>{label}</span>
              </h2>
              <ul className="li-sub-category-list">
                <li className="active">
                  <a href="shop-left-sidebar.html">Xem thêm</a>
                </li>
              </ul>
            </div>
            <div className="li-banner-2 pt-15">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-banner max-h-72 overflow-hidden">
                    <a href="#">
                      <img
                        src={bannerImageLink[0]}
                        alt="Li's Static Banner"
                        className="w-full h-full object-cover object-center"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="single-banner pt-xs-30 max-h-72 overflow-hidden">
                    <a href="#">
                      <img
                        src={bannerImageLink[1]}
                        alt="Li's Static Ban /ner"
                        className="w-full h-full object-cover object-center"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row grid grid-cols-4 gap-x-2 mt-6">
              {product.map((p, index) => (
                <ProductCard {...p} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
