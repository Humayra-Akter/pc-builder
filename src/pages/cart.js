import { useEffect, useState } from "react";
import axios from "axios";
import RootLayout from "../../components/Layouts/RootLayout";
import Cart from "@/components/UI/Cart";

const CartPage = () => {
  <Cart></Cart>;
};

export default CartPage;

CartPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
