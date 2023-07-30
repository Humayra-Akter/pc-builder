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
        margin: "200px 0",
        width: "100%",
      }}
    >
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
              width={500}
              height={300}
              responsive
              alt="processors image"
            />
          </div>
        </Col>
        <Col className="gutter-row" span={12}>
          <div>
            <h1>{processors?.name}</h1>
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
                <CalendarOutlined /> {processors?.status}
              </span>
              <span>
                <CommentOutlined /> {processors?.price} COMMENTS
              </span>
              <span>
                <ProfileOutlined /> {processors?.category}
              </span>
            </p>

            <p
              style={{
                fontSize: "20px",
              }}
            >
              {processors?.rating}
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

export const getServerSideProps = async (context) => {
  const { params } = context;
  const res = await fetch(
    `http://localhost:5000/processors/${params.processorsId}`
  );

  const data = await res.json();
  console.log(data);
  return {
    props: {
      news: data,
    },
  };
};
