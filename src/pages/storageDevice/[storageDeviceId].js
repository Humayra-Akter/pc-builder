import RootLayout from "../../../components/Layouts/RootLayout";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

const StorageDeviceDetails = ({ storageDevices }) => {
  const router = useRouter();

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
        {storageDevices?.name}
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
              src={storageDevices?.image}
              width={500}
              height={300}
              responsive
              alt="motherboard image"
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <h1>{storageDevices?.name}</h1>
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
                <CalendarOutlined /> {storageDevices?.status}
              </span>
              <span>
                <CommentOutlined /> {storageDevices?.price}
              </span>
              <span>
                <ProfileOutlined /> {storageDevices?.category}
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
              {storageDevices?.description}
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
              <small style={{ color: "yellow" }}> Brand : </small>
              {storageDevices?.key_features.brand}
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
              <small style={{ color: "yellow" }}> Model : </small>
              {storageDevices?.key_features.model}
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
              <small style={{ color: "yellow" }}>Specification : </small>
              {storageDevices?.key_features.specification}
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
              <small style={{ color: "yellow" }}>Interface : </small>
              {storageDevices?.key_features.interface}
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
              <small style={{ color: "yellow" }}>Storage type : </small>
              {storageDevices?.key_features.storage_type}
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
              {storageDevices?.key_features.form_factor}
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
              <small style={{ color: "yellow" }}> Cache : </small>
              {storageDevices?.key_features.cache}
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
              <small style={{ color: "yellow" }}>Capacity : </small>
              {storageDevices?.key_features.capacity}
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
              {storageDevices?.reviews.map((review, index) => (
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
                {storageDevices?.rating}
              </small>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default StorageDeviceDetails;

StorageDeviceDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-sage-pi.vercel.app/api/storageDevices/${params.storageDeviceId}`
  );
  const data = await res.json();

  return {
    props: {
      storageDevices: data.data,
    },
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-sage-pi.vercel.app/api/storageDevices"
  );
  const storageDevices = await res.json();

  const paths = storageDevices.data.map((storageDevice) => ({
    params: { storageDeviceId: storageDevice.id.toString() },
  }));

  return { paths, fallback: false };
};
