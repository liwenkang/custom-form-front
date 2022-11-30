import axios from "axios";

// const cookie =
//   "tenantId=6264681423410307926; sourceType=WEB; SECKEY_ABVK=5YtaQedHzly7118pHZqGhJhVbBMq/2KRvrjiLOD5+oM%3D; BMAP_SECKEY=NzA6mdIJi6J2FE_aJ2I-I6PexRvXHCwhPcEYCygxShMxGya_tEY3DAZt9KHokks7WhgpbeUg-yFbnjEODLPHBLIwC02T94r4bM5NNiGsZ8LqEYObpqVVlvkG3hzdkCEi75TnBLTBrlGE95s0EPLJdyjqy5KFi9ZMSGh13TFrWpUuqDzOKEdCSv7uOjS0qSHV; JSESSIONID=E3B838F175A4CC5C123B8E8411B41201; login_tenant=8029330237508950486; WQSESSIONID=444180F0112F5DB090B5585E5BB3E452.10; x-token=eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqd3QiLCJpYXQiOjE2Njk2MjA0MDIsInN1YiI6IntcImFsbG93ZWRNdWx0aXBsZUxvZ2luXCI6MCxcImxvZ2luVHlwZVwiOlwiU09VUkNFX1RZUEVfV0VCXCIsXCJtdWx0aXBsZUxvZ2luVW5pcVRhZ1wiOlwiV0VCXCIsXCJyZWFsUmVmcmVzaFRva2VuRXhwaXJlTWludXRlXCI6NDMyMCxcInJlYWxUb2tlbkV4cGlyZU1pbnV0ZVwiOjE0NDAsXCJyZWZyZXNoVG9rZW5FeHBpcmVIb3Vyc1wiOjcyLFwidGVuYW50SWRcIjo4MDI5MzMwMjM3NTA4OTUwNDg2LFwidG9rZW5FeHBpcmVIb3Vyc1wiOjI0LFwidXNlcklkXCI6NjM4MTU1MzUyMzE1NDM4MTY1MH0iLCJpc3MiOiI2MzgxNTUzNTIzMTU0MzgxNjUwXzgwMjkzMzAyMzc1MDg5NTA0ODZfV0VCIiwiZXhwIjoxNjY5NzA2ODAyfQ.BwYUn-fqES1wXj1XVXqWCQLP9wUMXfJklNbm12QimVo";

const fetchGetDetail = (params) => {
  return new Promise((resolve) => {
    axios.post("/getDetail.do", params).then((response) => {
      resolve(response.data.data);
    });
  });
};

const fetchGetCustomFields = (params) => {
  return new Promise((resolve) => {
    axios.post("/getSysTableExtField.do", params).then((response) => {
      resolve(response.data.data);
    });
  });
};

export { fetchGetDetail, fetchGetCustomFields };
