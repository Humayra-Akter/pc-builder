import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (component) => {
    // already in cart
    const existingItemIndex = cart.findIndex(
      (item) => item.id === component.id
    );

    if (existingItemIndex !== -1) {
      // already in cart, update quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // If not in the cart, quantity 1
      setCart((prevCart) => [...prevCart, { ...component, quantity: 1 }]);
    }
  };

  const removeFromCart = (componentId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== componentId));
  };

  const incrementQuantity = (componentId) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const componentIndex = updatedCart.findIndex(
        (item) => item.id === componentId
      );
      updatedCart[componentIndex].quantity += 1;
      return updatedCart;
    });
  };

  const decrementQuantity = (componentId) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const componentIndex = updatedCart.findIndex(
        (item) => item.id === componentId
      );
      if (updatedCart[componentIndex].quantity > 1) {
        updatedCart[componentIndex].quantity -= 1;
      }
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
