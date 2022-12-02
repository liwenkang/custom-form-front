import { useEffect, useState } from "react";
import FormTemplate from "@/components/FormTemplate";
import type { ITemplate } from "@/components/FormTemplate/Interface";
// import { handleTemplateInitial, handleDataChange } from "./utils";
import { Input } from "antd";

import {
  fetchGetData,
  fetchGetTemplate,
  fetchGetFieldRelate,
  fetchGetFieldOptionRelate,
} from "@apis/Edit";

import { mockTemplate, mockRelate, mockData } from "./mock";

function Edit() {
  // 数据 Id
  const dataId = "";
  // 模版 Id
  const templateId = "";
  // 字段关联关系 Id
  const fieldRelateId = "";
  // 字段选项值关联关系 Id
  const fieldOptionRelateId = "";

  // const [data, setData] = useState(null);
  const data = mockData;
  // const [template, setTemplate] = useState<ITemplate[]>([
  //   {
  //     formItemProps: {
  //       label: "用户名",
  //       name: "username",
  //       rules: [{ required: true, message: "Please input your username!" }],
  //     },
  //     type: "Input",
  //     formItemChildProps: {},
  //     visible: true,
  //     enabled: true,
  //     render: null,
  //   },
  //   {
  //     formItemProps: {
  //       label: "密码",
  //       name: "password",
  //       rules: [{ required: true, message: "Please input your password!" }],
  //     },
  //     type: "Input.Password",
  //     formItemChildProps: {},
  //     visible: true,
  //     enabled: true,
  //     render: null,
  //   },
  //   {
  //     formItemProps: {
  //       label: "记住密码",
  //       name: "remember",
  //       initialValue: true,
  //     },
  //     type: "Checkbox",
  //     formItemChildProps: {},
  //     visible: true,
  //     enabled: true,
  //     render: null,
  //   },
  // ]);

  const template = mockTemplate;
  // const [fieldRelate, setFieldRelate] = useState();
  const fieldRelate = mockRelate;
  const [fieldOptionRelate, setFieldOptionsRelate] = useState(null);

  // const _initial = async () => {
  //   const dataResponse = await fetchGetData(dataId);
  //   setData(dataResponse);
  //   const templateResponse = await fetchGetTemplate(templateId);
  //   setTemplate(templateResponse);
  //   const fieldRelateResponse = await fetchGetFieldRelate(fieldRelateId);
  //   setFieldRelate(fieldRelateResponse);
  //   const fieldOptionRelateResponse = await fetchGetFieldOptionRelate(
  //     fieldOptionRelateId
  //   );
  //   setFieldOptionsRelate(fieldOptionRelateResponse);
  // };

  useEffect(() => {
    // _initial();
  }, []);

  const onFinish = (values: any) => {
    console.log("onFinish", values);
    console.log("fieldRelate", fieldRelate);
  };

  const onChange = (data: any) => {
    console.log("全量更新值获取", data);
  };

  const onItemChange = ({ item, value }: any) => {
    let result = value;
    if (value?.target?.value !== undefined) {
      result = value.target.value;
    } else if (value?.target?.checked !== undefined) {
      result = value.target.value;
    }
    console.log("item", item, "result", result);
  };

  return (
    <div className="App">
      <FormTemplate
        data={data}
        template={template}
        onFinish={onFinish}
        onItemChange={onItemChange}
        onChange={onChange}
        // fieldRelate={fieldRelate}
        // fieldOptionRelate={fieldOptionRelate}
      />
    </div>
  );
}

export default Edit;
