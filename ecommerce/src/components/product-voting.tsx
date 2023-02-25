import { Form, Input, Rate } from "antd";
import React from "react";

const ProductVoting = () => {
  return (
    <div className="grid grid-cols-2 gap-x-5">
      <div>
        <h1 className="text-xl">Đánh giá về iPhone 14 Plus 128GB</h1>
        <Form className="my-6">
          <Form.Item>
            <Input placeholder="Tên của bạn (*)" />
          </Form.Item>
          <Form.Item>
            <Input placeholder="Email của bạn (*)" />
          </Form.Item>
          <Form.Item>
            <Input.TextArea placeholder="Mời bạn gửi bình luận (*)" rows={10} />
          </Form.Item>
        </Form>
      </div>
      <div>
        <div>
          <Rate />
          <div className="mt-20">
            <div className="flex my-3 justify-start items-center gap-x-4">
              <span className="flex-1 whitespace-nowrap">Tuyệt vời</span>
              <div className="w-[300px] h-1 rounded-full bg-[#cfcfcf]"></div>
              <span className="flex-1">0</span>
            </div>
            <div className="flex my-3 justify-start items-center gap-x-4">
              <span className="flex-1 whitespace-nowrap">Rất tốt</span>
              <div className="w-[300px] h-1 rounded-full bg-[#cfcfcf]"></div>
              <span className="flex-1">0</span>
            </div>
            <div className="flex my-3 justify-start items-center gap-x-4">
              <span className="flex-1 whitespace-nowrap">Bình thường</span>
              <div className="w-[300px] h-1 rounded-full bg-[#cfcfcf]"></div>
              <span className="flex-1">0</span>
            </div>
            <div className="flex my-3 justify-start items-center gap-x-4">
              <span className="flex-1 whitespace-nowrap">Tạm được</span>
              <div className="w-[300px] h-1 rounded-full bg-[#cfcfcf]"></div>
              <span className="flex-1">0</span>
            </div>
            <div className="flex my-3 justify-start items-center gap-x-4">
              <span className="flex-1 whitespace-nowrap">Không thích</span>
              <div className="w-[300px] h-1 rounded-full bg-[#cfcfcf]"></div>
              <span className="flex-1">0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVoting;
