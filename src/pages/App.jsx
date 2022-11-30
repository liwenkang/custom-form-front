import { useEffect, useState } from "react";
import CustomForm from "../components/CustomForm";
import { fetchGetDetail, fetchGetCustomFields } from "./fetch";
import { handleFieldsInitial, handleFieldsChange } from "./utils";

function App() {
  const [customFormFields, setCustomFormFields] = useState(null);
  const [customFormLinkages, setCustomFormLinkages] = useState(null);

  const initial = async () => {
    const detailResponse = await fetchGetDetail({
      isEditPage: "1",
      planId: "",
    });
    const customFormResponse = await fetchGetCustomFields(
      detailResponse.extConf
    );

    setCustomFormFields(
      handleFieldsInitial(customFormResponse, detailResponse)
    );
    setCustomFormLinkages(customFormResponse.linkages);
  };

  useEffect(() => {
    initial();
  }, []);

  return (
    <div className="App">
      {Array.isArray(customFormFields) && customFormFields.length > 0 ? (
        <CustomForm
          fields={customFormFields}
          onChange={({ field, fields }) => {
            setCustomFormFields(
              handleFieldsChange(field, fields, customFormLinkages)
            );
          }}
        />
      ) : null}
    </div>
  );
}

export default App;
