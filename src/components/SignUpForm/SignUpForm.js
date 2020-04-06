import React, { useState } from "react";
import "./SignUpForm.css";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createNewUser } from "../../redux/SignUpForm/SignUpFormActions";

function SignUpForm(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [email, setEmail] = useState("");
  const [email_confirmation, setEmail_confirmation] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");

  const paramsObj = {
    username: username.toLowerCase(),
    password: password,
    password_confirmation: password_confirmation,
    email: email.toLowerCase(),
    email_confirmation: email_confirmation.toLowerCase(),
    first_name: first_name.toLowerCase(),
    last_name: last_name.toLowerCase()
  };

  return (
    <div className="SignUpForm">
      <Grid
        textAlign="center"
        style={{ height: "85vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 550 }}>
          <Header as="h2" textAlign="center" style={{ color: "#16ab7e" }}>
            Create Your Account
          </Header>

          <Form
            size="large"
            onSubmit={event => props.createNewUser(paramsObj, event, props.history)}
          >
            <Segment stacked>
              <Form.Group widths="equal">

                {props.firstNameError ? (
                <Form.Input
                  fluid
                  placeholder="First name"
                  onChange={e => setFirst_name(e.target.value)}
                  error="First name can't be blank, only letters are allowed"
                />
                ) : (
                <Form.Input
                  fluid
                  placeholder="First name"
                  onChange={e => setFirst_name(e.target.value)}
                />
                )}

                
                {props.lastNameError ? (
                  <Form.Input
                  fluid
                  placeholder="Last name"
                  onChange={e => setLast_name(e.target.value)}
                  error="Last name can't be blank, only letters are allowed"
                />
                ) : (
                  <Form.Input
                  fluid
                  placeholder="Last name"
                  onChange={e => setLast_name(e.target.value)}
                />
                )}
                
              </Form.Group>

              {props.usernameError ? (
                <Form.Input
                  fluid
                  placeholder="Username"
                  onChange={e => setUsername(e.target.value)}
                  error="Username can't be blank, only letters and numbers, minimum is 8 characters, max is 15 characters"
                />
              ) : (props.usernameHasBeenTaken ? (
                <Form.Input
                  fluid
                  placeholder="Username"
                  onChange={e => setUsername(e.target.value)}
                  error="Username has already been taken"
                />
              ) : (

              <Form.Input
                fluid
                placeholder="Username"
                onChange={e => setUsername(e.target.value)}
              />
              
              ))}

                


                {props.emaillError ? (
                  <Form.Input
                  fluid
                  placeholder="E-mail address"
                  onChange={e => setEmail(e.target.value)}
                  error="email can't be blank, needs to be a valid email"
                />
                ) : (
                  props.emailHasBeenTaken 
                    ? (<Form.Input
                      fluid
                      placeholder="E-mail address"
                      onChange={e => setEmail(e.target.value)}
                      error="Email has already been take"
                    />) 
                    : (<Form.Input
                      fluid
                      placeholder="E-mail address"
                      onChange={e => setEmail(e.target.value)}
                    />)
                )}

                
              
              {props.emailConfimrationError ? (
                <Form.Input
                fluid
                placeholder="Confirm e-mail address"
                onChange={e => setEmail_confirmation(e.target.value)}
                error="Email confirmation doesn't match email"
              />
              ) : (
                <Form.Input
                fluid
                placeholder="Confirm e-mail address"
                onChange={e => setEmail_confirmation(e.target.value)}
              />
              )}
              
              {props.passwordError ? (
                <Form.Input
                fluid
                placeholder="Password"
                type="password"
                onChange={e => setPassword(e.target.value)}
                error="at least one uppercase letter, one number, one special character (!,@,#,$,%,^,*,+,-,=), minimum 8 characters, max 20 characters"
              />
              ) : (
                <Form.Input
                fluid
                placeholder="Password"
                type="password"
                onChange={e => setPassword(e.target.value)}
              />
              )}
              
              {props.passwordConfimrationError ? (
                <Form.Input
                fluid
                placeholder="Confirm password"
                type="password"
                onChange={e => setPassword_confirmation(e.target.value)}
                error="Password confirmation doesn't match Password"
              />
              ) : (
                <Form.Input
                fluid
                placeholder="Confirm password"
                type="password"
                onChange={e => setPassword_confirmation(e.target.value)}
              />
              )}
              
                {(
                  paramsObj.username !== '' && 
                  paramsObj.email !== '' &&
                  paramsObj.email_confirmation !== '' &&
                  paramsObj.first_name !== '' &&
                  paramsObj.last_name !== '' &&
                  paramsObj.password !== '' &&
                  paramsObj.password_confirmation !== ''
                ) 
                ? (
                  <Button
                  style={{ backgroundColor: "#16ab7e", color: "#fff" }}
                  fluid
                  size="large"
                >
                  Create Account
                </Button>
                ) : (
                  <Button
                style={{ backgroundColor: "#16ab7e", color: "#fff" }}
                fluid
                size="large"
                disabled
              >
                Create Account
              </Button>
                )}
              
              
            </Segment>
          </Form>
          
          <Message>
            <Link to="/login">Log in</Link> to your Crypto account
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    createNewUser: (paramsObj, event, history) =>
      dispatch(createNewUser(paramsObj, event, history))
  };
};

const mapStateToProps = state => {
  return {
    user: state.signUpFormReducer.user,
    error: state.signUpFormReducer.error,
    usernameError: state.signUpFormReducer.usernameError,
    firstNameError: state.signUpFormReducer.firstNameError,
    lastNameError: state.signUpFormReducer.lastNameError,
    passwordError: state.signUpFormReducer.passwordError,
    passwordConfimrationError: state.signUpFormReducer.passwordConfimrationError,
    emaillError: state.signUpFormReducer.emaillError,
    emailConfimrationError: state.signUpFormReducer.emailConfimrationError, 
    usernameHasBeenTaken: state.signUpFormReducer.usernameHasBeenTaken, 
    emailHasBeenTaken: state.signUpFormReducer.emailHasBeenTaken
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
