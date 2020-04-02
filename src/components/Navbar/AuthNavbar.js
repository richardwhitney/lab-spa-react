import React, {Component, Fragment} from "react";
import {Link, withRouter} from "react-router-dom";
import {Menu} from "semantic-ui-react";
import HomeMenuItems from "./HomeMenuItems";
import TestHubMenuItems from "./TestHubMenuItems";
import TestDetailMenuItems from "./TestDetailMenuItems";

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
      return <HomeMenuItems/>
    }
  }
}

export default withRouter(AuthNavbar);