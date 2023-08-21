import RootLayout from "../../../components/Layouts/RootLayout";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";

const RamDetails = ({ rams }) => {
  return (
    <div
      style={{
        margin: "50px 0",
        width: "100%",
        padding: "100px",
        background: "black",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          marginBottom: " 50px",
          color: "yellow",
          fontFamily: "cursive",
        }}
      >
        {rams?.name}
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={12}>
          <div
            style={{
              marginTop: "120px",
            }}
          >
            <Image
              src={rams?.image}
              width={600}
              height={400}
              responsive
              alt="rams image"
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <h1>{rams?.name}</h1>
            <p
              style={{
                display: "flex",
                margin: "10px 0",
                width: "100%",
                fontFamily: "cursive",
                color: "yellow",
                fontWeight: "black",
                justifyContent: "space-between",
              }}
            >
              <span>
                <CommentOutlined /> {rams?.price}
              </span>
              <span>
                <CalendarOutlined />
                {rams?.status}
              </span>
              <span>
                <ProfileOutlined /> {rams?.category}
              </span>
            </p>
            <div
              className="line"
              style={{
                height: "3px",
                margin: "20px 0",
                width: "100%",
                background: "#fff",
              }}
            ></div>
            <p
              style={{
                fontSize: "17px",
                fontFamily: "cursive",
                marginTop: "60px",
                marginBottom: "60px",
                textAlign: "justify",
                color: "white",
              }}
            >
              {rams?.description}
            </p>{" "}
            <p
              style={{
                display: "flex",
                margin: "10px 0",
                width: "100%",
                fontFamily: "cursive",
                color: "white",
                fontWeight: "black",
                justifyContent: "space-between",
              }}
            >
              <small style={{ color: "yellow" }}> Brand : </small>{" "}
              {rams?.key_features.brand}
            </p>
            <p
              style={{
                display: "flex",
                margin: "10px 0",
                width: "100%",
                fontFamily: "cursive",
                color: "white",
                fontWeight: "black",
                justifyContent: "space-between",
              }}
            >
              {" "}
              <small style={{ color: "yellow" }}>Model : </small>
              {rams?.key_features.model}
            </p>
            <p
              style={{
                display: "flex",
                margin: "10px 0",
                width: "100%",
                fontFamily: "cursive",
                color: "white",
                fontWeight: "black",
                justifyContent: "space-between",
              }}
            >
              <small style={{ color: "yellow" }}> Specification : </small>
              {rams?.key_features.specification}
            </p>
            <p
              style={{
                display: "flex",
                margin: "10px 0",
                width: "100%",
                fontFamily: "cursive",
                color: "white",
                fontWeight: "black",
                justifyContent: "space-between",
              }}
            >
              {" "}
              <small style={{ color: "yellow" }}> Speed : </small>
              {rams?.key_features.speed}
            </p>{" "}
            <p
              style={{
                display: "flex",
                margin: "10px 0",
                width: "100%",
                fontFamily: "cursive",
                color: "white",
                fontWeight: "black",
                justifyContent: "space-between",
              }}
            >
              {" "}
              <small style={{ color: "yellow" }}> Cas latency : </small>
              {rams?.key_features.cas_latency}
            </p>
            <p
              style={{
                display: "flex",
                margin: "10px 0",
                width: "100%",
                fontFamily: "cursive",
                color: "white",
                fontWeight: "black",
                justifyContent: "space-between",
              }}
            >
              {" "}
              <small style={{ color: "yellow" }}>Form factor : </small>
              {rams?.key_features.form_factor}
            </p>{" "}
            <p
              style={{
                display: "flex",
                margin: "10px 0",
                width: "100%",
                fontFamily: "cursive",
                color: "white",
                fontWeight: "black",
                justifyContent: "space-between",
              }}
            >
              {" "}
              <small style={{ color: "yellow" }}> Compatibility : </small>
              {rams?.key_features.compatibility}
            </p>
            <p
              style={{
                display: "flex",
                margin: "10px 0",
                width: "100%",
                fontFamily: "cursive",
                color: "white",
                fontWeight: "black",
                justifyContent: "space-between",
              }}
            >
              {" "}
              <small style={{ color: "yellow" }}> Capacity : </small>
              {rams?.key_features.capacity}
            </p>
            <div
              className="line"
              style={{
                // height: "1px",
                margin: "20px 0",
                width: "50% auto",
                borderTop: "1px dotted #fff",
              }}
            ></div>
            <div>
              <h3 style={{ color: "yellow" }}>Reviews:</h3>
              {rams?.reviews.map((review, index) => (
                <div key={index}>
                  <h3>User: {review.user}</h3>
                  <p>Rating: {review.rating}</p>
                  <p>Comment: {review.comment}</p>
                </div>
              ))}
            </div>
            <p
              style={{
                fontSize: "16px",
                fontFamily: "cursive",
                marginTop: "60px",
                textAlign: "justify",
                color: "white",
                fontWeight: "bolder",
              }}
            >
              Rating :
              <small
                style={{
                  fontSize: "20px",
                  fontFamily: "cursive",
                  font: "bold",
                  marginTop: "60px",
                  textAlign: "justify",
                  color: "red",
                }}
              >
                {rams?.rating}
              </small>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RamDetails;

RamDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/rams");
  const rams = await res.json();

  const paths = rams.data.map((ram) => ({
    params: { ramId: ram.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:3000/api/rams/${params.ramId}`
  );
  const data = await res.json();

  return {
    props: {
      rams: data.data,
    },
  };
};
