import { GET_IMAGE, SET_IMAGE_ERROR, SET_IMAGE_LOADING } from '../actions/types';

const initialState = {
  dog: '',
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case GET_IMAGE:
      return {
        dog: action.payload,
        loading: false,
        error: null
      }
    case SET_IMAGE_LOADING:
      return {
        loading: true,
        dog: '',
        error: null
      }
    case SET_IMAGE_ERROR:
      return {
        error: action.payload,
        loading: false,
        dog: ''
      }
    default:
      return state;
  }
}