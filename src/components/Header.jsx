import React, {Component} from 'react';

import 'styles/header.sass';

/**
 * Header for the application
 */
export class Header extends Component {
  /**
   * Render
   * @return {JSX.Element}
   */
  render() {
    return (
      <div className="header">
        <img
          className="logo"
          alt="logo"
          src="images/logo@2x.png"
        />
      </div>
    );
  }
}
