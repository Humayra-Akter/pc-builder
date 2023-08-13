import { Button, Card, Col, Image, Row, Space, Typography } from "antd";
import RootLayout from "../../../components/Layouts/RootLayout";
import { useCartContext } from "./CartContext";
import {
  ShoppingCartOutlined,
  PlusOutlined,
  MinusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    selectedCategories,
  } = useCartContext();

  const calculateComponentTotal = (component) => {
    return component.price * component.quantity;
  };

  const calculateOverallTotal = () => {
    const categoryTotals = {};
    let overallTotal = 0;

    cart.forEach((component) => {
      const componentTotal = calculateComponentTotal(component);
      overallTotal += componentTotal;

      if (categoryTotals[component.category]) {
        categoryTotals[component.category] += componentTotal;
      } else {
        categoryTotals[component.category] = componentTotal;
      }
    });

    return { overallTotal, categoryTotals };
  };

  const isPlaceOrderEnabled =
    selectedCategories.length === 6 &&
    selectedCategories.every((category) =>
      cart.some((component) => component.category === category)
    );

  const { Meta } = Card;
  const { overallTotal, categoryTotals } = calculateOverallTotal();

  const sumOfCategoryTotals = Object.values(categoryTotals).reduce(
    (acc, total) => acc + total,
    0
  );

  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: " 30px 0px",
        }}
      >
        Selected Components
      </h1>
      {/* <h1
        style={{
          textAlign: "left",
          fontSize: "20px",
          fontFamily: "cursive",
          color: "#000",
        }}
      >
        Your selected categories
      </h1> */}
      {selectedCategories.length == 0 ? (
        ""
      ) : (
        <div>
          <h1
            style={{
              textAlign: "left",
              fontSize: "20px",
              fontFamily: "cursive",
              color: "#000",
            }}
          >
            Your selected categories
          </h1>
          <hr
            style={{
              border: "none",
              borderTop: "3px double #000",
              margin: " 10px 0",
              width: "20%",
            }}
          />
        </div>
      )}

      {selectedCategories.map((category) => (
        <p
          style={{
            textAlign: "left",
            fontSize: "15px",
          }}
          key={category}
        >
          {category}
        </p>
      ))}
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {cart.map((component) => (
          <Col key={component.id} className="gutter-row" span={6}>
            <Card
              style={{
                margin: "30px 0",
                fontFamily: "cursive",
                color: "#fff",
                background: "black",
              }}
              hoverable
            >
              <div className="border-r pr-5 shrink-0">
                <Image src={component?.image} alt="" width={235} height={150} />
              </div>

              <h1
                style={{
                  margin: "10px 0",
                  fontFamily: "cursive",
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                {component?.name}
              </h1>

              <Space
                style={{
                  paddingLeft: "75px",
                }}
              >
                <Button
                  icon={<MinusOutlined />}
                  onClick={() => decrementQuantity(component.id)}
                />
                <span
                  style={{
                    margin: "10px 0",
                    fontFamily: "cursive",
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  {component.quantity}
                </span>
                <Button
                  icon={<PlusOutlined />}
                  onClick={() => incrementQuantity(component.id)}
                />
              </Space>
              <p
                style={{
                  margin: "10px 0",
                  fontFamily: "cursive",
                  color: "#fff",
                  textAlign: "center",
                }}
                className="text-xl"
              >
                {component.category} : ${calculateComponentTotal(component)}
              </p>
              <div className="border-l pl-5 flex flex-col justify-between">
                <Button
                  style={{
                    backgroundColor: "red",
                    width: "230px",
                    fontFamily: "cursive",
                    color: "#fff",
                    fontWeight: "800",
                  }}
                  onClick={() => removeFromCart(component.id)}
                >
                  <DeleteOutlined /> Remove
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <div>
        {/* 
        {Object.entries(categoryTotals).map(([category, total]) => (
          <p key={category}>
            <h2
              style={{
                paddingLeft: "10px",
                fontFamily: "cursive",
                color: "#000",
                fontSize: "17px",
              }}
            >
              {category} : ${total}
            </h2>
          </p>
        ))} */}
        <h2
          style={{
            paddingLeft: "10px",
            fontFamily: "cursive",
            marginTop: "50px",
            color: "#000",
            fontWeight: "900",
          }}
        >
          Category Totals : ${sumOfCategoryTotals}
        </h2>
      </div>
    </div>
  );
};

export default Cart;

Cart.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
