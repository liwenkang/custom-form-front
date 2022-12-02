import axios from "axios";

const fetchGetDetail = () => {
  return new Promise((resolve) => {
    axios.post("/getDetail").then((response) => {
      resolve(response.data.data);
    });
  });
};

const fetchGetTemplate = () => {
  return new Promise((resolve) => {
    axios.post("/getTemplate").then((response) => {
      resolve(response.data.data);
    });
  });
};

export { fetchGetDetail, fetchGetTemplate };
