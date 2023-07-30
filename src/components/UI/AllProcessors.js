import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
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
        #TODAY HIGHLIGHT
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
                  <CalendarOutlined /> {processors?.category}
                </span>
                <span>
                  <CommentOutlined /> {processors?.status} COMMENTS
                </span>
                <span>
                  <ProfileOutlined /> {processors?.price}
                </span>
              </p>

              {/* <p
                style={{
                  fontSize: "15px",
                }}
              >
                {processors?.description.length > 100
                  ? processors?.description.slice(0, 70) + "..."
                  : processors?.description}
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
              </Link> */}
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllProcessors;
