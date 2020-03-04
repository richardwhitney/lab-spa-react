import {SET_TESTS, LOADING_DATA} from "../types";

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
    default:
      return state;
  }
}