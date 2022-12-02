import React from "react";

const Config = React.lazy(() => import("@pages/Config"));

export default [{ label: "配置页面", path: "config", element: <Config /> }];
