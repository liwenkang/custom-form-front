import { Input } from "antd";
import AntdRender from "./AntdRender";

const Field = ({ key, field, fields, onChange }) => {
  const { code, name, value, readOnly, required, render } = field;

  const Label = () => {
    return (
      <div style={{ flex: "0 0 200px" }}>
        {required ? <span style={{ color: "red" }}>*</span> : null}
        <span>{name}</span>
      </div>
    );
  };

  const ContentFunc = () => {
    return <AntdRender field={field} fields={fields} onChange={onChange} />;
  };

  return (
    <div style={{ display: "flex" }}>
      {Label()}
      {ContentFunc()}
    </div>
  );
};

export default Field;
