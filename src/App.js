import React from 'react';
import Login from './pages/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
// import decode from 'jwt-decode';
import ViewBootcamps from './components/Bootcamps/ViewBootcamps';

// if (localStorage.getItem('JWT_TOKEN')) {
//   const user = decode(localStorage.getItem('JWT_TOKEN'));
// }

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={ViewBootcamps} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
