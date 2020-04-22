import React, { useEffect } from 'react';
import M from 'materialize-css';

const CreateBootcampModal = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);
  return (
    <div>
      <div id="createBootcamp" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h4>Create New Bootcamp</h4>

          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input id="first_name" type="text" className="validate" />
                  <label htmlFor="first_name">Bootcamp Name</label>
                </div>
                <div className="input-field col s6">
                  <input id="last_name" type="text" className="validate" />
                  <label htmlFor="last_name">Bootcamp Website</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    placeholder="Bootcamp description"
                    id="disabled"
                    type="text"
                    className="materialize-textarea"
                  ></textarea>
                  <label htmlFor="disabled">Description</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s4">
                  <input id="phone" type="text" className="validate" />
                  <label htmlFor="phone">Phone</label>
                </div>

                <div className="input-field col s4">
                  <input id="email" type="text" className="validate" />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="input-field col s4">
                  <input id="address" type="text" className="validate" />
                  <label htmlFor="address">Address</label>
                </div>
              </div>

              <div className="row">
                <div className="col s3">
                  <label>
                    <input type="checkbox" />
                    <span>Housing</span>
                  </label>
                </div>

                <div className="col s3">
                  <label>
                    <input type="checkbox" />
                    <span>Job Assistance</span>
                  </label>
                </div>

                <div className="col s3">
                  <label>
                    <input type="checkbox" />
                    <span>Job Guarantee</span>
                  </label>
                </div>

                <div className="col s3">
                  <label>
                    <input type="checkbox" />
                    <span>Scholarship</span>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <button className="modal-close waves-effect waves-green btn-flat">
            Close
          </button>

          <button className="waves-effect waves-green btn-flat">
            Create Bootcamp
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBootcampModal;
