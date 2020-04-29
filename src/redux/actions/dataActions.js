import {
  SET_TESTS,
  LOADING_DATA,
  LOADING_UI,
  STOP_LOADING_UI,
  SET_ERRORS,
  CLEAR_ERRORS,
  ADD_TEST,
  SET_TEST,
  DELETE_TEST,
  SET_QUIZZES,
  SET_QUIZ,
  SET_QUIZ_RESULTS, ADD_QUIZ_RESULT, ADD_QUIZ
} from '../types';
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

export const editTest = (updatedTest, testId) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios.put(`test/${testId}`, updatedTest)
    .then(() => {
      dispatch(getTest(testId));
    })
    .catch(error => console.log(error));
};

export const deleteTest = (testId, history) => dispatch => {
  dispatch({ type: LOADING_UI});
  axios.delete(`/test/${testId}`)
    .then(() => {
      dispatch({ type: DELETE_TEST, payload: testId });
      dispatch({ type: STOP_LOADING_UI });
      history.push('/testhub');
    })
    .catch(error => console.log(error));
};

export const getQuizzes = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios.get('/quizzes')
    .then(result => {
      dispatch({
        type: SET_QUIZZES,
        payload: result.data
      })
    })
    .catch(error => {
      dispatch({
        type: SET_QUIZZES,
        payload: []
      })
    })
};

export const getQuiz = (quizId) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios.get(`/quizzes/${quizId}`)
    .then(response => {
      dispatch({
        type: SET_QUIZ,
        payload: response.data
      });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch(error => console.log());
};

export const getQuizResults = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios.get('/quizResults')
    .then(result => {
      dispatch({
        type: SET_QUIZ_RESULTS,
        payload: result.data
      })
    })
    .catch(error => {
      dispatch({
        type: SET_QUIZ_RESULTS,
        payload: []
      })
    })
};

export const addQuizResult = (newQuizResult, history) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios.post('/quizResults', newQuizResult)
    .then(response => {
      dispatch({
        type: ADD_QUIZ_RESULT,
        payload: response.data
      });
      history.push('/quizhub');
    })
    .catch(error => console.log(error));
};

export const addQuiz = (newQuiz) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios.post('/quiz', newQuiz)
    .then(response => {
      dispatch({
        type: ADD_QUIZ,
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

export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};