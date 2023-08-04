import { Button, Image, Space, Typography } from "antd";
import {
  ShoppingCartOutlined,
  PlusOutlined,
  MinusOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import RootLayout from "../../../components/Layouts/RootLayout";

const Cart = () => {
  return (
    <div>
      <Button type="ghost" icon={<ShoppingCartOutlined />} size="large">
        Cart
      </Button>
      <div className="overflow-auto relative">
        <div>
          <Space direction="vertical" style={{ width: "100%" }}>
            <h1>Cart</h1>
            <h1>Total: {total.toFixed(2)} $</h1>
          </Space>
        </div>
        <div className="space-y-5">
          {products.map((product) => (
            <div
              className="border h-44 p-5 flex justify-between rounded-md"
              key={product.name}
            >
              <div className="border-r pr-5 shrink-0">
                <Image src={product?.image} alt="" className="h-full" />
              </div>
              <div className="px-2 w-full flex flex-col gap-3">
                <h1 className="text-2xl self-center">{product?.name}</h1>
                <p>Quantity: {product.quantity}</p>
                <p className="text-xl">Total Price: $</p>
              </div>
              <div className="border-l pl-5 flex flex-col justify-between">
                <Button
                  onClick={() => {
                    // Handle incrementing the quantity of the product
                  }}
                >
                  <PlusOutlined />
                </Button>
                <Button
                  onClick={() => {
                    // Handle decrementing the quantity of the product
                  }}
                >
                  <MinusOutlined />
                </Button>
                <Button
                  type="primary"
                  danger
                  onClick={() => {
                    // Handle removing the product from the cart
                  }}
                >
                  <DeleteOutlined />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;

Cart.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
