import React, { Component } from 'react';

import FullScreenMenu from './FullScreenMenu';

import '../css/fonts.css';
import '../css/navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullScreenMenu: false,
    };
  }

  toggleFullScreenMenu() {
    this.setState({ fullScreenMenu: !this.state.fullScreenMenu });
  }

  render() {
    return (
      <div className="navigation">
        <h1 onClick={() => this.toggleFullScreenMenu} className="">hire me</h1>
        {this.state.fullScreenMenu ? <FullScreenMenu toggle={this.toggleFullScreenMenu} /> : null}
      </div>
    );
  }
}

export default Navigation;
