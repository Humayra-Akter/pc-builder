import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const addToCart = (component) => {
    const existingItem = cart.find((item) => item.id === component.id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === component.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...component, quantity: 1 }]);
    }

    setSelectedCategories((prevCategories) => {
      if (!prevCategories.includes(component.category)) {
        return [...prevCategories, component.category];
      }
      return prevCategories;
    });
  };

  const removeFromCart = (componentId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== componentId));

    setSelectedCategories((prevCategories) => {
      const categoryToRemove = cart.find(
        (item) => item.id === componentId
      )?.category;
      return prevCategories.filter((category) => category !== categoryToRemove);
    });
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
        selectedCategories,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
