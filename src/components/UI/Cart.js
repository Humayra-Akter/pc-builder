// import { useState, useEffect } from "react";
// import axios from "axios";
// import RootLayout from "../../../components/Layouts/RootLayout";

// const Cart = () => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     fetchCartItems();
//   }, []);

//   const fetchCartItems = async () => {
//     try {
//       const response = await axios.get("/api/cart");
//       setCartItems(response.data.cartItems);
//     } catch (error) {
//       console.error("Error fetching cart items:", error);
//     }
//   };

//   return (
//     <div>
//       <h2
//         style={{
//           display: "flex",
//           margin: "10px 0",
//           width: "100%",
//           fontFamily: "cursive",
//           color: "#000",
//           fontWeight: "black",
//           justifyContent: "space-between",
//         }}
//       >
//         Your Cart
//       </h2>
//       {cartItems.length === 0 ? (
//         <p
//           style={{
//             display: "flex",
//             margin: "10px 0",
//             width: "100%",
//             fontFamily: "cursive",
//             color: "#000",
//             fontWeight: "black",
//             justifyContent: "space-between",
//           }}
//         >
//           Your cart is empty.
//         </p>
//       ) : (
//         <ul>
//           {cartItems.map((item) => (
//             <li key={item._id}>{item.name}</li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;
// Cart.getLayout = function getLayout(page) {
//   return <RootLayout>{page}</RootLayout>;
// };
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  addToCart,
  removeFromCart,
  removeOne,
} from "@/redux/features/cartSlice";
import { List, Card, Button } from "antd";

export default function Cart() {
  const { processors, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const handleAddToCart = (processor) => {
    dispatch(addToCart(processor));
  };

  const handleRemoveOne = (processor) => {
    dispatch(removeOne(processor));
  };

  const handleRemoveFromCart = (processor) => {
    dispatch(removeFromCart(processor));
  };

  return (
    <div className="space-y-5 bg-blue-100">
      <List
        dataSource={processors}
        renderItem={(processor) => (
          <Card key={processor.id} bordered={false}>
            <div className="border h-44 p-5 flex justify-between rounded-md">
              <div className="border-r pr-5 shrink-0">
                <img
                  src={processor.image}
                  alt={processor.name}
                  className="w-20 h-20"
                />
              </div>
              <div className="px-2 w-full flex flex-col gap-3">
                <h1 className="text-2xl self-center">{processor.name}</h1>
                <p>Description: {processor.description}</p>
                <p>Category: {processor.category}</p>
                <p>Price: {processor.price}</p>
                <p>Status: {processor.status}</p>
                <p>Rating: {processor.rating}</p>
                <p>Quantity: {processor.quantity}</p>
                <p className="text-xl">
                  Total Price:{" "}
                  {(processor.price * processor.quantity).toFixed(2)} $
                </p>
              </div>
              <div className="border-l pl-5 flex flex-col justify-between">
                <Button onClick={() => handleAddToCart(processor)}></Button>
                <Button onClick={() => handleRemoveOne(processor)}></Button>
                <Button
                  onClick={() => handleRemoveFromCart(processor)}
                  variant="destructive"
                  className="bg-red-500 hover:bg-red-400"
                ></Button>
              </div>
            </div>
          </Card>
        )}
      />
    </div>
  );
}
