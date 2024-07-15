import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { ProductT } from "../lib/types";

type ProductState = {
  cart: Array<ProductT>;
};

const initialState: ProductState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductT>) => {
      state.cart.push(action.payload);
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.filter(
        (item: ProductT) => item.id !== action.payload,
      );
    },
    incQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);

      if (item) {
        item.quantity = (item.quantity || 0) + 1;
        item.totalPrice = item.quantity * item.price;
      }
    },
    decQuantity: (state, action: PayloadAction<number>) => {
      const item = state.cart.find((item) => item.id === action.payload);

      if (item) {
        item.quantity = (item.quantity || 0) - 1;
        item.totalPrice = item.quantity * item.price;

        if (item.quantity <= 0) {
          cartSlice.caseReducers.deleteFromCart(state, action);
        }
      }
    },
  },
});

export const getCart = (state: { cart: ProductState }): Array<ProductT> =>
  state.cart.cart;

export const getTotalPrice = (state: { cart: ProductState }): number =>
  state.cart.cart.reduce((prev, item) => prev + (item.totalPrice ?? 0), 0);

export const getTotalCartQuantity = (state: { cart: ProductState }): number =>
  state.cart.cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

export const getCurrentProductQuantity =
  (id: number) =>
  (state: { cart: ProductState }): number =>
    state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

export const { addToCart, deleteFromCart, incQuantity, decQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
