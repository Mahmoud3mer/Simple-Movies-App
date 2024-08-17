import axios  from 'axios';
import { axiosInstance } from '../../baseURL/axiosInstance';

export const getMovies = (url) => (dispatch) => {
    return axiosInstance.get(url)
    .then((res) => {
        dispatch({
            type: "GET_MOVIES",
            payload: res.data.results
        })
    })
    .catch((err) => {console.log(err)})
}