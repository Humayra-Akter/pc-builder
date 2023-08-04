import { Button, Image, Space, Typography } from "antd";
import RootLayout from "../../../components/Layouts/RootLayout";
import { useCartContext } from "./CartContext";
import {
  ShoppingCartOutlined,
  PlusOutlined,
  MinusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } =
    useCartContext();

  const calculateComponentTotal = (component) => {
    return component.price * component.quantity || 1;
  };
  const calculateOverallTotal = () => {
    return cart.reduce(
      (total, component) => total + calculateComponentTotal(component),
      0
    );
  };

  return (
    <div>
      <h1>Selected Components</h1>
      <div className="space-y-5">
        {cart.map((component) => (
          <div
            className="border h-44 p-5 flex justify-between rounded-md"
            key={component.id}
          >
            <div className="border-r pr-5 shrink-0">
              <Image src={component?.image} alt="" width={200} height={150} />
            </div>
            <div className="px-2 w-full flex flex-col gap-3">
              <h1 className="text-2xl self-center">{component?.name}</h1>
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
              <div></div>
            </div>
            <div className="border-l pl-5 flex flex-col justify-between">
              <Button
                style={{ backgroundColor: "red" }}
                onClick={() => removeFromCart(component.id)}
              >
                <DeleteOutlined /> Remove
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <Typography.Text strong>
          Total Price: ${calculateOverallTotal()}
        </Typography.Text>
      </div>
    </div>
  );
};

export default Cart;

Cart.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
