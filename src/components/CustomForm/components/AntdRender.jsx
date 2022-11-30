import _ from "lodash";
import { Input, Select, DatePicker, InputNumber, Upload } from "antd";
const { RangePicker } = DatePicker;
export default ({
  field,
  fields,
  onChange = ({ field, fields }) => ({ field, fields }),
  style = { width: "500px" },
}) => {
  const _handleChange = (value) => {
    const fieldResult = _.cloneDeep(field);
    fieldResult.value = value;
    onChange({
      field: fieldResult,
      fields: fields.map((item) => {
        if (item.code === field.code) {
          item.value = value;
        }
        return item;
      }),
    });
  };
  const antdRender = (field) => {
    // 日期
    if (field.type === "DatePicker") {
      return <DatePicker style={style} {...field} onChange={_handleChange} />;
    }
    // 日期区间
    if (field.type === "RangePicker") {
      return <RangePicker style={style} {...field} onChange={_handleChange} />;
    }
    // 文本框
    if (field.type === "Input") {
      return (
        <Input
          style={style}
          {...field}
          onChange={(e) => {
            _handleChange(e.target.value);
          }}
        />
      );
    }
    // 多行文本框
    if (field.type === "Input.TextArea") {
      return (
        <Input.TextArea
          style={style}
          {...field}
          onChange={(e) => _handleChange(e.target.value)}
        />
      );
    }
    // 数值输入框
    if (field.type === "InputNumber") {
      return (
        <InputNumber
          style={style}
          controls={false}
          {...field}
          onChange={_handleChange}
        />
      );
    }
    // 单选框
    if (field.type === "Radio.Group") {
      return (
        <Radio.Group
          style={style}
          controls={false}
          {...field}
          onChange={_handleChange}
        />
      );
    }
    // 单选/多选框
    if (field.type === "Select") {
      // 多选
      return (
        <Select
          style={style}
          {...field}
          fieldNames={{
            label: "name",
            value: "id",
            options: "options",
          }}
          onChange={_handleChange}
        />
      );
    }
    // 上传
    if (field.type === "Upload") {
      return <Upload style={style} {...field} onChange={_handleChange} />;
    }

    if (field.render) {
      return field.render();
    }

    return <div>无效 render</div>;
  };

  return antdRender(field);
};
