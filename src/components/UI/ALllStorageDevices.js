import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useCartContext } from "./CartContext";

const ALllStorageDevices = ({ allStorageDevices }) => {
  const { addToCart } = useCartContext();
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
                color: "#fff",
                background: "black",
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
              <h1
                style={{
                  margin: "10px 0",
                  fontFamily: "cursive",
                  color: "#fff",
                }}
              >
                {storageDevices?.name}
              </h1>
              <div
                className="line"
                style={{
                  height: "2px",
                  margin: "20px 0",
                  width: "100%",
                  background: "white",
                }}
              ></div>
              <p
                style={{
                  display: "flex",
                  margin: "10px 0",
                  width: "100%",
                  fontFamily: "cursive",
                  color: "#fff",
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
                  color: "#fff",
                  marginTop: "20px",
                  textAlign: "justify",
                }}
              >
                {storageDevices?.description.length > 100
                  ? storageDevices?.description.slice(0, 70) + "..."
                  : storageDevices?.description}
              </p>
              <Button
                onClick={() => {
                  addToCart(storageDevices);
                }}
                style={{
                  fontSize: "15px",
                  marginTop: "20px",
                  width: "100%",
                  justifyItems: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bold",
                  padding: "2px 5px",
                  letterSpacing: "3px",
                  textAlign: "center",
                  fontWeight: "300",
                  borderRadius: "100px",
                }}
              >
                Add to Cart
              </Button>

              <h2
                style={{
                  fontSize: "15px",
                  marginTop: "20px",
                  width: "100%",
                  justifyItems: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  color: "black",
                  fontWeight: "bold",
                  padding: "2px 5px",
                  letterSpacing: "3px",
                  textAlign: "center",
                  fontWeight: "300",
                  borderRadius: "100px",
                }}
              >
                <Link href={`/storageDevice/${storageDevices?.id}`}>
                  Details
                </Link>
              </h2>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default ALllStorageDevices;
