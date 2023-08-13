import { Button, Card, Col, Row } from "antd";
import Image from "next/image";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { useCartContext } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllMotherboards = ({ allMotherboards }) => {
  const { cart, addToCart, incrementQuantity } = useCartContext();
  const { Meta } = Card;
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
        motherboards
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {allMotherboards?.map((motherboards) => (
          <Col key={motherboards.id} className="gutter-row" span={8}>
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
                  src={motherboards?.image}
                  width={500}
                  height={200}
                  responsive
                  alt="motherboards image"
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
                {motherboards?.name}
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
                  <CalendarOutlined /> {motherboards?.category}
                </span>
                <span>
                  <CommentOutlined /> {motherboards?.status}
                </span>
                <span>
                  <ProfileOutlined /> {motherboards?.price}
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
                {motherboards?.description.length > 100
                  ? motherboards?.description.slice(0, 70) + "..."
                  : motherboards?.description}
              </p>
              <Button
                disabled={cart.some((item) => item.id === motherboards.id)}
                onClick={() => {
                  addToCart(motherboards);
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
                {cart.some((item) => item.id === motherboards.id)
                  ? "Added to Cart"
                  : "Add to Cart"}
              </Button>
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
                <Link href={`/motherboard/${motherboards?.id}`}>Details</Link>
              </Button>
            </Card>
          </Col>
        ))}
      </Row>{" "}
      <ToastContainer />
    </>
  );
};

export default AllMotherboards;
