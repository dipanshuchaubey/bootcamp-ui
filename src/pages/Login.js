import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const submitLoginForm = e => {
    e.preventDefault();

    axios
      .post('https://bootcamper.ml/api/v1/auth/login', {
        email,
        password
      })
      .then(data => {
        console.log(data.data.token);

        localStorage.setItem('JWT_TOKEN', data.data.token);
      })
      .catch(err => setError(err.response.data.error));
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-content">
          <div className="row">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="email"
                    required
                    type="email"
                    className="validate"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                  />
                  <label htmlFor="email">Email</label>
                </div>
              </div>

              <div className="row">
                <div className="input-field col s12">
                  <input
                    id="password"
                    type="password"
                    required
                    className="validate"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <label htmlFor="password">Password</label>
                </div>
              </div>

              {error && <p className="red-text center-align">{error}</p>}
              <div className="row">
                <button
                  type="submit"
                  className="col s12 waves-effect waves-light btn-small block"
                  onClick={e => submitLoginForm(e)}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
