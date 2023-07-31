import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const AllProcessors = ({ allProcessors }) => {
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
        processors
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allProcessors?.map((processors) => (
          <Col key={processors.id} className="gutter-row" span={8}>
            <Card
              style={{
                margin: "30px 0",
                fontFamily: "cursive",
              }}
              hoverable
              cover={
                <Image
                  src={processors?.image}
                  width={500}
                  height={200}
                  responsive
                  alt="processors image"
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
                title={processors?.name}
              />
              <div
                className="line"
                style={{
                  height: "5px",
                  margin: "20px 0",
                  width: "100%",
                  background: "darkBlue",
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
                  <CalendarOutlined /> {processors?.category}
                </span>
                <span>
                  <CommentOutlined /> {processors?.status}
                </span>
                <span>
                  <ProfileOutlined /> {processors?.price}
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
                {processors?.description.length > 100
                  ? processors?.description.slice(0, 70) + "..."
                  : processors?.description}
              </p>
              <Link href={`/processor/${processors?.id}`}>
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
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllProcessors;
