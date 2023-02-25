import { DislikeOutlined, LikeOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Divider } from "antd";
import React from "react";

const ProductComment = () => {
  return (
    <div>
      <h1 className="text-xl mb-6">Bình luận</h1>
      <div className="w-full">
        <div className="flex justify-start items-start gap-x-4 w-full">
          <div className="bg-[#ccc] w-12 h-12 flex justify-center items-center rounded-full">
            <UserOutlined className="text-3xl" />
          </div>
          <div>
            <div className="flex justify-start items-start flex-col flex-1">
              <div className="flex justify-start items-center gap-x-4 mb-1">
                <span className="text-lg font-semibold text-[#444]">
                  Han So Hee
                </span>
                <span className="text-xs text-[#aaa]">
                  Ngày 10/01 lúc 21:11
                </span>
              </div>
              <p className="flex-1 font-light text-[#666]">Còn hàng ko shop</p>
            </div>
            <Button type="text" icon={<LikeOutlined />} />
            <Button type="text" icon={<DislikeOutlined />} />
            <Button type="text">Reply</Button>
          </div>
        </div>
      </div>
      <Divider />
      {/*  */}
      <div className="w-full">
        <div className="flex justify-start items-start gap-x-4 w-full">
          <div className="bg-[#ccc] w-12 h-12 flex justify-center items-center rounded-full">
            <UserOutlined className="text-3xl" />
          </div>
          <div>
            <div className="flex justify-start items-start flex-col flex-1">
              <div className="flex justify-start items-center gap-x-4 mb-1">
                <span className="text-lg font-semibold text-[#444]">
                  Han So Hee
                </span>
                <span className="text-xs text-[#aaa]">
                  Ngày 10/01 lúc 21:11
                </span>
              </div>
              <p className="flex-1 font-light text-[#666]">Còn hàng ko shop</p>
            </div>
            <Button type="text" icon={<LikeOutlined />} />
            <Button type="text" icon={<DislikeOutlined />} />
            <Button type="text">Reply</Button>
          </div>
        </div>
      </div>
      <Divider />
      {/*  */}
      <div className="w-full">
        <div className="flex justify-start items-start gap-x-4 w-full">
          <div className="bg-[#ccc] w-12 h-12 flex justify-center items-center rounded-full">
            <UserOutlined className="text-3xl" />
          </div>
          <div>
            <div className="flex justify-start items-start flex-col flex-1">
              <div className="flex justify-start items-center gap-x-4 mb-1">
                <span className="text-lg font-semibold text-[#444]">
                  Han So Hee
                </span>
                <span className="text-xs text-[#aaa]">
                  Ngày 10/01 lúc 21:11
                </span>
              </div>
              <p className="flex-1 font-light text-[#666]">Còn hàng ko shop</p>
            </div>
            <Button type="text" icon={<LikeOutlined />} />
            <Button type="text" icon={<DislikeOutlined />} />
            <Button type="text">Reply</Button>
          </div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default ProductComment;
