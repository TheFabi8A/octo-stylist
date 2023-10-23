import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { NextUIProvider } from "@nextui-org/react";
import UserContext from "@user-context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <UserContext>
        <App />
      </UserContext>
    </NextUIProvider>
  </React.StrictMode>,
);
