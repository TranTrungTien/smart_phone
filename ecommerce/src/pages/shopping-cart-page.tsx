import { Input, InputNumber } from "antd";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import { AppDataContext } from "../context";

type IProps = {};

const ShoppingCart = () => {
  const { user } = useContext(AppDataContext);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    const getCarts = async () => {
      if (user) {
        const carts = await (
          await axios.get("http://localhost:8080/api/carts/" + user.id)
        ).data;
        setCarts(carts?.carts);
      }
    };
    getCarts();
  }, [user]);
  function format(n: number) {
    return n
      .toFixed(2)
      .replace(".", ",")
      .replace(/\d{3}(?=(\d{3})*,)/g, function (s) {
        return "." + s;
      });
  }
  const getTotalPrice = () => {
    let totalPrice = 0;
    for (const cart of carts as any) {
      const price = parseInt(
        cart?.price?.split("đ")?.[0]?.split(".")?.join("") || "0"
      );
      totalPrice += price * parseInt(cart?.quantity);
    }
    return format(totalPrice);
  };
  const getTotalPriceRow = (index: number, quantity: number) => {
    let totalPrice = 0;
    const cart = carts[index] as any;
    const price = parseInt(
      cart?.price?.split("đ")?.[0]?.split(".")?.join("") || "0"
    );
    totalPrice += price * quantity;
    return format(totalPrice);
  };
  return (
    <div>
      <Header />
      <div className="breadcrumb-area">
        <div className="container">
          <div className="breadcrumb-content">
            <ul>
              <li>
                <a href="index.html">Trang chủ</a>
              </li>
              <li className="active">Giỏ hàng</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="Shopping-cart-area pt-60 pb-60">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form action="#">
                <div className="table-content table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="li-product-remove">Xóa</th>
                        <th className="li-product-thumbnail">Ảnh</th>
                        <th className="cart-product-name">Tên Sản Phẩm</th>
                        <th className="li-product-price">Giá Sản Phẩm</th>
                        <th className="li-product-quantity">Số Lượng</th>
                        <th className="li-product-subtotal">Tổng Số Tiền</th>
                      </tr>
                    </thead>
                    <tbody>
                      {carts?.map((item: any, index) => (
                        <tr key={index}>
                          <td className="li-product-remove">
                            <a href="#">
                              <i className="fa fa-times"></i>
                            </a>
                          </td>
                          <td className="li-product-thumbnail max-w-[80px] max-h-[80px]">
                            <img
                              src={item?.product?.previewImageLink[0]}
                              alt="cart products"
                              onError={({ currentTarget }) => {
                                currentTarget.onerror = null; // prevents looping
                                currentTarget.src =
                                  "http://localhost:8080/api/images/" +
                                  item?.product?.previewImageLink[0];
                              }}
                            />
                          </td>
                          <td className="li-product-name">
                            <span>{item?.product?.title}</span>
                          </td>
                          <td className="li-product-price">
                            <span className="amount">{item?.price}</span>
                          </td>
                          <td className="quantity">
                            <label>Số Lượng</label>
                            <div className="cart-plus-minus">
                              <InputNumber
                                value={item.quantity}
                                onChange={async (value) => {
                                  const data = {
                                    id: item.id,
                                    userId: user.id,
                                    productId: item.product.id,
                                    quantity: value,
                                    model: item.model,
                                    price: item.price,
                                    totalPrice:
                                      getTotalPriceRow(index, value) + "₫",
                                  };

                                  await axios.post(
                                    "http://localhost:8080/api/edit-cart",
                                    data
                                  );
                                  const carts = await (
                                    await axios.get(
                                      "http://localhost:8080/api/carts/" +
                                        user.id
                                    )
                                  ).data;
                                  setCarts(carts?.carts);
                                }}
                              />
                            </div>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">{item?.totalPrice}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="coupon-all">
                      <div className="coupon">
                        <Input
                          className="input-text"
                          name="coupon_code"
                          value=""
                          placeholder="mã giảm giá"
                          type="text"
                        />
                        <Input value="Thêm mã giảm giá" type="submit" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-5 ml-auto">
                    <div className="cart-page-total">
                      <h2>Tổng tiền</h2>
                      <strong className="text-2xl font-semibold text-red-500 block">
                        {getTotalPrice()}đ
                      </strong>
                      <Link to={"/checkout"}>Thanh toán</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShoppingCart;
