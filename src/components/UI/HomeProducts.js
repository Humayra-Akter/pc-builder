import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const HomeProducts = ({ allProcessors }) => {
  const { Meta } = Card;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          marginTop: " 100px",
          color: "white",
          marginBottom: "40px",
        }}
      >
        OUR PRODUCTS
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allProcessors?.map((processors) => {
          <Col key={processors.id} className="gutter-row" span={8}>
            <Card
              style={{
                fontFamily: "cursive",
                color: "#fff",
                background: "black",
              }}
              hoverable
              cover={
                <Image
                  src={processors?.image}
                  width={300}
                  height={150}
                  responsive
                  alt="processors image"
                />
              }
            >
              <p
                style={{
                  fontFamily: "cursive",
                  color: "yellow",
                }}
              >
                {processors?.name}
              </p>
              <p
                style={{
                  margin: "10px 0",
                  width: "100%",
                  color: "white",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  <CalendarOutlined /> {processors?.category}
                </span>
              </p>
              <p
                style={{
                  fontFamily: "cursive",
                  color: "#fff",
                }}
              >
                {processors?.price}
              </p>
              <p
                style={{
                  fontFamily: "cursive",
                  color: "#fff",
                }}
              >
                {processors?.status}
              </p>
              <p
                style={{
                  fontFamily: "cursive",
                  color: "#fff",
                }}
              >
                {processors?.rating}
              </p>
              <Link href="/pcbuilder">
                <p
                  style={{
                    margin: "10px 0",
                    width: "100%",
                    color: "white",
                    justifyContent: "space-between",
                  }}
                >
                  <span>
                    <ProfileOutlined />
                    know more...
                  </span>
                </p>
              </Link>
            </Card>
          </Col>;
        })}
      </Row>
    </>
  );
};

export default HomeProducts;
