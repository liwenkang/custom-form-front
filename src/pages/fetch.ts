import axios from "axios";

const fetchGetCustomFormDetail = () => {
  return new Promise((resolve) => {
    axios.post("/getDetail").then((response) => {
      resolve(response.data.data);
    });
  });
};

const fetchGetCustomFormtemplate = () => {
  return new Promise((resolve) => {
    axios.post("/getTemplate").then((response) => {
      resolve(response.data.data);
    });
  });
};

export { fetchGetCustomFormDetail, fetchGetCustomFormtemplate };
