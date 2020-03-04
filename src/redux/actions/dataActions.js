import { SET_TESTS, LOADING_DATA, } from '../types';
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