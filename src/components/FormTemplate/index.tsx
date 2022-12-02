import { Form, Button } from "antd";
import { result } from "lodash";
import { useEffect } from "react";
import AntdRender from "./components/AntdRender";
import type { ITemplate } from "./Interface";

interface IFormTemplate {
  (props: {
    data: any;
    template: ITemplate[];
    onFinish: any;
    onItemChange: any;
    onChangeArray: any;
    onChange: any;
  }): any;
}

const FormTemplate: IFormTemplate = ({
  data,
  template,
  onFinish,
  onItemChange,
  onChange,
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    console.log("ABC form", form);
    console.log("ABC data", data);
    form.setFieldsValue(data);
  }, []);

  const formProps = {
    name: "FormTemplate",
    form,
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
    initialValues: data,
    onFinish,
  };

  // 重置数据
  const onReset = () => {
    form.resetFields();
  };

  let result: any = {};
  template.forEach((item) => {
    result[item.formItemProps.name] = Form.useWatch(
      item.formItemProps.name,
      form
    );
  });
  useEffect(() => {
    onChange(result);
  }, [JSON.stringify(result)]);

  return (
    <Form {...formProps}>
      {template.map((item: ITemplate) => {
        if (item.visible === false || item.enabled === false) {
          return null;
        }
        if (item.render) {
          return item.render();
        }

        item.formItemChildProps = {
          ...item.formItemChildProps,
          onChange: (changeValue: any) => {
            // 监听单个修改数据
            onItemChange({
              item,
              value: changeValue,
            });
          },
        };
        return (
          <Form.Item key={item.formItemProps.name} {...item.formItemProps}>
            {AntdRender(item)}
          </Form.Item>
        );
      })}

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button htmlType="button" onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormTemplate;
