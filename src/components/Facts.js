import React from 'react';

const Facts = props => {
  return(
    <div className="d-flex flex-wrap">
      {props.data.map(fact => (
        <div className="col-md-6" key={fact._id}>
          <div className="card border-info mb-4">
            <div className="card-header bg-info text-white d-flex justify-content-between">
              <span>ID: {fact._id}</span>
              <span>{fact.upvotes} likes</span>
            </div>
            <div className="card-body">
              <blockquote className="blockquote mb-0">
                <p>{fact.text}</p>
                {fact.user &&
                  <footer className="blockquote-footer">
                    By <cite>{fact.user.name.first} {fact.user.name.last}</cite>
                  </footer>
                }
              </blockquote>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Facts;