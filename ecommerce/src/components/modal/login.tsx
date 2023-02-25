import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import React, { useContext } from "react";
import { AppDataContext } from "../../context";

const Login = ({ closeModal }: any) => {
  const [form] = Form.useForm();
  const { setUser } = useContext(AppDataContext);
  const handleLogin = async () => {
    const user = await (
      await axios.post(
        "http://localhost:8080/api/get-user",
        form.getFieldsValue()
      )
    ).data;
    if (!user) {
      message.error("sai thông tin");
      return;
    }
    setUser(user);
    localStorage.setItem("user-ecommerce", JSON.stringify(user));
    closeModal();
  };
  return (
    <div className="coupon-content min-h-[50%]">
      <div className="coupon-info">
        <p className="text-xl mb-4">Đăng nhập để trải nghiệm tốt nhất</p>
        <Form form={form} onFinish={handleLogin}>
          <p className="">
            <label>
              Email <span className="required">*</span>
            </label>
            <Form.Item name={"email"}>
              <Input />
            </Form.Item>
          </p>
          <p className="">
            <label>
              Password <span className="required">*</span>
            </label>
            <Form.Item name={"password"}>
              <Input type="password" />
            </Form.Item>
          </p>
          <p className="my-3 text-center ">
            <Button htmlType="submit" className="w-32 text-black">
              Đăng nhập
            </Button>
          </p>
          <label className="mt-10 space-x-3">
            <Checkbox />
            Remember me
          </label>
          <div className="flex gap-3">
            <p className="lost-password">
              <a>Quên mật khẩu?</a>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
