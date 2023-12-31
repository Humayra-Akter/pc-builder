import { useState } from "react";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import { Button, Form, Input } from "antd";
import { useCartContext } from "./CartContext";
import { ToastContainer, toast } from "react-toastify";
import { useSession } from "next-auth/react";
import "react-toastify/dist/ReactToastify.css";

const OrderConfirmationPage = () => {
  const { cart } = useCartContext();
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    // Add other fields as needed
  });
  const notify = () => {
    toast.success("Thanks for your order!");
    if (cart.length < 6) {
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
    console.log("Order confirmed:", formData);
  };

  return (
    <div
      style={{
        backgroundColor: "black",
      }}
    >
      <Form
        style={{
          fontSize: "15px",
          margin: "30px auto",
          width: "100%",
          justifyItems: "center",
          alignItems: "center",
          backgroundColor: "black",
          color: "white",
          padding: "70px ",
          letterSpacing: "2px",
          textAlign: "center",
        }}
        onFinish={handleSubmit}
      >
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "800",
            backgroundColor: "black",
            color: "yellow",
            fontFamily: "cursive",

            textAlign: "center",
          }}
        >
          Order Confirmation
        </h1>
        <div
          style={{
            fontSize: "15px",
            margin: "20px",
            width: "90%",
            justifyItems: "center",
            alignItems: "center",
            backgroundColor: "white",
            padding: "50px 50px",
            margin: "50px 50px",
            letterSpacing: "2px",
            textAlign: "center",
            color: "black",
            fontWeight: "700",
            borderRadius: "30px",
          }}
        >
          <Form.Item label="Name">
            <Input
              name="name"
              value={session?.user?.name}
              onChange={handleFormChange}
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input name="email" value={session?.user?.email} required />
          </Form.Item>
          <Form.Item label="Address">
            <Input.TextArea
              name="address"
              value={formData.address}
              onChange={handleFormChange}
              required
              rows={4}
            />
          </Form.Item>
        </div>
        <h2
          style={{
            marginTop: "70px",
            marginBottom: "20px",
            width: "100%",
            fontFamily: "cursive",
            color: "white",
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          Selected Components
        </h2>{" "}
        <hr
          style={{
            border: "none",
            borderTop: "3px double yellow",
            margin: "20px auto",
            width: "40%",
          }}
        />
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
                color: "white",
                fontWeight: "black",
                justifyContent: "space-between",
              }}
              key={component.id}
            >
              Product : {component.name}
              <p
                style={{
                  fontFamily: "cursive",
                  color: "white",
                  fontWeight: "black",
                }}
              >
                {/* Quantity:
                {component.quantity}{" "} */}
                <strong style={{ color: "yellow" }}> ~~~~</strong>
                Price:{" "}
                <strong style={{ color: "yellow" }}> {component.price}</strong>
              </p>
            </li>
          ))}
        </ul>
        <Button
          style={{
            fontSize: "15px",
            marginTop: "50px",
            width: "50%",
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
          type="primary"
          htmlType="submit"
          onClick={notify}
          disabled={cart.length == 0}
        >
          {cart.length == 0 ? "No item Selected" : "Confirm Order"}
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
