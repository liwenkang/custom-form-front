import React from "react";

const Edit = React.lazy(() => import("@pages/Edit"));

export default [{ label: "编辑页面", path: "edit", element: <Edit /> }];
