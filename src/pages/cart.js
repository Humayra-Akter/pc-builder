import { useEffect, useState } from "react";
import axios from "axios";
import RootLayout from "../../components/Layouts/RootLayout";
import Cart from "@/components/UI/Cart";

const CartPage = () => {
  // const [cartItems, setCartItems] = useState([]);

  // useEffect(() => {
  //   fetchCartItems();
  // }, []);

  // const fetchCartItems = async () => {
  //   try {
  //     const response = await axios.get("/api/cart");
  //     setCartItems(response.data.cartItems);
  //   } catch (error) {
  //     console.error("Error fetching cart items:", error);
  //   }
  // };

  // return <Cart></Cart>;
  <Cart></Cart>
};

export default CartPage;

CartPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
