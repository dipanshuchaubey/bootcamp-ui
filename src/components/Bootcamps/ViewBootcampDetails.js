import React from 'react';

const ViewBootcampDetails = ({ bootcamps, selected, reviews }) => {
  const index = bootcamps.findIndex(obj => obj._id === selected);

  const bootcamp = bootcamps[index];

  return (
    <div>
      <div id="viewBootcampDetails" className="modal modal-fixed-footer">
        {bootcamp && (
          <div className="modal-content">
            <h4>{bootcamp.name}</h4>

            <div className="row">
              {bootcamp.courses.map(course => {
                return (
                  <div className="col s6 m6" key={course._id}>
                    <div className="card blue-grey darken-1">
                      <div className="card-content white-text">
                        <span className="card-title">{course.title}</span>
                        <p>{course.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <h4>Reviews</h4>

            {reviews &&
              reviews.map(review => {
                return (
                  <ul className="collection with-header" key={review._id}>
                    <li className="collection-header">
                      <h4>{review.title}</h4>
                    </li>
                    <li className="collection-item">
                      <div>{review.text}</div>
                    </li>
                  </ul>
                );
              })}
          </div>
        )}
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Close
          </a>
        </div>
      </div>
    </div>
  );
};

export default ViewBootcampDetails;
