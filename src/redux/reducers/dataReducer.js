import {
  SET_TESTS,
  LOADING_DATA,
  ADD_TEST,
  SET_TEST,
  DELETE_TEST,
  SET_QUIZZES,
  SET_QUIZ,
  SET_QUIZ_RESULTS,
  ADD_QUIZ_RESULT,
  ADD_QUIZ,
  SET_BLOOD_PRODUCTS,
  ADD_BLOOD_PRODUCT,
  SET_BLOOD_PRODUCT,
  DELETE_BLOOD_PRODUCT,
  SET_CONTACTS,
  ADD_CONTACT,
  SET_CONTACT,
  DELETE_CONTACT,
  SET_MARKDOWN,
  SET_NEWS_ITEMS,
  ADD_NEWS_ITEM,
  SET_NEWS_ITEM,
  DELETE_NEWS_ITEM,
  EDIT_NEWS_ITEM,
  EDIT_CONTACT,
  SET_CLINICAL_PATHWAYS,
  SET_CLINICAL_PATHWAY,
  SET_NODE,
  ADD_NODE,
  DELETE_NODE
} from "../types";

const initialState = {
  tests: [],
  test: {},
  quizzes: [],
  quiz: {},
  quizResults: [],
  bloodProducts: [],
  bloodProduct: {},
  contacts: [],
  contact: {},
  markdown: {},
  newsItems: [],
  newsItem: {},
  clinicalPathways: [],
  clinicalPathway: {},
  currentNodes: [],
  currentNode: {},
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
      let testIndex = state.tests.findIndex(test => test.testId === action.payload);
      state.tests.splice(testIndex, 1);
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
    case ADD_QUIZ_RESULT:
      return {
        ...state,
        quizResults: [
          action.payload,
          ...state.quizResults
        ]
      };
    case ADD_QUIZ:
      return {
        ...state,
        quizzes: [
          action.payload,
          ...state.quizzes
        ]
      };
    case SET_BLOOD_PRODUCTS:
      return {
        ...state,
        bloodProducts: action.payload,
        loading: false
      };
    case ADD_BLOOD_PRODUCT:
      return {
        ...state,
        bloodProducts: [
          action.payload,
          ...state.bloodProducts
        ]
      };
    case SET_BLOOD_PRODUCT:
      return {
        ...state,
        bloodProduct: action.payload,
        loading: false
      };
    case DELETE_BLOOD_PRODUCT:
      let productIndex = state.bloodProducts.findIndex(bloodProduct => bloodProduct.productId === action.payload);
      state.bloodProducts.splice(productIndex, 1);
      return {
        ...state
      };
    case SET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
        loading: false
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [
          action.payload,
          ...state.contacts
        ]
      };
    case SET_CONTACT:
      return {
        ...state,
        contact: action.payload,
        loading: false
      };
    case DELETE_CONTACT:
      let contactIndex = state.contacts.findIndex(contact => contact.contactId === action.payload);
      state.contacts.splice(contactIndex, 1);
      return {
        ...state,
        contacts: [
          ...state.contacts
        ]
      };
    case EDIT_CONTACT:
      let editContactIndex = state.contacts.findIndex(contact => contact.contactId === action.payload.contactId);
      return {
        ...state,
        contacts: [
          ...state.contacts.slice(0, editContactIndex),
          action.payload,
          ...state.contacts.slice(editContactIndex + 1)
        ]
      };
    case SET_MARKDOWN:
      return {
        ...state,
        markdown: action.payload,
        loading: false
      };
    case SET_NEWS_ITEMS:
      return {
        ...state,
        newsItems: action.payload,
        loading: false
      };
    case ADD_NEWS_ITEM:
      return {
        ...state,
        newsItems: [
          action.payload,
          ...state.newsItems
        ]
      };
    case SET_NEWS_ITEM:
      return {
        ...state,
        newsItem: action.payload,
        loading: false
      };
    case DELETE_NEWS_ITEM:
      let newsItemIndex = state.contacts.findIndex(newsItem => newsItem.newsItemId === action.payload);
      state.newsItems.splice(newsItemIndex, 1);
      return {
        ...state,
        newsItems: [
          ...state.newsItems
        ]
      };
    case EDIT_NEWS_ITEM:
      let editItemIndex = state.newsItems.findIndex(newsItem => newsItem.newsItemId === action.payload.newsItemId);
      return {
        ...state,
        newsItems: [
          ...state.newsItems.slice(0, editItemIndex),
          action.payload,
          ...state.newsItems.slice(editItemIndex + 1)
        ]
      };
    case SET_CLINICAL_PATHWAYS:
      return {
        ...state,
        clinicalPathways: action.payload,
        loading: false
      };
    case SET_CLINICAL_PATHWAY:
      return {
        ...state,
        clinicalPathway: action.payload,
        currentNodes: [
          ...state.currentNodes,
          action.payload.nodes[0]
        ],
        loading: false
      };
    case ADD_NODE:
      let addNodeIndex = state.clinicalPathway.nodes.findIndex(node => node.id === action.payload);
      return {
        ...state,
        currentNodes: [
          ...state.currentNodes,
          state.clinicalPathway.nodes[addNodeIndex]
        ]
      };
    case DELETE_NODE:
      state.currentNodes.pop();
      return {
        ...state,
        currentNodes: [
          ...state.currentNodes
        ]
      };
    default:
      return state;
  }
}