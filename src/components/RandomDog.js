import React from 'react';

const RandomDog = ({ image }) => {
  return(
    <div className="row">
      <div className="col-6 offset-3">
        <div className="card p-4">
          <img src={image} alt="Random dog" className="card-img-top" />
        </div>
      </div>
    </div>
  );
}

export default RandomDog;