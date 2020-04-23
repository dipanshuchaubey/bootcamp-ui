import React from 'react';

const ViewBootcampDetails = ({ bootcamps, selected }) => {
  const index = bootcamps.findIndex(obj => obj._id === selected);

  const bootcamp = bootcamps[index];

  return (
    <div>
      <div id="viewBootcampDetails" className="modal modal-fixed-footer">
        {bootcamp && (
          <div className="modal-content">
            <h4>{bootcamp.name}</h4>

            {bootcamp.courses.map(course => {
              return (
                <div className="row" key={course._id}>
                  <div className="col s6 m6">
                    <div className="card blue-grey darken-1">
                      <div className="card-content white-text">
                        <span className="card-title">{course.title}</span>
                        <p>{course.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
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
