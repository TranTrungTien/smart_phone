import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, Card, Col, Row, Table } from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";

import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown, Form, Input, Modal, message } from "antd";
import axios from "axios";

export default () => {
  const [openModal, setopenModal] = useState(false);
  const [editUser, setEditUser] = useState(null);
  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <div className="d-block mb-4 mb-md-0">
          <Breadcrumb
            className="d-none d-md-inline-block"
            listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}
          >
            <Breadcrumb.Item>
              <FontAwesomeIcon icon={faHome} />
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Thành viên</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Thành viên</h4>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Button onClick={() => setopenModal(true)} type="primary">
            Thêm thành viên
          </Button>
        </div>
      </div>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <Input placeholder="Tìm kiếm Thành viên" />
          </Col>
        </Row>
      </div>

      <UserTable
        handleEdit={(data) => {
          setopenModal(true);
          setEditUser(data);
        }}
      />
      <Modal
        open={openModal}
        width={"60%"}
        style={{
          overflowY: "auto",
        }}
        title="Thêm Thành viên"
        destroyOnClose
        footer={null}
        onCancel={() => {
          setEditUser(null);
          setopenModal(false);
        }}
        closable
      >
        <CreateUser
          edited={editUser}
          closeModal={() => {
            setopenModal(false);
            setEditUser(null);
          }}
        />
      </Modal>
    </>
  );
};

const CreateUser = ({ edited, closeModal }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    console.log({ edited });
    form.setFieldsValue({
      fullname: edited?.fullname,
      address: edited?.address,
      email: edited?.email,
      phone: edited?.phone,
      province: edited?.province,
      district: edited?.district,
      ward: edited?.ward,
    });
  }, [edited, form]);
  const handleCreateUser = async () => {
    if (edited) {
      await axios.post("http://localhost:8080/api/edit-user", {
        id: edited?.id,
        ...form.getFieldsValue(),
      });
    } else {
      await axios.post(
        "http://localhost:8080/api/create-user",
        form.getFieldsValue()
      );
    }
    message.success("Success");
    closeModal();
    window.location.reload();
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
            <div className="row">
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
              {!edited && (
                <Form.Item name={"password"} label="Mật khẩu">
                  <Input type="password" />
                </Form.Item>
              )}
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

const UserTable = ({ handleEdit }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/api/users`).then((res) => {
      let data = [];
      Object.values(res.data?.users).forEach((product) => {
        data = data.concat(product);
      });
      data.reverse();
      setUsers(data);
    });
  }, []);
  const TableRow = (props) => {
    const items = [
      {
        key: "1",
        label: <Button onClick={() => handleEdit(props)}>Sửa</Button>,
      },
      {
        key: "2",
        label: (
          <Button
            onClick={() => {
              axios.post(`http://localhost:8080/api/delete-user`, {
                id: id,
              });
              window.location.reload();
            }}
          >
            Xóa
          </Button>
        ),
      },
    ];
    const { nth, fullname, status, id, address, phone, email, created } = props;
    const statusVariant =
      status === "Paid"
        ? "success"
        : status === "Due"
        ? "warning"
        : status === "Canceled"
        ? "danger"
        : "primary";

    return (
      <tr>
        {/* <td>
          <Card.Link as={Link} to={Routes.Invoice.path} className="fw-normal">
            {invoiceNumber}
          </Card.Link>
        </td> */}
        <td>
          <span className="fw-normal">{nth}</span>
        </td>
        <td>
          <span className="fw-normal">{id.slice(0, 6)}</span>
        </td>
        <td>
          <span className="fw-normal">{fullname}</span>
        </td>
        <td>
          <span className="fw-normal">{phone}</span>
        </td>
        <td>
          <span className="fw-normal">{email}</span>
        </td>
        <td>
          <span className="fw-normal">{address}</span>
        </td>
        <td>
          <span className="fw-normal">{created}</span>
        </td>
        <td>
          <span className={`fw-normal text-${statusVariant}`}>{status}</span>
        </td>
        <td>
          <Dropdown menu={{ items }} placement="bottomLeft">
            <Button type="ghost">
              <MoreOutlined />
            </Button>
          </Dropdown>
        </td>
      </tr>
    );
  };
  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">#</th>
              <th className="border-bottom">ID</th>
              <th className="border-bottom">Tên</th>
              <th className="border-bottom">SĐT</th>
              <th className="border-bottom">Email</th>
              <th className="border-bottom">Địa chỉ</th>
              <th className="border-bottom">Ngày tạo</th>
              <th className="border-bottom">Trạng thái</th>
              <th className="border-bottom"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((t, index) => (
              <TableRow
                key={`transaction-${t.invoiceNumber}`}
                {...t}
                nth={index + 1}
              />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
