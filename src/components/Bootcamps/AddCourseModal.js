import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import axios from 'axios';

const AddCourseModal = ({ selected }) => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [course, setCourse] = useState({
    scholarhipsAvailable: true
  });
  const [error, setError] = useState('');

  const addCourseToBootcamp = e => {
    e.preventDefault();

    axios
      .post(
        `https://bootcamper.ml/api/v1/bootcamps/${selected}/courses`,
        course,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`
          }
        }
      )
      .then(data => console.log(data))
      .catch(err => setError(err.response.data.error));
  };

  return (
    <div>
      <div id="addCourseToBootcamp" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h4>Add Course to Bootcamp</h4>

          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    value={course.title}
                    onChange={e =>
                      setCourse(course, (course.title = e.target.value))
                    }
                    id="first_name"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="first_name">Course Title</label>
                </div>
                <div className="input-field col s6">
                  <input
                    value={course.weeks}
                    onChange={e =>
                      setCourse(course, (course.weeks = e.target.value))
                    }
                    id="last_name"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="last_name">Course Duration</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    placeholder="Course description"
                    id="disabled"
                    value={course.description}
                    onChange={e =>
                      setCourse(course, (course.description = e.target.value))
                    }
                    type="text"
                    className="materialize-textarea"
                  ></textarea>
                  <label htmlFor="disabled">Description</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s6">
                  <input
                    value={course.tuition}
                    onChange={e =>
                      setCourse(course, (course.tuition = e.target.value))
                    }
                    id="phone"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="phone">Tuition</label>
                </div>

                <div className="input-field col s6">
                  <input
                    value={course.minimumSkill}
                    onChange={e =>
                      setCourse(course, (course.minimumSkill = e.target.value))
                    }
                    id="email"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="email">Minimum Skills Req.</label>
                </div>
              </div>
            </form>

            {error && <p className="red-text center-align">{error}</p>}
          </div>
        </div>
        <div className="modal-footer">
          <button className="modal-close waves-effect waves-green btn-flat">
            Close
          </button>

          <button
            className="waves-effect waves-green btn-flat"
            data-dismiss="addCourseToBootcamp"
            onClick={e => addCourseToBootcamp(e)}
          >
            ADD COURSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCourseModal;
