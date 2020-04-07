import React, {Component} from "react";
import {Button, Form, Grid, Header, Segment, Label, Message } from "semantic-ui-react";
import {Link} from "react-router-dom";

// Redux
import {connect} from 'react-redux';
import {signupUser} from "../redux/actions/userActions";
import PropTypes from 'prop-types';

class Signup extends Component{

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
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
    this.setState({
      loading: true
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    };
    this.props.signupUser(newUserData, this.props.history)
  };

  handleChange = (event, result) => {
    const {name, value} = result;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { UI: {loading} } = this.props;
    const {errors} = this.state;
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' style={{ marginTop: '7em'}}>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' textAlign='center'>
            Signup
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
              <Form.Input fluid
                          icon='lock'
                          iconPosition='left'
                          placeholder='Confirm Password'
                          type='password'
                          name='confirmPassword'
                          value={this.state.confirmPassword}
                          onChange={this.handleChange}
                          error={!!errors.confirmPassword}
              />
              {errors.confirmPassword && <Label pointing color='red'>{errors.confirmPassword}</Label>}
              <Button color='blue' fluid size='large'>
                Sign Up
              </Button>
              {errors.general && <Label pointing color='red'>{errors.general}</Label>}
            </Segment>
          </Form>
          <Message>
            Already have an account? <Link to='/login'>Login</Link>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}

Signup.propTypes = {
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  user: state.user,
  UI: state.UI
});

export default connect(mapStateToProps, {signupUser})(Signup)