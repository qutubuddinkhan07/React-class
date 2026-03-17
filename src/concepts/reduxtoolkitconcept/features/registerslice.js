import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  email: "",
  password: "",
  age: "",
  gender: "",
};

const registerslice = createSlice({
  name: "register",
  initialState: initialState,
  reducers: {
    handleInput: (state, actions) => {
      const { name, value } = actions.payload;
      state[name] = value;
    },
    handleSubmit: (state) => {
      console.log("form submitted: ", state);
    },
    clear: (state) => {
      return initialState;
    },
  },
});

export const { handleInput, handleSubmit, clear } = registerslice.actions;
export default registerslice.reducer;
