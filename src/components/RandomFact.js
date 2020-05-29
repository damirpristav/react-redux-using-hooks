import React from 'react';

const RandomFact = ({ data }) => {
  return(
    <div className="card text-center border-danger">
      <div className="card-header bg-danger text-white">
        Random fact({data.type})
      </div>
      <div className="card-body">
        <p className="lead">{data.text}</p>
      </div>
    </div>
  );
}

export default RandomFact;