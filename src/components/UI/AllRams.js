import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import {
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useCartContext } from "./CartContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

const AllRams = ({ allRams }) => {
  const { cart, addToCart, incrementQuantity } = useCartContext();
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
          fontFamily: "cursive",
          background: "black",
          color: "white",
          fontWeight: "800",
          marginBottom: "30px",
        }}
      >
        rams
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allRams?.map((rams) => (
          <Col
            // data-aos="zoom-in-down"
            key={rams.id}
            className="gutter-row"
            span={8}
          >
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
                  src={rams?.image}
                  width={500}
                  height={200}
                  responsive
                  alt="rams image"
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
                {rams?.name}
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
                  color: "yellow",
                  fontWeight: "black",
                  justifyContent: "space-between",
                }}
              >
                <span>
                  <CalendarOutlined /> {rams?.category}
                </span>
                <span>
                  <CommentOutlined /> {rams?.status}
                </span>
                <span>
                  <ProfileOutlined /> {rams?.price}
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
                {rams?.description.length > 100
                  ? rams?.description.slice(0, 70) + "..."
                  : rams?.description}
              </p>
              <Button
                disabled={cart.some((item) => item.id === rams.id)}
                onClick={() => {
                  addToCart(rams);
                  toast.success("Added to cart!", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                  });
                }}
                style={{
                  fontSize: "15px",
                  marginTop: "20px",
                  width: "100%",
                  justifyItems: "center",
                  alignItems: "center",
                  backgroundColor: "yellow",
                  color: "black",
                  padding: "2px 5px",
                  letterSpacing: "3px",
                  textAlign: "center",
                  fontWeight: "800",
                  borderRadius: "100px",
                }}
              >
                {cart.some((item) => item.id === rams.id)
                  ? "Added to Cart"
                  : "Add to Cart"}
              </Button>
              <Link href={`/ram/${rams?.id}`}>
                <Button
                  style={{
                    fontSize: "15px",
                    marginTop: "10px",
                    width: "100%",
                    justifyItems: "center",
                    alignItems: "center",
                    backgroundColor: "white",
                    color: "black",
                    padding: "2px 5px",
                    letterSpacing: "3px",
                    textAlign: "center",
                    fontWeight: "800",
                    borderRadius: "100px",
                  }}
                >
                  Details
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>{" "}
      <ToastContainer />
    </>
  );
};

export default AllRams;
