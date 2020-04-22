import React, { useEffect, useState } from 'react';
import Navbar from '../../pages/Navbar';
import Footer from '../../pages/Footer';
import M from 'materialize-css';
import axios from 'axios';
import CreateBootcampModal from './CreateBootcampModal';
import ViewBootcampDetails from './ViewBootcampDetails';

const ViewBootcamps = () => {
  useEffect(() => {
    M.AutoInit();
    getData();
  }, []);

  const [bootcamps, setBootcamps] = useState([]);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState('');

  const getData = () => {
    axios
      .get('https://bootcamper.ml/api/v1/bootcamps')
      .then(data => setBootcamps(data.data.data))
      .catch(err => setError(err.response.data.error));
  };

  return (
    <div>
      <Navbar createBootcamp={true} />

      <div className="row">
        {bootcamps.map(bootcamp => {
          return (
            <div className="col s3 m3" key={bootcamp.id}>
              <div className="card">
                <div className="card-image">
                  <img
                    draggable="false"
                    alt="bootcamp_thumbnail"
                    src="https://www.trilogyed.com/blog/wp-content/uploads/2018/05/columbia_coding_boot_camp2_brandon_colbert.jpg"
                  />
                  <span className="card-title">{bootcamp.name}</span>
                </div>
                <div className="card-content">
                  <p>{bootcamp.description}</p>

                  <br />
                  <div>
                    {bootcamp.careers.map((career, index) => {
                      return (
                        <span key={index} className="chip">
                          {career}
                        </span>
                      );
                    })}
                  </div>

                  <div style={{ marginTop: '10px', marginBottom: '30px' }}>
                    <span
                      className={`new badge red ${
                        bootcamp.housing ? 'green' : 'red'
                      } `}
                      data-badge-caption="Housing"
                    ></span>

                    <span
                      className={`new badge red ${
                        bootcamp.jobAssistance ? 'green' : 'red'
                      } `}
                      data-badge-caption="Job Assistance"
                    ></span>

                    <span
                      className={`new badge red ${
                        bootcamp.jobGrarantee ? 'green' : 'red'
                      } `}
                      data-badge-caption="Job Grarantee"
                    ></span>

                    <span
                      className={`new badge red ${
                        bootcamp.acceptGi ? 'green' : 'red'
                      } `}
                      data-badge-caption="Scholarship"
                    ></span>
                  </div>
                </div>
                <div className="card-action">
                  <a
                    className="modal-trigger"
                    href="#viewBootcampDetails"
                    data-target="viewBootcampDetails"
                    onClick={() => setSelected(bootcamp._id)}
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        <ViewBootcampDetails bootcamps={bootcamps} selected={selected} />

        <CreateBootcampModal />
      </div>

      {/*  MODAL  */}
      {/* <a className="waves-effect waves-light btn modal-trigger" href="#modal1">
        Modal
      </a>

      <div id="modal1" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h4>Modal Header</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Agree
          </a>
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default ViewBootcamps;
