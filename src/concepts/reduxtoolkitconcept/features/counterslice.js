import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const counterslice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => {
      return state - 1;
    },
    reset: (state) => {
      return 0;
    },
  },
});

export const { increment, decrement, reset } = counterslice.actions;

export default counterslice.reducer;
