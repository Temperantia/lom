import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Login} from './views';

import 'styles/app.sass';

/**
 * The application
 */
export class App extends Component {
  /**
   * Render
   * @return {JSX.Element}
   */
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Login} />
        </div>
      </Router>
    );
  }
}
