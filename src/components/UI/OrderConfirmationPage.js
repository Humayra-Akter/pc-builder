import { useState } from "react";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import { Button, Form, Input } from "antd";
import { useCartContext } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderConfirmationPage = () => {
  const { cart } = useCartContext();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    // Add other fields as needed
  });
  const notify = () => {
    toast.success("Thanks for your order!");
    if (cart.length != 6) {
      toast.warning("You have not selected all category");
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and order confirmation here
    console.log("Order confirmed:", formData);
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-80px)] gap-10">
      <h1
        className="mb-2 text-2xl uppercase text-center
          py-6 text-blue-900 font-bold"
      >
        Order Confirmation
      </h1>
      <Form onFinish={handleSubmit}>
        <Form.Item label="Name" required>
          <Input
            name="name"
            value={formData.name}
            onChange={handleFormChange}
          />
        </Form.Item>
        <Form.Item label="Address" required>
          <Input.TextArea
            name="address"
            value={formData.address}
            onChange={handleFormChange}
            rows={4}
          />
        </Form.Item>
        {/* Add other form fields as needed */}
        <h2
          style={{
            marginTop: "70px",
            width: "100%",
            fontFamily: "cursive",
            color: "#000",
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          Selected Components
        </h2>
        <ul>
          {cart.map((component) => (
            <li
              style={{
                display: "flex",
                paddingLeft: "50px",
                paddingRight: "50px",
                margin: "10px 0",
                width: "100%",
                fontFamily: "cursive",
                color: "#000",
                fontWeight: "black",
                justifyContent: "space-between",
              }}
              key={component.id}
            >
              Product : {component.name}
              <p
                style={{
                  fontFamily: "cursive",
                  color: "blue",
                  fontWeight: "black",
                }}
              >
                Quantity:
                {component.quantity}~~~~ Price: {component.price}
              </p>
            </li>
          ))}
        </ul>
        <Button
          style={{
            fontSize: "15px",
            marginTop: "20px",
            width: "50%",
            justifyItems: "center",
            alignItems: "center",
            marginLeft: "350px",
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            padding: "2px 5px",
            letterSpacing: "3px",
            textAlign: "center",
            fontWeight: "300",
            borderRadius: "100px",
          }}
          type="primary"
          htmlType="submit"
          onClick={notify}
        >
          Confirm Order
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default OrderConfirmationPage;

OrderConfirmationPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
