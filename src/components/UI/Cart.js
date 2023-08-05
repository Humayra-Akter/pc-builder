import { Button, Card, Col, Image, Row, Space, Typography } from "antd";
import RootLayout from "../../../components/Layouts/RootLayout";
import { useCartContext } from "./CartContext";
import {
  ShoppingCartOutlined,
  PlusOutlined,
  MinusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

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
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        {/* <div className="space-y-5"> */}
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
                Total Price: ${calculateComponentTotal(component)}
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
      <div className="mt-6">
        <Typography.Text strong>Total Price: ${overallTotal}</Typography.Text>
      </div>
      <div>
        <h2>Category Totals:</h2>
        {Object.entries(categoryTotals).map(([category, total]) => (
          <p key={category}>
            {category}: ${total}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Cart;

Cart.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
