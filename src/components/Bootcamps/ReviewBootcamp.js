import React, { useState } from 'react';
import axios from 'axios';

const ReviewBootcamp = ({ selected }) => {
  const [review, setReview] = useState({});
  const [error, setError] = useState('');

  const addBootcampReview = e => {
    e.preventDefault();

    axios
      .post(
        `https://bootcamper.ml/api/v1/bootcamps/${selected}/reviews`,
        review,
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
      <div id="addBootcampReview" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h4>Review Bootcamp</h4>

          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6">
                  <input
                    value={review.title}
                    onChange={e =>
                      setReview(review, (review.title = e.target.value))
                    }
                    id="review_title"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="review_title">Review Title</label>
                </div>
                <div className="input-field col s6">
                  <input
                    value={review.rating}
                    onChange={e =>
                      setReview(review, (review.rating = e.target.value))
                    }
                    id="review_rating"
                    type="text"
                    className="validate"
                  />
                  <label htmlFor="review_rating">Review Rating</label>
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    placeholder="Write your review here..."
                    id="review_text"
                    value={review.text}
                    onChange={e =>
                      setReview(review, (review.text = e.target.value))
                    }
                    type="text"
                    className="materialize-textarea"
                  ></textarea>
                  <label htmlFor="review_text">Review</label>
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
            onClick={e => addBootcampReview(e)}
          >
            ADD REVIEW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewBootcamp;
