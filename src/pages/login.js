import React, {Component} from "react";
import PropTypes from 'prop-types';
import {Button, Form, Grid, Header, Segment, Label, Message } from "semantic-ui-react";

import {Link} from "react-router-dom";

// Redux
import {connect} from 'react-redux';
import {loginUser} from "../redux/actions/userActions";

class Login extends Component{

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
  };

  static getDerivedStateFromProps(props, state) {
    if (props.UI.errors) {
      return { errors: props.UI.errors };
    }
    return null;
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData, this.props.history);
  };

  handleChange = (event, result) => {
    const {name, value} = result;
    this.setState({
      [name]: value
    });
  };

  render() {
    const {UI: {loading}} = this.props;
    const {errors} = this.state;
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' style={{ marginTop: '7em'}}>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' textAlign='center'>
            Login
          </Header>
          <Form size='large'
                loading={!!loading}
                onSubmit={this.handleSubmit}>
            <Segment stacked>
              <Form.Input fluid
                          icon='user'
                          iconPosition='left'
                          placeholder='E-mail address'
                          name='email'
                          value={this.state.email}
                          onChange={this.handleChange}
                          error={!!errors.email}
              />
              {errors.email && <Label pointing color='red'>{errors.email}</Label>}
              <Form.Input fluid
                          icon='lock'
                          iconPosition='left'
                          placeholder='Password'
                          type='password'
                          name='password'
                          value={this.state.password}
                          onChange={this.handleChange}
                          error={!!errors.password}
              />
              {errors.password && <Label pointing color='red'>{errors.password}</Label>}
              <Button color='blue' fluid size='large'>
                Login
              </Button>
              {errors.general && <Label pointing color='red'>{errors.general}</Label> }
            </Segment>
          </Form>
          <Message>
            New to us? <Link to='/signup'>Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
};

export default connect(mapStateToProps, mapActionsToProps)(Login);