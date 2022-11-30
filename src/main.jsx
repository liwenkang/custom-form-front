import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import { ConfigProvider } from "antd";
import zhCN from "antd/locale/zh_CN";

// mock data
import { worker } from "./Mock/browser";
if (process.env.NODE_ENV === "development") {
  worker.start();
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
);
