import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import cartItems from "../../cartItems";

const initialState = {
  cartItems,
  amount: 2,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload);
    },
    increase: (state, { payload }) => {
      const cardItem = state.cartItems.find((item) => item.id === payload);
      cardItem.amount = cardItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cardItem = state.cartItems.find((item) => item.id === payload);
      cardItem.amount = cardItem.amount - 1;
    },
  },
});

export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;