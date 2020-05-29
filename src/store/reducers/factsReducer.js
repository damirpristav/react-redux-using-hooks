import { GET_FACTS, GET_RANDOM_FACT, SET_ERROR, SET_LOADING } from '../actions/types';

const initialState = {
  facts: [],
  randomFact: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_FACTS:
      return {
        ...state,
        facts: action.payload,
        loading: false,
        error: null
      }
    case GET_RANDOM_FACT:
      return {
        ...state,
        randomFact: action.payload,
        loading: false,
        error: null
      }
    case SET_LOADING:
      return {
        loading: true,
        facts: [],
        randomFact: null,
        error: null
      }
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    default:
      return state;
  }
}