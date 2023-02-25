import {
  faCashRegister,
  faChartLine,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "@themesberg/react-bootstrap";
import React from "react";

import { PageVisitsTable } from "../../components/Tables";
import {
  BarChartWidget,
  CircleChartWidget,
  CounterWidget,
  ProgressTrackWidget,
  SalesValueWidget,
  SalesValueWidgetPhone,
  TeamMembersWidget,
} from "../../components/Widgets";
import { totalOrders, trafficShares } from "../../data/charts";

export default () => {
  return (
    <>
      <Row className="justify-content-md-center">
        <Col xs={12} className="mb-4 d-none d-sm-block">
          <SalesValueWidget title="Đơn hàng qua các tháng" percentage={10.57} />
        </Col>
        <Col xs={12} className="mb-4 d-sm-none">
          <SalesValueWidgetPhone
            title="Sales Value"
            value="10,567"
            percentage={10.57}
          />
        </Col>
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Tổng khách hàng"
            title="1234"
            percentage={18.2}
            icon={faChartLine}
            iconColor="shape-secondary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Lợi luận"
            title="9999999 VND"
            percentage={28.4}
            icon={faDollarSign}
            iconColor="shape-tertiary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget
            title="Tỷ lệ khách sử dụng thiết bị để truy cập"
            data={trafficShares}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} className="mb-4">
                  <PageVisitsTable />
                </Col>

                <Col xs={12} lg={6} className="mb-4">
                  <TeamMembersWidget />
                </Col>

                <Col xs={12} lg={6} className="mb-4">
                  <ProgressTrackWidget />
                </Col>
              </Row>
            </Col>

            <Col xs={12} xl={4}>
              <Row>
                <Col xs={12} className="mb-4">
                  <BarChartWidget
                    title="Tổng số đơn hàng trong tuần"
                    value={23}
                    percentage={18.2}
                    data={totalOrders}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
