import { SET_USER, SET_ERRORS, CLEAR_ERRORS, LOADING_UI } from "../types";
import axios from "axios";

export const loginUser = (userData, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post('/login', userData)
    .then(result => {
      console.log(result.data);
      const FBIdToken = `Bearer ${result.data.token}`;
      localStorage.setItem('FBIdToken', FBIdToken);
      axios.defaults.headers.common['Authorization'] = FBIdToken;
      dispatch({ type: CLEAR_ERRORS });
      history.push('/home');
    })
    .catch(error => {
      dispatch({
        type: SET_ERRORS,
        payload: error.response.data
      });
      console.log(error.response.data);
    });
};

export const getUserData = () => (dispatch) => {
  //TODO
};