import React, { useContext } from "react";
import ProductCard from "./product-card";
import { IP } from "../data";
import { AppDataContext } from "../context";

const HotDeal = () => {
  const { products } = useContext(AppDataContext);
  const ip14 = (products && products.ip14) || [];
  const hotProducts = ip14?.slice(0, 4)?.map((item: any) => ({
    model: "ip14",
    id: item.id,
    title: item.title,
    previewImageLink: item.previewImageLink[0],
    priceSaleOff: item.priceSaleOff,
    originalPrice: item.originalPrice,
  }));
  return (
    <section className="mt-10 product-area li-laptop-product Special-product pt-60 pb-45">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="li-section-title">
              <h2>
                <span>Bán chạy nhất</span>
              </h2>
            </div>
            <div className="row grid grid-cols-4">
              {hotProducts?.map((product: any, index: number) => (
                <ProductCard {...product} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotDeal;
