import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/styles.css";
import App from "./App";
const root = createRoot(document.getElementById("root"));
root.render(React.createElement(StrictMode, null,
    React.createElement(App, null)));
