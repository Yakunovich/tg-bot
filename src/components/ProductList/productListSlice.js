import { createSlice } from "@reduxjs/toolkit";

export const productListSlice = createSlice({
  name: "productList",
  initialState: [],
  reducers: {
    addToList: (state, { payload: massage }) => {
      const duplicate = state.findIndex((m) => m.id === massage.id);
      if (duplicate !== -1) {
        state.splice(duplicate, 1);
      } else {
        state.push(massage);
      }
    },
  },
});

export const { actions, reducer } = productListSlice;
