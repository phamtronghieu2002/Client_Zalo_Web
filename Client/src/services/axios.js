import axios from 'axios'



const instance = axios.create({
    baseURL: 'http://localhost:8081/api/v1',
  });
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

        let errCode =res.status;
        if(errCode === 401 || errCode === 403){
          window.location.href = '/login';
          localStorage.removeItem('user');
        }
      }
      return Promise.reject(res || error);
    }
  );
 instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
  
export default instance
