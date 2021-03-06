import React, { useEffect, useState } from 'react';
import Navbar from '../../pages/Navbar';
import Footer from '../../pages/Footer';
import M from 'materialize-css';
import axios from 'axios';
import decode from 'jwt-decode';
import CreateBootcampModal from './CreateBootcampModal';
import ViewBootcampDetails from './ViewBootcampDetails';
import AddCourseModal from './AddCourseModal';
import ReviewBootcamp from './ReviewBootcamp';

const ViewBootcamps = () => {
  useEffect(() => {
    M.AutoInit();
    getData();
  }, []);

  let role;
  let user;

  if (localStorage.getItem('JWT_TOKEN')) {
    user = decode(localStorage.getItem('JWT_TOKEN'));

    if (user) {
      role = user.role;
    }
  }

  const [bootcamps, setBootcamps] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');
  const [selected, setSelected] = useState('');

  const getData = () => {
    axios
      .get('https://bootcamper.ml/api/v1/bootcamps')
      .then(data => setBootcamps(data.data.data))
      .catch(err => setError(err.response.data.error));
  };

  const getReviews = id => {
    axios
      .get(`https://bootcamper.ml/api/v1/bootcamps/${id}/reviews`)
      .then(data => setReviews(data.data.data))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Navbar
        createBootcamp={['publisher', 'admin'].includes(role) ? true : false}
        user={user}
      />

      <div className="row">
        {error && <p className="red-text center-align">{error}</p>}

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
                    onClick={() => {
                      setSelected(bootcamp._id);
                      getReviews(bootcamp._id);
                    }}
                  >
                    View Details
                  </a>
                  {['publisher', 'admin'].includes(role) && (
                    <a
                      className="modal-trigger"
                      href="#addCourseToBootcamp"
                      data-target="addCourseToBootcamp"
                      onClick={() => {
                        setSelected(bootcamp._id);
                      }}
                    >
                      Add Course
                    </a>
                  )}
                  {role === 'user' && (
                    <a
                      className="modal-trigger"
                      href="#addBootcampReview"
                      data-target="addBootcampReview"
                      onClick={() => {
                        setSelected(bootcamp._id);
                      }}
                    >
                      Review Bootcamp
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        <ViewBootcampDetails
          bootcamps={bootcamps}
          selected={selected}
          reviews={reviews}
        />

        <AddCourseModal selected={selected} />

        <ReviewBootcamp selected={selected} />

        <CreateBootcampModal selected={selected} />
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
