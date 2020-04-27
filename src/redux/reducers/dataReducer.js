import {SET_TESTS, LOADING_DATA, ADD_TEST, SET_TEST, DELETE_TEST, SET_QUIZZES, SET_QUIZ, SET_QUIZ_RESULTS} from "../types";

const initialState = {
  tests: [],
  test: {},
  quizzes: [],
  quiz: {},
  quizResults: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case SET_TESTS:
      return {
        ...state,
        tests: action.payload,
        loading: false
      };
    case ADD_TEST:
      return {
        ...state,
        tests: [
          action.payload,
          ...state.tests
        ]
      };
    case SET_TEST:
      return {
        ...state,
        test: action.payload,
        loading: false
      };
    case DELETE_TEST:
      let index = state.tests.findIndex(test => test.testId === action.payload);
      state.tests.splice(index, 1);
      return {
        ...state
      };
    case SET_QUIZZES:
      return {
        ...state,
        quizzes: action.payload,
        loading: false
      };
    case SET_QUIZ:
      return {
        ...state,
        quiz: action.payload,
        loading: false
      };
    case SET_QUIZ_RESULTS:
      return {
        ...state,
        quizResults: action.payload,
        loading: false
      };
    default:
      return state;
  }
}