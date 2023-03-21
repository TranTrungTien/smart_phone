import React, { useContext, useEffect, useState } from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import { Checkbox, Form, Input, Select, message } from "antd";
import axios from "axios";
import { AppDataContext } from "../context";

const CheckoutCart = () => {
  const { user } = useContext(AppDataContext);
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    user &&
      form.setFieldsValue({
        province: user.province,
        district: user.district,
        ward: user.ward,
        fullname: user.fullname,
        address: user.address,
        email: user.email,
        phone: user.phone,
      });
  }, [user]);
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
  const [form] = Form.useForm();
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
  const getTotalPriceRow = (index: number) => {
    let totalPrice = 0;
    const cart = carts[index] as any;
    const price = parseInt(
      cart?.price?.split("đ")?.[0]?.split(".")?.join("") || "0"
    );
    totalPrice += price * parseInt(cart?.quantity || "0");

    return format(totalPrice);
  };
  const handleSubmit = async () => {
    const data = {
      ...form.getFieldsValue(),
      userId: user.id,
      carts,
      totalPrice: getTotalPrice(),
    };
    console.log({ data });

    // await axios.post("http://localhost:8080/api/create-order", data);
    message.success("Đặt hàng thành công");
    // setTimeout(() => window.location.replace("/"), 500);
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
              <li className="active">Thanh toán</li>
            </ul>
          </div>
        </div>
      </div>
      <Form form={form} onFinish={handleSubmit}>
        <div className="checkout-area pt-60 pb-30">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="coupon-accordion">
                  <h3>
                    Mã giảm giá
                    <div
                      id="checkout_coupon"
                      className="coupon-checkout-content"
                    >
                      <div className="coupon-info">
                        <p className="checkout-coupon">
                          <Input type="text" />
                          <Input value="Thêm mã giảm giá" type="submit" />
                        </p>
                      </div>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-12">
                <form action="#">
                  <div className="checkbox-form">
                    <h3>Thông tin đơn hàng</h3>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="country-select clearfix">
                          <label>
                            Tỉnh <span className="required">*</span>
                          </label>
                          <Form.Item name="province">
                            <Input placeholder="Nhập tỉnh" />
                          </Form.Item>
                        </div>
                        <div className="country-select clearfix">
                          <label>
                            Quận/Huyện <span className="required">*</span>
                          </label>
                          <Form.Item name="district">
                            <Input placeholder="Nhập quận/huyện" />
                          </Form.Item>
                        </div>
                        <div className="country-select clearfix">
                          <label>
                            Xã/Phường <span className="required">*</span>
                          </label>
                          <Form.Item name="ward">
                            <Input placeholder="Nhập Xã/Phường" />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Họ tên <span className="required">*</span>
                          </label>
                          <Form.Item name="fullname">
                            <Input placeholder="" type="text" />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="checkout-form-list">
                          <label>
                            Địa chỉ <span className="required">*</span>
                          </label>
                          <Form.Item name={"address"}>
                            <Input placeholder="Street address" type="text" />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Email <span className="required">*</span>
                          </label>
                          <Form.Item name={"email"}>
                            <Input placeholder="" type="email" />
                          </Form.Item>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="checkout-form-list">
                          <label>
                            Số điện thoại <span className="required">*</span>
                          </label>
                          <Form.Item name={"phone"}>
                            <Input type="text" />
                          </Form.Item>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-6 col-12">
                <div className="your-order">
                  <h3 className="capitalize">ĐƠN HÀNG</h3>
                  <div className="your-order-table table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="cart-product-name">Sản phẩm</th>
                          <th className="cart-product-total">Số tiền</th>
                        </tr>
                      </thead>
                      <tbody>
                        {carts.map((item: any, index: number) => (
                          <tr className="cart_item" key={index}>
                            <td className="cart-product-name">
                              {item?.product?.title}
                              <strong className="product-quantity">
                                {" "}
                                × {item?.quantity}
                              </strong>
                            </td>
                            <td className="cart-product-total">
                              <span className="amount">
                                {getTotalPriceRow(index)}đ
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr className="order-total">
                          <th>Tổng số tiền</th>
                          <td>
                            <strong>
                              <span className="amount">{getTotalPrice()}đ</span>
                            </strong>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                  <div className="payment-method">
                    <div className="payment-accordion">
                      Hình thức thanh toán: Ship COD
                      <div className="order-button-payment">
                        <input value="Đặt hàng" type="submit" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Form>

      <Footer />
    </div>
  );
};

export default CheckoutCart;
