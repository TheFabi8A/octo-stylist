import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App";
import ContextProvider from "./Context";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </NextUIProvider>
  </React.StrictMode>,
);
