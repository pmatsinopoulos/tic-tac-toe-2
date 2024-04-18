import React, { StrictMode } from "react";
import { Container, createRoot } from "react-dom/client";
import "./styles/styles.css"

import App from "./App";

const root = createRoot(document.getElementById("root") as Container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
