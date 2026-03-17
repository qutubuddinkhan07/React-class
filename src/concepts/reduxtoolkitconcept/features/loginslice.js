import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

const loginslice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    handleInput: (state, actions) => {
      // payload is an object with name and value
      const { name, value } = actions.payload;
      state[name] = value;
    },
    handleSubmit: () => {
      console.log("form submitted", state);
    },
    clear: (state) => {
      return initialState;
    },
  },
});

export const { handleInput, handleSubmit, clear } = loginslice.actions;
export default loginslice.reducer;
