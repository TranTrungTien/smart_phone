import { MoreOutlined, PlusOutlined } from "@ant-design/icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Breadcrumb,
  Card,
  Col,
  InputGroup,
  Row,
  Table,
} from "@themesberg/react-bootstrap";
import {
  Button,
  Dropdown,
  Form,
  Input,
  Modal,
  Select,
  Upload,
  message,
} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

export default () => {
  const [openModal, setopenModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
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
            <Breadcrumb.Item active>Sản phẩm</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Sản phẩm</h4>
        </div>
        <div className="btn-toolbar mb-2 mb-md-0">
          <Button
            onClick={() => setopenModal(true)}
            variant="outline-primary"
            size="sm"
          >
            Thêm mới sản phẩm
          </Button>
        </div>
      </div>

      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <Input type="text" placeholder="Tìm kiếm Sản phẩm" />
            </InputGroup>
          </Col>
          {/* <Col xs={4} md={2} xl={1} className="ps-md-0 text-end">
            <Dropdown as={ButtonGroup}>
              <Dropdown.Toggle
                split
                as={Button}
                variant="link"
                className="text-dark m-0 p-0"
              >
                <span className="icon icon-sm icon-gray">
                  <FontAwesomeIcon icon={faCog} />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-xs dropdown-menu-right">
                <Dropdown.Item className="fw-bold text-dark">
                  Show
                </Dropdown.Item>
                <Dropdown.Item className="d-flex fw-bold">
                  10{" "}
                  <span className="icon icon-small ms-auto">
                    <FontAwesomeIcon icon={faCheck} />
                  </span>
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                <Dropdown.Item className="fw-bold">30</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col> */}
        </Row>
      </div>
      <ProductTable
        handleEdit={(data) => {
          setopenModal(true);
          setEditProduct(data);
        }}
      />
      <Modal
        open={openModal}
        width={"60%"}
        style={{
          overflowY: "auto",
        }}
        title="Thêm sản phẩm"
        destroyOnClose
        footer={null}
        onCancel={() => setopenModal(false)}
        closable
      >
        <CreateProduct
          edited={editProduct}
          closeModal={() => {
            setopenModal(false);
            setEditProduct(null);
          }}
        />
      </Modal>
    </>
  );
};

const ProductTable = ({ handleEdit }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/api/products`).then((res) => {
      let data = [];
      Object.values(res.data?.products).forEach((product) => {
        data = data.concat(product);
      });
      data.reverse();
      setProducts(data);
    });
  }, []);
  const TableRow = (props) => {
    const {
      nth,
      title,
      status,
      id,
      quantity,
      priceSaleOff,
      originalPrice,
      colors,
      created,
      model,
    } = props;
    const statusVariant =
      status === "Paid"
        ? "success"
        : status === "Due"
        ? "warning"
        : status === "Canceled"
        ? "danger"
        : "primary";
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
              axios.post(`http://localhost:8080/api/delete`, {
                id: id,
                model: model,
              });
            }}
          >
            Xóa
          </Button>
        ),
      },
    ];

    return (
      <tr style={{ padding: "10px 20px" }}>
        <td>
          <span className="fw-normal">{nth}</span>
        </td>
        <td>
          <span className="fw-normal">{id.slice(0, 6)}</span>
        </td>
        <td>
          <span className="fw-normal">{title}</span>
        </td>
        <td>
          <span className="fw-normal">{originalPrice ? quantity : "-"}</span>
        </td>
        <td>
          <span className="fw-normal">
            {originalPrice ? originalPrice : "-"}
          </span>
        </td>
        <td>
          <span className="fw-normal">
            {colors?.map((item) => item + ", ")}
          </span>
        </td>
        <td>
          <span className="fw-normal">{created}</span>
        </td>
        <td>
          <span className={`fw-normal text-${statusVariant}`}>
            {originalPrice ? status : priceSaleOff}
          </span>
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
              <th className="border-bottom">Số lượng</th>
              <th className="border-bottom">Giá</th>
              <th className="border-bottom">Màu sắc</th>
              <th className="border-bottom">Ngày tạo</th>
              <th className="border-bottom">Trạng thái</th>
              <th className="border-bottom"></th>
            </tr>
          </thead>
          <tbody>
            {products.map((t, index) => (
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

const CreateProduct = ({ edited, closeModal }) => {
  const [form] = Form.useForm();
  useEffect(() => {
    console.log({ edited });
    form.setFieldsValue({
      title: edited?.title?.trim(),
      model: edited?.model,
      priceSaleOff: edited?.priceSaleOff,
      originalPrice: edited?.originalPrice,
      colors: edited?.colors,
      quantity: edited?.quantity,
      features: edited?.features?.map((item) => item.desc),
    });
  }, [edited, form]);
  const handleAddNewProduct = async () => {
    const data = form.getFieldsValue();
    const formData = new FormData();
    for (const file of fileList) {
      formData.append("images", file.originFileObj);
    }
    if (!edited) {
      const response = await axios.post(
        `http://localhost:8080/api/upload-images`,
        formData
      );
      const images = response.data.imagesId;
      const product = {
        ...data,
        colors: [data?.colors],
        features: [{ desc: data?.features }],
        previewImageLink: images,
      };
      await axios.post(`http://localhost:8080/api/create-product`, product);
    } else {
      const response = await axios.post(
        `http://localhost:8080/api/upload-images`,
        formData
      );
      const images = response.data.imagesId || [];
      const product = {
        ...data,
        id: edited?.id,
        colors: Array.isArray(data?.colors) ? data?.colors : [data?.colors],
        features: [{ desc: data?.features }],
        previewImageLink: [...images, ...edited?.previewImageLink],
      };
      await axios.post(`http://localhost:8080/api/edit-product`, product);
    }
    message.success("Success!");
    closeModal();
    window.location.reload();
  };
  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  return (
    <div style={{ position: "relative" }}>
      <Form
        form={form}
        onFinish={handleAddNewProduct}
        style={{ display: "flex", gap: "0px 10px" }}
        labelCol={{ span: 6, offset: 0 }}
      >
        <div style={{ flex: "1" }}>
          <Form.Item name={"title"} label="Tên Sản Phẩm">
            <Input style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name={"model"} label="Model">
            <Select
              style={{ width: "100%" }}
              options={[
                { value: "ip14", label: "IPhone 14" },
                { value: "ip13", label: "IPhone 13" },
                { value: "ip12", label: "IPhone 12" },
                { value: "ip11", label: "IPhone 11" },
                { value: "ipx", label: "IPhone X" },
              ]}
            />
          </Form.Item>
          <Form.Item name={"priceSaleOff"} label="Giá Sale">
            <Input style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name={"originalPrice"} label="Giá gốc">
            <Input style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item name={"colors"} label="Màu sắc">
            <Select
              style={{ width: "100%" }}
              options={[
                { value: "Red", label: "Red" },
                { value: "Blue", label: "Blue" },
                { value: "Yellow", label: "Yellow" },
              ]}
            ></Select>
          </Form.Item>
          <Form.Item name={"features"} label="Mô tả">
            <Input.TextArea style={{ width: "100%" }} rows={10} />
          </Form.Item>
          <Form.Item name={"quantity"} label="Số lượng">
            <Input style={{ width: "100%" }} />
          </Form.Item>
        </div>
        <div style={{ width: "50%" }}>
          <Upload
            listType="picture-card"
            fileList={fileList}
            onChange={handleChange}
          >
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </div>
        <Button
          type="primary"
          htmlType="submit"
          style={{ position: "absolute", bottom: 0, right: 0 }}
        >
          OK
        </Button>
      </Form>
    </div>
  );
};
