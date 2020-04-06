import React, { useState } from 'react';
import './LoginForm.css';
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { loginAuth } from '../../redux/LoginForm/LoiginFormActions';

function LoginForm(props) {

  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const params = {
    username: username.toLowerCase(), 
    password: password
  }

  return (
    <div className="LoginForm">
      <Grid textAlign="center" style={{ height: "75vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        {props.newUserWasCreated ? (
          <div className="success-msg-user">New user was succesfully created. Please Login Below!</div>
        ) : (
          <></>)}
        
        <Header as="h2" textAlign="center" style={{ color: "#16ab7e" }}>
          Login To Your Account
        </Header>
        <Form size="large" onSubmit={event => props.login(params, event, props.history)}>
          <Segment stacked>
            
            {props.showError ? (
              <Form.Input fluid placeholder="Username"
              iconPosition='left'
              icon='user'
              onChange={e => setUsername(e.target.value)}
              error="Invalid"
            />
            ) : (
              <Form.Input fluid placeholder="Username"
              iconPosition='left'
              icon='user'
              onChange={e => setUsername(e.target.value)}
            />
            )}
            
            {props.showError ? (
              <Form.Input fluid placeholder="Password" type="password" 
              iconPosition='left'
              icon='lock'
              onChange={e => setPassword(e.target.value)}
              error="Invalid"
            />

            ) : (
              <Form.Input fluid placeholder="Password" type="password" 
              iconPosition='left'
              icon='lock'
              onChange={e => setPassword(e.target.value)}
            />

            )}

            {(
              params.username !== '' &&
              params.password !== ''
            ) ? (
              <Button
              style={{ backgroundColor: "#16ab7e", color: "#fff" }}
              fluid
              size="large"
            >
              Login
            </Button>
            ) : (
              <Button
              style={{ backgroundColor: "#16ab7e", color: "#fff" }}
              fluid
              size="large"
              disabled
            >
              Login
            </Button>
            )}


          </Segment>
        </Form>
        <Message>
          New to us? <Link to="/signup">Sign Up</Link>
        </Message>
      </Grid.Column>
    </Grid>
    </div>
  )
} 

const mapStateToProps = state => {
  return {
    newUserWasCreated: state.signUpFormReducer.newUserWasCreated, 
    token: state.loginFormReducer.token,
    error: state.loginFormReducer.error,
    showError: state.loginFormReducer.showError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (params, event, history) =>
      dispatch(loginAuth(params, event, history))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
