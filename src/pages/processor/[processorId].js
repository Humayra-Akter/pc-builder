import RootLayout from "../../../components/Layouts/RootLayout";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import { Col, Row } from "antd";
import Image from "next/image";
import { useRouter } from "next/router";

const ProcessorDetail = ({ processors }) => {
  // const router = useRouter();

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
        {processors?.name || null}
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
              src={processors?.image || null}
              width={600}
              height={400}
              responsive
              alt="processor image"
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <h1>{processors?.name || null}</h1>
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
                <CommentOutlined /> {processors?.price || null}
              </span>
              <span>
                <CalendarOutlined />
                {processors?.status || null}
              </span>
              <span>
                <ProfileOutlined /> {processors?.category || null}
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
              {processors?.description || null}
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
              {processors?.keyFeatures.Brand || null}
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
              <small style={{ color: "yellow" }}> Model : </small>
              {processors?.keyFeatures.Model || null}
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
              <small style={{ color: "yellow" }}> Cores : </small>
              {processors?.keyFeatures.Cores || null}
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
              <small style={{ color: "yellow" }}>Socket : </small>
              {processors?.keyFeatures.Socket || null}
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
              <small style={{ color: "yellow" }}> TDP : </small>
              {processors?.keyFeatures.TDP || null}
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
              {processors?.reviews.map((review, index) => (
                <div key={index}>
                  <h3>User: {review.user}</h3>
                  <p>Rating: {review.rating}</p>
                  <p>Comment: {review.comment}</p>
                </div>
              )) || null}
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



export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `https://pc-builder-sage-pi.vercel.app/api/processors/${params.processorId}`
  );
  const data = await res.json();

  return {
    props: {
      processors: data.data,
    },
  };
};
export const getStaticPaths = async () => {
  const res = await fetch(
    "https://pc-builder-sage-pi.vercel.app/api/processors"
  );
  const processors = await res.json();

  const paths = processors.data.map((processor) => ({
    params: { processorId: processor.id.toString() },
  }));

  return { paths, fallback: false };
};