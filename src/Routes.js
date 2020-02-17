import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import Main from './pages/Main';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/" component = {LoginForm} />
          <Route exact path = "/Main" component = {Main} />
        </Switch>
      </Router>
    )
  }
}

export default Routes;