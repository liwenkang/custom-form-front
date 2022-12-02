import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import type { RouteObject } from "react-router-dom";
import { Outlet, Link, useRoutes, useNavigate } from "react-router-dom";
import NoMatch from "@pages/NoMatch";
import Spin from "@pages/Spin";

import Config from "./Config";
import Edit from "./Edit";

// 全部路由
const allRoutes = [...Edit, ...Config];

// 布局
const Layout = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState("mail");
  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    navigate(e.key);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={allRoutes.map((item) => ({ ...item, key: item.path }))}
      />
      <Outlet />
    </>
  );
};

export default function Routes() {
  let routes: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      children: allRoutes.map((item) => {
        return {
          ...item,
          element: (
            <React.Suspense fallback={<Spin />}>{item.element}</React.Suspense>
          ),
        };
      }),
    },
    { path: "*", element: <NoMatch /> },
  ];

  let element = useRoutes(routes);
  return <div>{element}</div>;
}
