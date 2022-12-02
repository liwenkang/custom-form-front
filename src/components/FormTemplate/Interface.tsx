import { ReactNode } from "react";

interface ITemplate {
  // 表单 Form.Item 的属性
  formItemProps: any;

  // 表单 Form.Item.Children props
  formItemChildProps: any;

  visible: boolean;
  enabled: boolean;
  render: any;
}

interface RelateDTO {
  option: any;
  link: any;
}

export type { ITemplate, RelateDTO };
