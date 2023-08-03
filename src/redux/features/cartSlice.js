import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  processors: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.processors.find(
        (processor) => processor._id === action.payload._id
      );
      if (existing) {
        existing.quantity = existing.quantity + 1;
      } else {
        state.processors.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeOne: (state, action) => {
      const existing = state.processors.find(
        (processor) => processor._id === action.payload._id
      );
      if (existing && existing.quantity > 1) {
        existing.quantity = existing.quantity - 1;
      } else {
        state.processors = state.processors.filter(
          (processor) => processor._id !== action.payload._id
        );
      }
      state.total -= action.payload.price;
    },
    removeFromCart: (state, action) => {
      state.processors = state.processors.filter(
        (processor) => processor._id !== action.payload._id
      );
      state.total -= action.payload.price * action.payload.quantity;
    },
  },
});

export const { addToCart, removeFromCart, removeOne } = cartSlice.actions;
export default cartSlice.reducer;
