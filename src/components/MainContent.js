import React from 'react';
import { useSelector } from 'react-redux';

import Facts from './Facts';
import RandomFact from './RandomFact';
import RandomDog from './RandomDog';
import Error from './Error';

const MainContent = ({ type, loading, error }) => {
  const facts = useSelector(state => state.fact.facts);
  const randomFact = useSelector(state => state.fact.randomFact);
  const image = useSelector(state => state.image.dog);
  let content = null;

  if(type === 'facts' && facts.length > 0) {
    content = <Facts data={facts} />;
  }else if(type === 'random' && randomFact) {
    content = <RandomFact data={randomFact} />;
  }else if(type === 'image' && image !== '') {
    content = <RandomDog image={image} />;
  }

  if(error) {
    content = <Error msg={error} />;
  }

  return(
    <div className="py-5">
      { type === '' && <h2 className="display-4 text-center">Please click one of the buttons to get data</h2> }
      { loading && <h2 className="display-4 text-center">Loading...</h2> }
      { content }
    </div>
  );
}

export default MainContent;