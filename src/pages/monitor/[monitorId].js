import RootLayout from "../../../components/Layouts/RootLayout";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";

const MonitorDetails = ({ monitors }) => {
  return (
    <div
      style={{
        margin: "50px 0",
        width: "100%",
        padding: "100px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          marginBottom: " 50px",
          color: "darkBlue",
          fontFamily: "cursive",
        }}
      >
        {monitors?.name}
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
              src={monitors?.image}
              width={500}
              height={300}
              responsive
              alt="motherboard image"
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <h1>{monitors?.name}</h1>

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
                <CalendarOutlined /> {monitors?.status}
              </span>
              <span>
                <CommentOutlined /> {monitors?.price}
              </span>
              <span>
                <ProfileOutlined /> {monitors?.category}
              </span>
            </p>
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
                fontSize: "25px",
                fontFamily: "cursive",
                marginTop: "60px",
                textAlign: "justify",
                color: "black",
              }}
            >
              {monitors?.description}
            </p>
            <p
              style={{
                fontSize: "16px",
                fontFamily: "cursive",
                marginTop: "60px",
                textAlign: "justify",
                color: "black",
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
                {monitors?.rating}
              </small>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default MonitorDetails;

MonitorDetails.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/monitors");
  const monitors = await res.json();

  const paths = monitors.map((monitor) => ({
    params: { monitorId: monitor.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/monitors/${params.monitorId}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      monitors: data,
    },
  };
};
