import Field from "./components/Field";

const CustomerForm = ({ fields, onChange }) => {
  return fields.map((item) => {
    if (item?.hide) {
      return null;
    }
    return (
      <Field key={item.code} field={item} fields={fields} onChange={onChange} />
    );
  });
};

export default CustomerForm;
