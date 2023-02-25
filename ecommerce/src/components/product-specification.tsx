import { Divider } from "antd";
import React from "react";

type IProps = {
  specifications: {
    key: string;
    value: string;
  }[];
};
const ProductSpecification = ({ specifications }: IProps) => {
  return (
    <div className="w-full col-span-1">
      <div>
        <h3 className="text-lg font-semibold">Thông số kỹ thuật</h3>
        {specifications.map((specification, index) => (
          <div key={index}>
            <div className="w-full flex justify-center items-center">
              <span className="w-[45%]">{specification.key}:</span>
              <p className="w-[55%]">{specification.value}</p>
            </div>
            <Divider />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSpecification;
