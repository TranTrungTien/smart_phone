import { Checkbox, InputNumber, Radio, message } from "antd";
import React, { useContext, useRef } from "react";
import { AppDataContext } from "../context";
import axios from "axios";

type IProps = {
  id: string;
  title: string;
  model: string;
  saleOffPrice: string;
  originalPrice: string;
  colors: string[];
};

const DetailPromotion = ({
  id,
  colors,
  model,
  originalPrice,
  saleOffPrice,
  title,
}: IProps) => {
  const { user } = useContext(AppDataContext);
  const colorRef = useRef("Xanh");
  const quantityRef = useRef(1);
  return (
    <div>
      <div className="flex flex-start items-center gap-x-4">
        <h1 className="text-4xl font-bold">{title}</h1>
        <span className="px-2 text-sm font-light py-1 rounded-2xl bg-orange-600 text-white">
          Trả góp 0%
        </span>
      </div>
      <div className="mt-10">
        <div className="flex justify-start items-center gap-x-3">
          <div className="text-orange-500 text-xl font-semibold">
            <span>{saleOffPrice}</span>
            <sup>₫</sup>
          </div>
          <del className="text-sm">
            {originalPrice} <sup>₫</sup>
          </del>
        </div>
        <div className="mt-6">
          <Radio.Group
            onChange={(e) => (colorRef.current = e.target.value)}
            className="space-x-4"
          >
            {colors.map(
              (color, index) =>
                color && (
                  <Radio.Button value={color} key={index}>
                    <span
                      key={index}
                      className="cursor-pointer mr-2 text-blue-500 bg-white uppercase"
                    >
                      {color}
                    </span>
                  </Radio.Button>
                )
            )}
          </Radio.Group>
        </div>

        <div className="my-4">
          <span>Số lượng</span>
          <div className="">
            <InputNumber
              onChange={(value) => (quantityRef.current = value || 1)}
              min={1}
              defaultValue={1}
            />
            ;
          </div>
        </div>
        <div className="rounded border border-solid border-[#aaa]">
          <div className="w-full py-3 bg-green-600 rounded text-white font-semibold px-3">
            <p>KHUYẾN MÃI:</p>
          </div>
          <div className="max-h-56 overflow-y-auto px-4 py-1">
            <div className="py-3 space-x-3">
              <Checkbox checked />
              <span>
                Trả góp 0% qua công ty tài chính (Áp dụng qua FE Credit trên giá
                bán lẻ)
              </span>
            </div>
            <div className="py-3 space-x-3">
              <Checkbox checked />
              <span>
                Trả góp 6-12 tháng qua thẻ tín dụng (áp dụng trên giá khuyến
                mại)
              </span>
            </div>
            <div className="py-3 space-x-3">
              <Checkbox checked />
              <span>
                Giảm thêm lên đến 3,000,000đ khi mua kèm gói cước, chi tiết
              </span>
            </div>
            <div className="py-3 space-x-3">
              <Checkbox checked />
              <span>Giảm ngay 20% cho củ sạc 20W chính hãng Apple</span>
            </div>
            <div className="py-3 space-x-3">
              <Checkbox checked />
              <span>
                Giảm giá 10% cho Phụ kiện Apple chính hãng (áp dụng tuỳ sản
                phẩm)
              </span>
            </div>
          </div>
        </div>
        <div className="my-3">
          <button
            onClick={async () => {
              if (!originalPrice) {
                message.error("Ngừng kinh doanh");
                return;
              }
              if (!user) {
                message.warning("Vui lòng đăng nhập");
              } else {
                const getTotalPrice = () => {
                  let totalPrice = 0;
                  const price = parseInt(
                    saleOffPrice.split("đ")?.[0]?.split(".")?.join("") || "0"
                  );
                  totalPrice += price * quantityRef.current;
                  return totalPrice;
                };
                const data = {
                  userId: user.id,
                  productId: id,
                  quantity: quantityRef.current,
                  price: saleOffPrice,
                  model,
                  color: colorRef.current,
                  totalPrice: getTotalPrice() + "đ",
                };
                await axios.post("http://localhost:8080/api/create-cart", data);
                message.success("Đã thêm vào giỏ hàng");
              }
            }}
            className="w-full text-lg py-2 rounded-md bg-orange-500 text-white font-semibold"
          >
            Thêm vào giỏ hàng
            <p className="font-light text-sm">
              Thoải mái lựa chọn, xem hàng tại nhà
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPromotion;
