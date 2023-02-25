import { Button, Form, Input, message } from "antd";
import axios from "axios";
import React from "react";

const Register = ({ closeModal }: any) => {
  const [form] = Form.useForm();
  const handleCreateUser = async () => {
    await axios.post(
      "http://localhost:8080/api/create-user",
      form.getFieldsValue()
    );
    message.success("Success");
    closeModal();
  };
  return (
    <div>
      <div className="w-full">
        <Form
          form={form}
          onFinish={handleCreateUser}
          labelCol={{ span: 4, offset: "12px" }}
        >
          <div className="login-form">
            <div className="">
              <Form.Item name={"fullname"} label="Họ và tên">
                <Input />
              </Form.Item>
              <Form.Item name={"address"} label="Địa chỉ">
                <Input />
              </Form.Item>
              <Form.Item name={"email"} label="Email">
                <Input type="email" />
              </Form.Item>
              <Form.Item name={"phone"} label="SĐT">
                <Input type="text" />
              </Form.Item>
              <Form.Item name={"province"} label="Tỉnh">
                <Input type="text" />
              </Form.Item>
              <Form.Item name={"district"} label="Huyện">
                <Input type="text" />
              </Form.Item>
              <Form.Item name={"ward"} label="Xã phường">
                <Input type="text" />
              </Form.Item>
              <Form.Item name={"password"} label="Mật khẩu">
                <Input type="password" />
              </Form.Item>
            </div>
            <div className="col-12">
              <Button
                className="register-Button mt-0 text-blue-500 border border-solid border-blue-500 py-1 px-3 hover:text-white"
                type="primary"
                htmlType="submit"
              >
                Đăng ký
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
