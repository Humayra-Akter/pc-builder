import { useState } from "react";
import DashboardLayout from "../../../components/Layouts/DashboardLayout";
import { Button, Form, Input } from "antd";

const OrderConfirmationPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    // Add other fields as needed
  });

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
    <div className="order-confirmation-page">
      <h1>Order Confirmation</h1>
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
        <Button type="primary" htmlType="submit">
          Confirm Order
        </Button>
      </Form>
    </div>
  );
};

export default OrderConfirmationPage;

OrderConfirmationPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
