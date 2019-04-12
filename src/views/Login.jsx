import React, {Component} from 'react';

import {Header} from '../components';

import 'styles/login.sass';

/**
 * The login view
 */
export class Login extends Component {
  /**
   * Render
   * @return {JSX.Element}
   */
  render() {
    return (
      <div className="login">
        <Header></Header>
      </div>
    );
  }
}
