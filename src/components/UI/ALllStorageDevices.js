import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const ALllStorageDevices = ({ allStorageDevices }) => {
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
        Storage Devices
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allStorageDevices?.map((storageDevices) => (
          <Col key={storageDevices.id} className="gutter-row" span={8}>
            <Card
              style={{
                margin: "30px 0",
                fontFamily: "cursive",
              }}
              hoverable
              cover={
                <Image
                  src={storageDevices?.image}
                  width={500}
                  height={200}
                  responsive
                  alt="storageDevices image"
                />
              }
            >
              <Meta
                style={{
                  margin: "10px 0",
                  fontFamily: "cursive",
                  color: "darkBlue",
                  fontWeight: "black",
                }}
                title={storageDevices?.name}
              />
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
                  <CalendarOutlined /> {storageDevices?.category}
                </span>
                <span>
                  <CommentOutlined /> {storageDevices?.status}
                </span>
                <span>
                  <ProfileOutlined /> {storageDevices?.price}
                </span>
              </p>

              <p
                style={{
                  fontSize: "15px",
                  fontFamily: "cursive",
                  marginTop: "20px",
                  textAlign: "justify",
                }}
              >
                {storageDevices?.description.length > 100
                  ? storageDevices?.description.slice(0, 70) + "..."
                  : storageDevices?.description}
              </p>
              <Link href={`/storageDevice/${storageDevices?.id}`}>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    width: "100%",
                    justifyItems: "center",
                    alignItems: "center",
                    backgroundColor: "darkBlue",
                    color: "white",
                    padding: "2px 5px",
                    letterSpacing: "3px",
                    textAlign: "center",
                    fontWeight: "300",
                    borderRadius: "100px",
                  }}
                >
                  details
                </p>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ALllStorageDevices;
