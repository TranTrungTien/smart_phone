import React from "react";
import { IP } from "../data";
import ProductCard from "./product-card";

const ProductRelative = ({ model }: { model?: string }) => {
  const products = model
    ? IP[model].slice(IP[model].length - 4, IP[model].length).map((item) => ({
        model: "ip11",
        id: item.id,
        title: item.title,
        previewImageLink: item.previewImageLink[0],
        priceSaleOff: item.priceSaleOff,
        originalPrice: item.originalPrice,
      }))
    : null;
  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold">Sản phẩm tương đương</h1>
      </div>
      <div>
        <div className="row grid grid-cols-4 gap-x-2 mt-6">
          {products?.map((item, index) => (
            <ProductCard {...item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductRelative;
