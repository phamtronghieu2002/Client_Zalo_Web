import axios from "axios";
import axiosRetry from "axios-retry";

axios.defaults.withCredentials = true;


//create aios instance
const instance = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});


//confgiure axios instance response
instance.interceptors.response.use(
  function (response) {
    return response.data ? response.data : { status: response.status };
  },
  function (error) {
    let res;
    if (error.response) {
      res = {
        status: error.response.status,
        data: error.response.data,
        statusText: error.response.statusText,
        headers: error.response.headers,
        config: error.config,
      };
      const status = res.status;
      if (status === 401) {
          axios
          .post("http://localhost:8080/api/v1/refresh_token")
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log("error fresh>>>");
            const path = window.location.pathname;
            if (path !== "/login") {
              window.location.href = "/login";
            }
          });
      }
    }
    return Promise.reject(res || error);
  }
);



axiosRetry(instance, {
  retries: 3, // number of retries
  retryDelay: (retryCount) => {
    console.log(`retry attempt: ${retryCount}`);
    return retryCount * 500; // time interval between retries
  },
  retryCondition(error) {
    return error.status === 401 
  },
});
export default instance;
