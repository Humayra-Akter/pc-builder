import RootLayout from "../../../components/Layouts/RootLayout";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";

const ProcessorDetail = ({ processors }) => {
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
        {processors?.name}
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
              src={processors?.image}
              width={600}
              height={400}
              responsive
              alt="processor image"
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <h1>{processors?.name}</h1>

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
                <CommentOutlined /> {processors?.price}
              </span>
              <span>
                <CalendarOutlined />
                {processors?.status}
              </span>
              <span>
                <ProfileOutlined /> {processors?.category}
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
              {processors?.description}
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
                {processors?.rating}
              </small>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProcessorDetail;

ProcessorDetail.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/processors");
  const processors = await res.json();

  const paths = processors.map((processor) => ({
    params: { processorId: processor.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/processors/${params.processorId}`
  );
  const data = await res.json();
  console.log(data);
  return {
    props: {
      processors: data,
    },
  };
};
