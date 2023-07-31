import { useState, useEffect } from "react";
import axios from "axios";
import RootLayout from "../../../components/Layouts/RootLayout";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("/api/cart");
      setCartItems(response.data.cartItems);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  return (
    <div>
      <h2
        style={{
          display: "flex",
          margin: "10px 0",
          width: "100%",
          fontFamily: "cursive",
          color: "#000",
          fontWeight: "black",
          justifyContent: "space-between",
        }}
      >
        Your Cart
      </h2>
      {cartItems.length === 0 ? (
        <p
          style={{
            display: "flex",
            margin: "10px 0",
            width: "100%",
            fontFamily: "cursive",
            color: "#000",
            fontWeight: "black",
            justifyContent: "space-between",
          }}
        >
          Your cart is empty.
        </p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item._id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
Cart.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
