import React from 'react';

const Error = ({ msg }) => {
  return(
    <div className="alert alert-danger text-center" role="alert">
      <p className="lead mb-0">{msg}</p>
    </div>
  );
}

export default Error;