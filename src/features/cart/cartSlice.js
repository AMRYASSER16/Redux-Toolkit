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
  },
});

export const { clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;