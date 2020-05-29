import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import factsReducer from './reducers/factsReducer';
import imageReducer from './reducers/imageReducer';

const rootReducer = combineReducers({
  fact: factsReducer,
  image: imageReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;