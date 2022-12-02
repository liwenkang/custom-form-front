import _ from "lodash";
import {
  Cascader,
  Input,
  Select,
  DatePicker,
  InputNumber,
  Upload,
  Slider,
  Radio,
  Switch,
  TreeSelect,
  Checkbox,
} from "antd";
const { RangePicker } = DatePicker;
import type { ITemplate } from "../Interface";

export default (item: ITemplate) => {
  // 级联选择
  if (item.formItemChildProps.type === "Cascader") {
    return <Cascader {...item.formItemChildProps} />;
  }

  // 多选框
  if (item.formItemChildProps.type === "Checkbox.Group") {
    return <Checkbox.Group {...item.formItemChildProps} />;
  }
  if (item.formItemChildProps.type === "Checkbox") {
    return <Checkbox {...item.formItemChildProps} />;
  }

  // 日期
  if (item.formItemChildProps.type === "DatePicker") {
    return <DatePicker {...item.formItemChildProps} />;
  }
  // 日期区间
  if (item.formItemChildProps.type === "RangePicker") {
    return <RangePicker {...item.formItemChildProps} />;
  }

  // 文本框
  if (item.formItemChildProps.type === "Input") {
    return <Input {...item.formItemChildProps} />;
  }
  // 多行文本框
  if (item.formItemChildProps.type === "Input.TextArea") {
    return <Input.TextArea {...item.formItemChildProps} />;
  }
  // 数值输入框
  if (item.formItemChildProps.type === "InputNumber") {
    return <InputNumber {...item.formItemChildProps} />;
  }

  // 单选框
  if (item.formItemChildProps.type === "Radio.Group") {
    return <Radio.Group {...item.formItemChildProps} />;
  }
  // 单选/多选框
  if (item.formItemChildProps.type === "Select") {
    // 多选
    return <Select {...item.formItemChildProps} />;
  }
  // 滑动输入条
  if (item.formItemChildProps.type === "Slider") {
    return <Slider {...item.formItemChildProps} />;
  }
  // 开关
  if (item.formItemChildProps.type === "Switch") {
    return <Switch {...item.formItemChildProps} />;
  }
  // 树选择
  if (item.formItemChildProps.type === "TreeSelect") {
    return <TreeSelect {...item.formItemChildProps} />;
  }
  // 上传
  if (item.formItemChildProps.type === "Upload") {
    return <Upload {...item.formItemChildProps} />;
  }
  if (item.formItemChildProps.type === "Input.Password") {
    return <Input.Password {...item.formItemChildProps} />;
  }

  return null;
};
