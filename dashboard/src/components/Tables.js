import {
  faAngleDown,
  faAngleUp,
  faArrowDown,
  faArrowUp,
  faExternalLinkAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  Col,
  Image,
  ProgressBar,
  Row,
  Table,
} from "@themesberg/react-bootstrap";
import React, { useEffect, useState } from "react";

import { MoreOutlined } from "@ant-design/icons";
import { Button, Divider, Dropdown, Modal } from "antd";
import axios from "axios";
import commands from "../data/commands";
import { pageRanking, pageTraffic, pageVisits } from "../data/tables";

const ValueChange = ({ value, suffix }) => {
  const valueIcon = value < 0 ? faAngleDown : faAngleUp;
  const valueTxtColor = value < 0 ? "text-danger" : "text-success";

  return value ? (
    <span className={valueTxtColor}>
      <FontAwesomeIcon icon={valueIcon} />
      <span className="fw-bold ms-1">
        {Math.abs(value)}
        {suffix}
      </span>
    </span>
  ) : (
    "--"
  );
};

export const PageVisitsTable = () => {
  const TableRow = (props) => {
    const { views, bounceRate, month } = props;
    const bounceIcon = bounceRate < 0 ? faArrowDown : faArrowUp;
    const bounceTxtColor = bounceRate < 0 ? "text-danger" : "text-success";

    return (
      <tr>
        <td>{month}</td>
        <td>{views}</td>
        <td>
          <FontAwesomeIcon
            icon={bounceIcon}
            className={`${bounceTxtColor} me-3`}
          />
          {Math.abs(bounceRate)}%
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Header>
        <Row className="align-items-center">
          <Col>
            <h5>Khách ghé thăm</h5>
          </Col>
        </Row>
      </Card.Header>
      <Table responsive className="align-items-center table-flush">
        <thead className="thead-light">
          <tr>
            <th scope="col">Tháng</th>
            <th scope="col">Lượt ghé thăm</th>
            <th scope="col">Tỷ lệ</th>
          </tr>
        </thead>
        <tbody>
          {pageVisits.map((pv) => (
            <TableRow key={`page-visit-${pv.id}`} {...pv} />
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export const PageTrafficTable = () => {
  const TableRow = (props) => {
    const {
      id,
      source,
      sourceIcon,
      sourceIconColor,
      sourceType,
      category,
      rank,
      trafficShare,
      change,
    } = props;

    return (
      <tr>
        <td>
          <Card.Link href="#" className="text-primary fw-bold">
            {id}
          </Card.Link>
        </td>
        <td className="fw-bold">
          <FontAwesomeIcon
            icon={sourceIcon}
            className={`icon icon-xs text-${sourceIconColor} w-30`}
          />
          {source}
        </td>
        <td>{sourceType}</td>
        <td>{category ? category : "--"}</td>
        <td>{rank ? rank : "--"}</td>
        <td>
          <Row className="d-flex align-items-center">
            <Col xs={12} xl={2} className="px-0">
              <small className="fw-bold">{trafficShare}%</small>
            </Col>
            <Col xs={12} xl={10} className="px-0 px-xl-1">
              <ProgressBar
                variant="primary"
                className="progress-lg mb-0"
                now={trafficShare}
                min={0}
                max={100}
              />
            </Col>
          </Row>
        </td>
        <td>
          <ValueChange value={change} suffix="%" />
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm mb-4">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">#</th>
              <th className="border-0">Traffic Source</th>
              <th className="border-0">Source Type</th>
              <th className="border-0">Category</th>
              <th className="border-0">Global Rank</th>
              <th className="border-0">Traffic Share</th>
              <th className="border-0">Change</th>
            </tr>
          </thead>
          <tbody>
            {pageTraffic.map((pt) => (
              <TableRow key={`page-traffic-${pt.id}`} {...pt} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const RankingTable = () => {
  const TableRow = (props) => {
    const {
      country,
      countryImage,
      overallRank,
      overallRankChange,
      travelRank,
      travelRankChange,
      widgetsRank,
      widgetsRankChange,
    } = props;

    return (
      <tr>
        <td className="border-0">
          <Card.Link href="#" className="d-flex align-items-center">
            <Image
              src={countryImage}
              className="image-small rounded-circle me-2"
            />
            <div>
              <span className="h6">{country}</span>
            </div>
          </Card.Link>
        </td>
        <td className="fw-bold border-0">{overallRank ? overallRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={overallRankChange} />
        </td>
        <td className="fw-bold border-0">{travelRank ? travelRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={travelRankChange} />
        </td>
        <td className="fw-bold border-0">{widgetsRank ? widgetsRank : "-"}</td>
        <td className="border-0">
          <ValueChange value={widgetsRankChange} />
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="pb-0">
        <Table responsive className="table-centered table-nowrap rounded mb-0">
          <thead className="thead-light">
            <tr>
              <th className="border-0">Country</th>
              <th className="border-0">All</th>
              <th className="border-0">All Change</th>
              <th className="border-0">Travel & Local</th>
              <th className="border-0">Travel & Local Change</th>
              <th className="border-0">Widgets</th>
              <th className="border-0">Widgets Change</th>
            </tr>
          </thead>
          <tbody>
            {pageRanking.map((r) => (
              <TableRow key={`ranking-${r.id}`} {...r} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export const TransactionsTable = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/api/orders`).then((res) => {
      setOrders(res.data.orders);
    });
  }, []);
  const TableRow = (props) => {
    const [openModal, setopenModal] = useState(false);
    const [viewOrder, setViewOrder] = useState(null);
    const { nth, id, product, user, quantity, totalPrice, status, created } =
      props;
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
        label: (
          <Button
            onClick={async () => {
              setopenModal(true);
              setViewOrder(props);
            }}
          >
            Xem chi tiết
          </Button>
        ),
      },
    ];
    return (
      <>
        <tr>
          <td>
            <span className="fw-normal">{nth}</span>
          </td>
          <td>
            <span className="fw-normal">{props.fullname}</span>
          </td>
          <td>
            <span className="fw-normal">{props.address}</span>
          </td>
          <td>
            <span className="fw-normal">{props.phone}</span>
          </td>
          <td>
            <span className="fw-normal">{props.totalPrice} VND</span>
          </td>
          <td>
            <span className="fw-normal">{props.created}</span>
          </td>
          <td>
            <span className={`fw-normal text-${statusVariant}`}>{status}</span>
          </td>
          <td>
            <span className={`fw-normal `}>{id.slice(0, 8)}</span>
          </td>
          <td>
            <Dropdown menu={{ items }} placement="bottomLeft">
              <Button type="ghost">
                <MoreOutlined />
              </Button>
            </Dropdown>
          </td>
        </tr>
        <Modal
          open={openModal}
          width={"60%"}
          style={{
            overflowY: "auto",
          }}
          title="Order"
          destroyOnClose
          footer={null}
          onCancel={() => {
            setViewOrder(null);
            setopenModal(false);
          }}
          closable
        >
          <ViewOrder data={viewOrder} />
        </Modal>
      </>
    );
  };
  return (
    <Card border="light" className="table-wrapper table-responsive shadow-sm">
      <Card.Body className="pt-0">
        <Table hover className="user-table align-items-center">
          <thead>
            <tr>
              <th className="border-bottom">#</th>
              <th className="border-bottom">Người mua</th>
              <th className="border-bottom">Địa chỉ</th>
              <th className="border-bottom">SĐT</th>
              <th className="border-bottom">Tổng số tiền</th>
              <th className="border-bottom">Ngày tạo</th>
              <th className="border-bottom">Trạng thái</th>
              <th className="border-bottom">Mã giao dịch</th>
              <th className="border-bottom"></th>
            </tr>
          </thead>
          <tbody>
            {orders.length &&
              orders.map((t, index) => (
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

const ViewOrder = ({ data }) => {
  return (
    <>
      <div style={{ display: "flex", gap: "0 20px" }}>
        <p style={{ width: "200px" }}>ID</p>
        <p>{data?.id}</p>
      </div>
      <div style={{ display: "flex", gap: "0 20px" }}>
        <p style={{ width: "200px" }}>Họ và tên</p>
        <p>{data?.fullname}</p>
      </div>
      <div style={{ display: "flex", gap: "0 20px" }}>
        <p style={{ width: "200px" }}>Email</p>
        <p>{data?.email}</p>
      </div>
      <div style={{ display: "flex", gap: "0 20px" }}>
        <p style={{ width: "200px" }}>Địa chỉ</p>
        <p>{data?.address}</p>
      </div>
      <div style={{ display: "flex", gap: "0 20px" }}>
        <p style={{ width: "200px" }}>Tỉnh</p>
        <p>{data?.province}</p>
      </div>
      <div style={{ display: "flex", gap: "0 20px" }}>
        <p style={{ width: "200px" }}>Huyện</p>
        <p>{data?.district}</p>
      </div>
      <div style={{ display: "flex", gap: "0 20px" }}>
        <p style={{ width: "200px" }}>Xã</p>
        <p>{data?.ward}</p>
      </div>
      <div style={{ display: "flex", gap: "0 20px" }}>
        <p style={{ width: "200px" }}>Tổng tiền</p>
        <p>{data?.totalPrice}</p>
      </div>

      <div style={{ display: "flex", gap: "0 20px" }}>
        <p style={{ width: "200px" }}>Trạng thái</p>
        <p>{data?.status}</p>
      </div>
      <div style={{ display: "flex", gap: "0 20px" }}>
        <p style={{ width: "200px" }}>Ngày tạo</p>
        <p>{data?.created}</p>
      </div>
      {data?.carts.map((item, index) => {
        return (
          <>
            <Divider />
            <div style={{ display: "flex", gap: "0 20px" }}>
              <p style={{ width: "200px" }}>Tên Sản Phẩm</p>
              <p>{item?.product?.title?.trim()}</p>
            </div>
            <div style={{ display: "flex", gap: "0 20px" }}>
              <p style={{ width: "200px" }}>Màu</p>
              <p>{item?.color || "Xanh"}</p>
            </div>
            <div style={{ display: "flex", gap: "0 20px" }}>
              <p style={{ width: "200px" }}>Giá</p>
              <p>{item?.totalPrice}</p>
            </div>
            <div style={{ display: "flex", gap: "0 20px" }}>
              <p style={{ width: "200px" }}>Số lượng</p>
              <p>{item?.quantity}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export const CommandsTable = () => {
  const TableRow = (props) => {
    const { name, usage = [], description, link } = props;

    return (
      <tr>
        <td className="border-0" style={{ width: "5%" }}>
          <code>{name}</code>
        </td>
        <td className="fw-bold border-0" style={{ width: "5%" }}>
          <ul className="ps-0">
            {usage.map((u) => (
              <ol key={u} className="ps-0">
                <code>{u}</code>
              </ol>
            ))}
          </ul>
        </td>
        <td className="border-0" style={{ width: "50%" }}>
          <pre className="m-0 p-0">{description}</pre>
        </td>
        <td className="border-0" style={{ width: "40%" }}>
          <pre>
            <Card.Link href={link} target="_blank">
              Read More{" "}
              <FontAwesomeIcon icon={faExternalLinkAlt} className="ms-1" />
            </Card.Link>
          </pre>
        </td>
      </tr>
    );
  };

  return (
    <Card border="light" className="shadow-sm">
      <Card.Body className="p-0">
        <Table
          responsive
          className="table-centered rounded"
          style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
        >
          <thead className="thead-light">
            <tr>
              <th className="border-0" style={{ width: "5%" }}>
                Name
              </th>
              <th className="border-0" style={{ width: "5%" }}>
                Usage
              </th>
              <th className="border-0" style={{ width: "50%" }}>
                Description
              </th>
              <th className="border-0" style={{ width: "40%" }}>
                Extra
              </th>
            </tr>
          </thead>
          <tbody>
            {commands.map((c, index) => (
              <TableRow key={`command-${c.id}`} {...c} nth={index} />
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};
