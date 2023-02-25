import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, Col, InputGroup, Row } from "@themesberg/react-bootstrap";
import React from "react";

import { Input } from "antd";
import { TransactionsTable } from "../components/Tables";

export default () => {
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
            <Breadcrumb.Item active>Đơn hàng</Breadcrumb.Item>
          </Breadcrumb>
          <h4>Đơn hàng</h4>
        </div>
      </div>
      <div className="table-settings mb-4">
        <Row className="justify-content-between align-items-center">
          <Col xs={8} md={6} lg={3} xl={4}>
            <InputGroup>
              <Input type="text" placeholder="Tìm kiếm đơn hàng" />
            </InputGroup>
          </Col>
        </Row>
      </div>
      <TransactionsTable />
    </>
  );
};
