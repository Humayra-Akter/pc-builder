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
          color: "#fff",
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
          <div>
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
                color: "white",
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
                fontSize: "23px",
                fontFamily: "cursive",
                marginTop: "60px",
                textAlign: "justify",
                color: "white",
              }}
            >
              {storageDevices?.description}
            </p>
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

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/storageDevices");
  const storageDevices = await res.json();

  const paths = storageDevices.map((storageDevice) => ({
    params: { storageDeviceId: storageDevice.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/storageDevices/${params.storageDeviceId}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      storageDevices: data,
    },
  };
};
