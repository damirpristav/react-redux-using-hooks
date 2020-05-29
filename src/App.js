import React, { useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { getFacts, getRandomFact } from './store/actions/factsActions';
import { getImage } from './store/actions/imageActions';
import MainContent from './components/MainContent';

function App() {
  const [type, setType] = useState('');
  const dispatch = useDispatch();
  const loading = useSelector(state => state.fact.loading);
  const error = useSelector(state => state.fact.error);
  const imageLoading = useSelector(state => state.image.loading);
  const imageError = useSelector(state => state.image.error);

  const getFactsHandler = () => {
    dispatch(getFacts());
    setType('facts');
  }

  const getRandomFactHandler = () => {
    dispatch(getRandomFact('dog,cat,horse'));
    setType('random');
  }

  const getRandomImageHandler = () => {
    dispatch(getImage());
    setType('image');
  }

  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid text-center">
        <div className="container">
          <h1 className="display-3 mb-5">Animals Facts &amp; Images</h1>
          <button className="btn btn-primary mr-2"onClick={getFactsHandler}>Get Facts</button>
          <button className="btn btn-secondary mr-2"onClick={getRandomFactHandler}>Get Random Fact</button>
          <button className="btn btn-info"onClick={getRandomImageHandler}>Get Random Dog Image</button>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            { type === 'image'
              ? <MainContent type={type} loading={imageLoading} error={imageError} />
              : <MainContent type={type} loading={loading} error={error} />
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
