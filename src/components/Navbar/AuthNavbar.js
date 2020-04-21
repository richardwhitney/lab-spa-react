import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import HomeMenuItems from "./HomeMenuItems";
import TestHubMenuItems from "./TestHubMenuItems";
import TestDetailMenuItems from "./TestDetailMenuItems";
import DefaultMenuItems from "./DefaultMenuItems";

class AuthNavbar extends Component {

  render() {
    let pathname = this.props.location.pathname;

    if (pathname === '/home') {
      return <HomeMenuItems/>
    }
    else if (pathname === '/testhub') {
      return <TestHubMenuItems/>
    }
    else if (pathname.includes('/tests/')) {
      return <TestDetailMenuItems/>
    }
    else {
      return <DefaultMenuItems/>
    }
  }
}

export default withRouter(AuthNavbar);