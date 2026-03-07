import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import GlobalContext from "./concepts/crudoperation/context/GlobalContext";

createRoot(document.getElementById("root")).render(
  <GlobalContext>
    <App />
  </GlobalContext>,
);
