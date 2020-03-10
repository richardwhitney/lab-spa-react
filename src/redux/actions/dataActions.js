import {SET_TESTS, LOADING_DATA, LOADING_UI, STOP_LOADING_UI, SET_ERRORS, CLEAR_ERRORS, ADD_TEST, SET_TEST} from '../types';
import axios from 'axios';
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";

// Get all tests
export const getTests = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios.get('/tests')
    .then(result => {
      dispatch({
        type: SET_TESTS,
        payload: result.data
      })
    })
    .catch(error => {
      dispatch({
        type: SET_TESTS,
        payload: []
      })
    })
};

// Add a test
export const addTest = (newTest) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios.post('/test', newTest)
    .then(response => {
      dispatch({
        type: ADD_TEST,
        payload: response.data
      });
      dispatch({ type: CLEAR_ERRORS});
    })
    .catch(error => {
      dispatch({
        type: SET_ERRORS,
        payload: error.response.data
      });
    });
};

export const getTest = (testId) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios.get(`/tests/${testId}`)
    .then(response => {
      dispatch({
        type: SET_TEST,
        payload: response.data
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch(error => console.log());
};