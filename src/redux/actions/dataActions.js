import {SET_TESTS, LOADING_DATA, LOADING_UI, SET_ERRORS, CLEAR_ERRORS, ADD_TEST} from '../types';
import axios from 'axios';

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
      })
    })
};