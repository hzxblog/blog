import Axios from 'axios';

const request = Axios.create({
  baseURL: 'http://localhost:7000'
});

request.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

request.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});


export default request;
