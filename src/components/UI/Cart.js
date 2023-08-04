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
    return cart.reduce(
      (total, component) => total + calculateComponentTotal(component),
      0
    );
  };
  const isPlaceOrderEnabled = selectedCategories.length === 6;

  const { Meta } = Card;

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
                <Image src={component?.image} alt="" width={200} height={150} />
              </div>

              <h1
                style={{
                  margin: "10px 0",
                  fontFamily: "cursive",
                  color: "#fff",
                }}
              >
                {component?.name}
              </h1>

              <Space>
                <Button
                  icon={<MinusOutlined />}
                  onClick={() => decrementQuantity(component.id)}
                />
                <span>{component.quantity}</span>
                <Button
                  icon={<PlusOutlined />}
                  onClick={() => incrementQuantity(component.id)}
                />
              </Space>
              <p className="text-xl">
                Total Price: ${calculateComponentTotal(component)}
              </p>
              <div className="border-l pl-5 flex flex-col justify-between">
                <Button
                  style={{ backgroundColor: "red" }}
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
        <Typography.Text strong>
          Total Price: ${calculateOverallTotal()}
        </Typography.Text>
        <Button type="primary" disabled={!isPlaceOrderEnabled}>
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default Cart;

Cart.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
