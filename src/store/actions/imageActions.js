import { GET_IMAGE, SET_IMAGE_LOADING, SET_IMAGE_ERROR } from './types';
import { setError, setLoading } from './';

// Get image
export const getImage = () => async dispatch => {
  try {
    dispatch(setLoading(SET_IMAGE_LOADING));
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const resData = await response.json();

    dispatch({
      type: GET_IMAGE,
      payload: resData.message
    });
  }catch(err) {
    dispatch(setError(SET_IMAGE_ERROR, 'Something went wrong'));
  }
}