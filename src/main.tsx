import "./index.css";

import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import ReactDOM from "react-dom/client";

import RootLayout from "./layouts/root-layout";
import CartPage from "./pages/cart-page";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <RootLayout>
        <CartPage />
      </RootLayout>
    </NextUIProvider>
  </React.StrictMode>,
);
