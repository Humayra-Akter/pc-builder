import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const AllRams = ({ allRams }) => {
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
        rams
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allRams?.map((rams) => (
          <Col key={rams.id} className="gutter-row" span={8}>
            <Card
              style={{
                margin: "30px 0",
                fontFamily: "cursive",
                color: "#fff",
                background: "black",
              }}
              hoverable
              cover={
                <Image
                  src={rams?.image}
                  width={500}
                  height={200}
                  responsive
                  alt="rams image"
                />
              }
            >
              <h1
                style={{
                  margin: "10px 0",
                  fontFamily: "cursive",
                  color: "#fff",
                }}
              >
                {rams?.name}
              </h1>
              <div
                className="line"
                style={{
                  height: "2px",
                  margin: "20px 0",
                  width: "100%",
                  background: "white",
                }}
              ></div>
              <p
                style={{
                  display: "flex",
                  margin: "10px 0",
                  width: "100%",
                  fontFamily: "cursive",
                  color: "#fff",
                  fontWeight: "black",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  <CalendarOutlined /> {rams?.category}
                </span>
                <span>
                  <CommentOutlined /> {rams?.status}
                </span>
                <span>
                  <ProfileOutlined /> {rams?.price}
                </span>
              </p>

              <p
                style={{
                  fontSize: "15px",
                  fontFamily: "cursive",
                  color: "#fff",
                  marginTop: "20px",
                  textAlign: "justify",
                }}
              >
                {rams?.description.length > 100
                  ? rams?.description.slice(0, 70) + "..."
                  : rams?.description}
              </p>
              <Link href={`/ram/${rams?.id}`}>
                <h2
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    width: "100%",
                    justifyItems: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    color: "black",
                    fontWeight: "bold",
                    padding: "2px 5px",
                    letterSpacing: "3px",
                    textAlign: "center",
                    fontWeight: "300",
                    borderRadius: "100px",
                  }}
                >
                  details
                </h2>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default AllRams;
