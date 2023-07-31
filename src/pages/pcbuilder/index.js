import React from "react";
import { Card, Col, Row } from "antd";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
const { Meta } = Card;

const PcBuilderPage = ({ allProcessors }) => {
  <>
    <h1
      style={{
        textAlign: "center",
        fontSize: "50px",
        margin: " 30px 0px",
      }}
    >
      #TODAY HIGHLIGHT
    </h1>
    {/* <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allProcessors?.map((processors) => (
          <Col key={processors.id} className="gutter-row" span={6}>
            <Card
              hoverable
              cover={
                <Image
                  src={processors?.image}
                  width={500}
                  height={200}
                  responsive
                  alt="news image"
                />
              }
            >
              <Meta title={processors?.name} />
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",
                  width: "100%",
                  background: "#000",
                }}
              ></div>
              <p
                style={{
                  display: "flex",
                  margin: "10px 0",
                  width: "100%",
                  color: "gray",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  <CalendarOutlined /> {processors?.name}
                </span>
                <span>
                  <CommentOutlined /> {processors?.price} COMMENTS
                </span>
                <span>
                  <ProfileOutlined /> {processors?.status}
                </span>
              </p>
              <Link href={`/processors/${processors?.id}`}>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    width: "100%",
                    backgroundColor: "black",
                    color: "white",
                    padding: "2px 5px",
                    letterSpacing: "3px",
                    textAlign: "center",
                    fontWeight: "300",
                  }}
                >
                  Keep reading <ArrowRightOutlined />
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row> */}
    <Row gutter={16}>
      <Col span={8}>
        {allProcessors?.map((processors) => {
          <Card
            hoverable
            style={{
              width: 240,
            }}
            cover={<img alt="example" src={processors.image} />}
          >
            <Meta title="Europe Street beat" description="www.instagram.com" />
          </Card>;
        })}
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
    ;
    <Card
      hoverable
      style={{
        width: 240,
      }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  </>;
};
export default PcBuilderPage;
PcBuilderPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
