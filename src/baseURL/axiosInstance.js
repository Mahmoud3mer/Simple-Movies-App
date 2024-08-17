import axios from "axios";
import myStore from './../Redux/store';
import { LoaderAction } from "../Redux/Actions/LoaderAction";

export const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org"
})


// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    // Do something before request is sent
    config["params"] = {
        "api_key" : "29cf44b93ca83bf48d9356395476f7ad"
    }
    config.headers['Authorization'] = "myToken";
    myStore.dispatch(LoaderAction(true));

    // console.log(config)
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    myStore.dispatch(LoaderAction(false));
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});