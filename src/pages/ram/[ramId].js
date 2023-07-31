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
          <div>
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
                color: "darkBlue",
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
                height: "5px",
                margin: "20px 0",
                width: "100%",
                background: "darkBlue",
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
              {rams?.description}
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
  const res = await fetch("http://localhost:5000/rams");
  const rams = await res.json();

  const paths = rams.map((ram) => ({
    params: { ramId: ram.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/rams/${params.ramId}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      rams: data,
    },
  };
};
