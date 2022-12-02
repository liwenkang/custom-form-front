import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import zhCN from "antd/locale/zh_CN";
import { ConfigProvider } from "antd";

import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn"); // 全局使用简体中文

// 路由地址
import Routes from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <ConfigProvider locale={zhCN}>
      <Routes />
    </ConfigProvider>
  </BrowserRouter>
);
