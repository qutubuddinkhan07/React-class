import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterslice";
import loginReducer from "../features/loginslice";
import registerReducer from "../features/registerslice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login: loginReducer,
    register: registerReducer,
  },
});
