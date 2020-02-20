import React, {Component} from "react";
import {Button, Form, Grid, Header, Segment, Label, Message } from "semantic-ui-react";
import axios from 'axios';
import {Link} from "react-router-dom";

class Login extends Component{

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loading: false,
      errors: {}
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true
    });
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    axios.post('/login', userData)
      .then(result => {
        console.log(result.data);
        localStorage.setItem('FBIdToken', `Bearer ${result.data.token}`);
        this.setState({
          loading: false
        });
        this.props.history.push('/home');
      })
      .catch(error => {
        this.setState({
          errors: error.response.data,
          loading: false
        })
        console.log(error.response.data);
      });
  };

  handleChange = (event, result) => {
    const {name, value} = result;
    this.setState({
      [name]: value
    });
  };

  render() {
    const {errors, loading} = this.state;
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
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

export default Login