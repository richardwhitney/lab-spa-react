import {SET_TESTS, LOADING_DATA, ADD_TEST, SET_TEST, DELETE_TEST} from "../types";

const initialState = {
  tests: [],
  test: {},
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
    default:
      return state;
  }
}