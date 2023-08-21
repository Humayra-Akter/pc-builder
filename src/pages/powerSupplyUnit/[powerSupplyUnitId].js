import RootLayout from "../../../components/Layouts/RootLayout";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";

const PowerSupplyUnitDetail = ({ powerSupplyUnits }) => {
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
        {powerSupplyUnits?.name}
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
              src={powerSupplyUnits?.image}
              width={500}
              height={300}
              responsive
              alt="powerSupplyUnits image"
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <h1>{powerSupplyUnits?.name}</h1>
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
                <CalendarOutlined /> {powerSupplyUnits?.status}
              </span>
              <span>
                <CommentOutlined /> {powerSupplyUnits?.price}
              </span>
              <span>
                <ProfileOutlined /> {powerSupplyUnits?.category}
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
              {powerSupplyUnits?.description}
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
              {powerSupplyUnits?.key_features.brand}
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
              {powerSupplyUnits?.key_features.model}
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
              <small style={{ color: "yellow" }}> Specification : </small>
              {powerSupplyUnits?.key_features.specification}
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
              <small style={{ color: "yellow" }}> Wattage : </small>
              {powerSupplyUnits?.key_features.wattage}
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
              <small style={{ color: "yellow" }}> Modular : </small>
              {powerSupplyUnits?.key_features.modular}
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
              <small style={{ color: "yellow" }}> Fan : </small>
              {powerSupplyUnits?.key_features.fan}
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
              <small style={{ color: "yellow" }}> Efficiency : </small>
              {powerSupplyUnits?.key_features.efficiency}
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
              <small style={{ color: "yellow" }}> Certification : </small>
              {powerSupplyUnits?.key_features.certification}
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
              {powerSupplyUnits?.reviews.map((review, index) => (
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
                {powerSupplyUnits?.rating}
              </small>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PowerSupplyUnitDetail;

PowerSupplyUnitDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};


export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-sage-pi.vercel.app/api/powerSupplyUnits/${params.powerSupplyUnitId}`
  );
  const data = await res.json();

  return {
    props: {
      powerSupplyUnits: data.data,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-sage-pi.vercel.app/api/powerSupplyUnits"
  );
  const powerSupplyUnits = await res.json();

  const paths = powerSupplyUnits.data.map((powerSupplyUnit) => ({
    params: { powerSupplyUnitId: powerSupplyUnit.id.toString() },
  }));

  return { paths, fallback: false };
};