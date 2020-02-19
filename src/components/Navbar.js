import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Menu} from "semantic-ui-react";

class Navbar extends Component {
  render() {
    return (
      <Menu inverted>
        <Menu.Menu position="left">
          <Link to="/">
            <Menu.Item name="welcome">
              Lab
            </Menu.Item>
          </Link>
        </Menu.Menu>

        <Menu.Menu position="right">
          <Link to="/login">
            <Menu.Item name="login">
              Login
            </Menu.Item>
          </Link>
          <Link to="/signup">
            <Menu.Item name="signup">
              Signup
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar;