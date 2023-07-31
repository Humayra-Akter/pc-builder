import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const AllPowerSupplyUnit = ({ allPowerSupplyUnits }) => {
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
        power supply units
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allPowerSupplyUnits?.map((powerSupplyUnits) => (
          <Col key={powerSupplyUnits.id} className="gutter-row" span={8}>
            <Card
              style={{
                margin: "30px 0",
                fontFamily: "cursive",
              }}
              hoverable
              cover={
                <Image
                  src={powerSupplyUnits?.image}
                  width={500}
                  height={200}
                  responsive
                  alt="powerSupplyUnits image"
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
                title={powerSupplyUnits?.name}
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
                  <CalendarOutlined /> {powerSupplyUnits?.category}
                </span>
                <span>
                  <CommentOutlined /> {powerSupplyUnits?.status}
                </span>
                <span>
                  <ProfileOutlined /> {powerSupplyUnits?.price}
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
                {powerSupplyUnits?.description.length > 100
                  ? powerSupplyUnits?.description.slice(0, 70) + "..."
                  : powerSupplyUnits?.description}
              </p>
              <Link href={`/powerSupplyUnit/${powerSupplyUnits?.id}`}>
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

export default AllPowerSupplyUnit;
