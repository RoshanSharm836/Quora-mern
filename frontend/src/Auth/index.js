import Axios from "axios";
// import config from '../config';

const axios = Axios.create({
  baseURL: "https://quora-backend.onrender.com",
  // baseURL: "http://localhost:3059",
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("auth-token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axios;
