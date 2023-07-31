import { ADD_TO_CART } from "./cartActionTypes";

export const addToCart = (productId) => ({
  type: ADD_TO_CART,
  payload: productId,
});
