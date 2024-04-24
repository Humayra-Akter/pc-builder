import { Card, Col, Row } from "antd";
import Image from "next/image";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HomeProducts = ({ allProcessors }) => {
  const { Meta } = Card;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          marginTop: " 100px",
          color: "white",
          marginBottom: "40px",
        }}
      >
        OUR PRODUCTS
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allProcessors?.map((processors) => (
          <div
            // data-aos="zoom-in-down"
            style={{
              display: "flex",
              gap: "30px",
              border: "2px solid white",
              margin: "25px",
              padding: "10px",
            }}
            key={processors.id}
          >
            <div
              style={{
                fontFamily: "cursive",
                color: "white",
                background: "black",
                margin: "auto auto",
              }}
              hoverable
            >
              <Image
                src={processors?.image}
                width={120}
                height={120}
                responsive
                alt="processors image"
              />
            </div>
            <div>
              <h1
                style={{
                  fontFamily: "cursive",
                  color: "yellow",
                }}
              >
                {processors?.name}
              </h1>
              <p
                style={{
                  margin: "10px 0",
                  width: "100%",
                  color: "white",
                  fontWeight: "700",
                  justifyContent: "space-between",
                }}
              >
                <span>{processors?.category}</span>
              </p>
              <p
                style={{
                  fontFamily: "cursive",
                  color: "#fff",
                }}
              >
                <ProfileOutlined />
                {processors?.price}
              </p>
              <p
                style={{
                  fontFamily: "cursive",
                  color: "#fff",
                }}
              >
                {" "}
                <CalendarOutlined />
                {processors?.status}
              </p>
              <p
                style={{
                  fontFamily: "cursive",
                  color: "#fff",
                }}
              >
                <CommentOutlined />
                {processors?.rating}
              </p>
              <Link href="/pcbuilder">
                <p
                  style={{
                    margin: "10px 0",
                    width: "100%",
                    color: "white",
                    justifyContent: "space-between",
                  }}
                >
                  <span>know more...</span>
                </p>
              </Link>
            </div>
          </div>
        ))}
      </Row>
    </>
  );
};

export default HomeProducts;
