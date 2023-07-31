import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const AllMotherboards = ({ allMotherboards }) => {
  const { Meta } = Card;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: " 30px 0px",
        }}
      >
        motherboards
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allMotherboards?.map((motherboards) => (
          <Col key={motherboards.id} className="gutter-row" span={8}>
            <Card
              style={{
                margin: "30px 0",
                fontFamily: "cursive",
              }}
              hoverable
              cover={
                <Image
                  src={motherboards?.image}
                  width={500}
                  height={200}
                  responsive
                  alt="motherboards image"
                />
              }
            >
              <Meta
                style={{
                  margin: "10px 0",
                  fontFamily: "cursive",
                  color: "darkBlue",
                  fontWeight: "black",
                }}
                title={motherboards?.name}
              />
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
                  fontFamily: "cursive",
                  color: "darkBlue",
                  fontWeight: "black",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  <CalendarOutlined /> {motherboards?.category}
                </span>
                <span>
                  <CommentOutlined /> {motherboards?.status}
                </span>
                <span>
                  <ProfileOutlined /> {motherboards?.price}
                </span>
              </p>

              <p
                style={{
                  fontSize: "15px",
                  fontFamily: "cursive",
                  marginTop: "20px",
                  textAlign: "justify",
                }}
              >
                {motherboards?.description.length > 100
                  ? motherboards?.description.slice(0, 70) + "..."
                  : motherboards?.description}
              </p>

              <Link href={`/motherboard/${motherboards?.id}`}>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    width: "100%",
                    justifyItems: "center",
                    alignItems: "center",
                    backgroundColor: "darkBlue",
                    color: "white",
                    padding: "2px 5px",
                    letterSpacing: "3px",
                    textAlign: "center",
                    fontWeight: "300",
                    borderRadius: "100px",
                  }}
                >
                  details
                  <ArrowRightOutlined />
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllMotherboards;
