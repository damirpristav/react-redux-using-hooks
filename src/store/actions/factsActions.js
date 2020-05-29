import { GET_FACTS, GET_RANDOM_FACT, SET_LOADING, SET_ERROR } from './types';
import { setLoading, setError } from './';

// Get facts
export const getFacts = (type = 'cat') => async dispatch => {
  try {
    dispatch(setLoading(SET_LOADING));
    const response = await fetch(`https://cat-fact.herokuapp.com/facts?animal_type=${type}`);
    const resData = await response.json();

    dispatch({
      type: GET_FACTS,
      payload: resData.all
    });
  }catch(err) {
    dispatch(SET_ERROR, 'Something went wrong!');
  }
}

// Get random fact
export const getRandomFact = (type = 'cat') => async dispatch => {
  try {
    dispatch(setLoading(SET_LOADING));
    const response = await fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=${type}&amount=1`);
    const resData = await response.json();
    
    dispatch({
      type: GET_RANDOM_FACT,
      payload: resData
    });
  }catch (err) {
    dispatch(setError(SET_ERROR, 'Something went wrong!'));
  }
}