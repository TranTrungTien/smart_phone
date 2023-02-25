import React from "react";
import ProductSpecification from "./product-specification";

type IProductFeature = {
  features: {
    desc?: string;
    imageLink?: string;
  }[];
  specifications: {
    key: string;
    value: string;
  }[];
};

const ProductFeature = ({ features, specifications }: IProductFeature) => {
  return (
    <div className="grid grid-cols-3 gap-x-10 my-10">
      <div className="col-span-2">
        <h4 className="text-2xl font-semibold">Đặc điểm nổi bật</h4>
        <div>
          {features.map((feature, index) => {
            if (feature.desc) {
              return (
                <div key={index} className="mt-2">
                  <p className="text-[#333]">{feature.desc}</p>
                </div>
              );
            } else if (feature.imageLink) {
              return (
                <div key={index} className="w-full my-6">
                  <img
                    src={feature.imageLink}
                    alt=""
                    className="w-full object-cover object-center"
                  />
                  <p className="text-center mt-2">
                    Màn hình 6.7 inch cho trải nghiệm xem phim, lướt web tuyệt
                    hơn
                  </p>
                </div>
              );
            } else return <div key={index}></div>;
          })}
        </div>
      </div>
      <ProductSpecification specifications={specifications} />
    </div>
  );
};

export default ProductFeature;
