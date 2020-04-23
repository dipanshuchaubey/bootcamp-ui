import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import axios from 'axios';

const CreateBootcampModal = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  const [bootcamp, setBootcamp] = useState({
    name: null,
    website: null,
    decription: null,
    phone: null,
    email: null,
    address: null,
    housing: false,
    jobAssistance: false,
    jobGuarantee: false,
    acceptGi: false
  });
  const [error, setError] = useState('');

  const createBootcamp = e => {
    e.preventDefault();

    axios
      .post('https://bootcamper.ml/api/v1/bootcamps', bootcamp, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('JWT_TOKEN')}`
        }
      })
      .then(data => console.log(data))
      .catch(err => setError(err.response.data.error));
  };

  return (
    <div>
      <div id="createBootcamp" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h4>Create New Bootcamp</h4>

          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    value={bootcamp.name}
                    onChange={e =>
                      setBootcamp(bootcamp, (bootcamp.name = e.target.value))
                    }
                    id="first_name"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="first_name">Bootcamp Name</label>
                </div>
                <div className="input-field col s6">
                  <input
                    value={bootcamp.website}
                    onChange={e =>
                      setBootcamp(bootcamp, (bootcamp.website = e.target.value))
                    }
                    id="last_name"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="last_name">Bootcamp Website</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    placeholder="Bootcamp description"
                    id="disabled"
                    value={bootcamp.description}
                    onChange={e =>
                      setBootcamp(
                        bootcamp,
                        (bootcamp.description = e.target.value)
                      )
                    }
                    type="text"
                    className="materialize-textarea"
                  ></textarea>
                  <label htmlFor="disabled">Description</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s4">
                  <input
                    value={bootcamp.phone}
                    onChange={e =>
                      setBootcamp(bootcamp, (bootcamp.phone = e.target.value))
                    }
                    id="phone"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="phone">Phone</label>
                </div>

                <div className="input-field col s4">
                  <input
                    value={bootcamp.email}
                    onChange={e =>
                      setBootcamp(bootcamp, (bootcamp.email = e.target.value))
                    }
                    id="email"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="input-field col s4">
                  <input
                    value={bootcamp.address}
                    onChange={e =>
                      setBootcamp(bootcamp, (bootcamp.address = e.target.value))
                    }
                    id="address"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="address">Address</label>
                </div>
              </div>

              <div className="row">
                <div className="col s3">
                  <label>
                    <input
                      type="checkbox"
                      onChange={() =>
                        setBootcamp(
                          bootcamp,
                          (bootcamp.housing = !bootcamp.housing)
                        )
                      }
                    />
                    <span>Housing</span>
                  </label>
                </div>

                <div className="col s3">
                  <label>
                    <input
                      type="checkbox"
                      onChange={() =>
                        setBootcamp(
                          bootcamp,
                          (bootcamp.jobAssistance = !bootcamp.jobAssistance)
                        )
                      }
                    />
                    <span>Job Assistance</span>
                  </label>
                </div>

                <div className="col s3">
                  <label>
                    <input
                      type="checkbox"
                      onChange={() =>
                        setBootcamp(
                          bootcamp,
                          (bootcamp.jobGuarantee = !bootcamp.jobGuarantee)
                        )
                      }
                    />
                    <span>Job Guarantee</span>
                  </label>
                </div>

                <div className="col s3">
                  <label>
                    <input
                      type="checkbox"
                      onChange={() =>
                        setBootcamp(
                          bootcamp,
                          (bootcamp.acceptGi = !bootcamp.acceptGi)
                        )
                      }
                    />
                    <span>Scholarship</span>
                  </label>
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
            onClick={e => createBootcamp(e)}
          >
            Create Bootcamp
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBootcampModal;
