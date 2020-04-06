import React, { useState } from "react";
import "./EditAccount.css";
import { Button, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { editUser } from "../../redux/EditAccount/EditAccountActions";

function EditAccount(props) {
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState(props.user.first_name);
  const [lastName, setLastName] = useState(props.user.last_name);
  const [username, setUsername] = useState(props.user.username);
  const [email, setEmail] = useState(props.user.email);

  return (
    
    <div className="EditAccount ui container">
      <div className="ui equal width grid">
        <div className="sixteen wide column">
          <div className="ui segment">
            <Header as="h2" textAlign="center" style={{ color: "#16ab7e" }}>
              Your Personal Informatino
            </Header>
            <form
              className="ui form"
              onSubmit={(e) =>
                props.editUser(
                  e,
                  firstName,
                  lastName,
                  username,
                  email,
                  password,
                  localStorage.user_id
                )
              }
            >
              <div className="equal width fields">
                <div className="field">
                  {props.firstNameError ? (
                    <div className="ui pointing below prompt label">
                    First name can't be blank, only letters
                    </div>
                  ) : (<></>)}
                  <div className="ui fluid input">
                    <input
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">

                  {props.lastNameError ? (
                    <div className="ui pointing below prompt label">
                    Last name can't be blank, only letters
                    </div>
                  ) : (
                    <></>
                  )}
                
                  <div className="ui fluid input">
                    <input
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="field">
                {props.usernameError ? (
                  <div className="ui pointing below prompt label">
                  Username can't be blank, only letters and numbers, minimum 8 characters, max 15 characters
                 </div>
                ) : (
                  <></>
                )}

                {props.usernameHasBeenTaken ? (
                  <div className="ui pointing below prompt label">
                  Username has already been taken
                 </div>
                ) : (
                  <></>
                )}
                
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="field">
                {props.emaillError ? (
                  <div className="ui pointing below prompt label">
                  Email is not valid
                </div>
                ) : (
                  <></>
                )}

                {props.emailHasBeenTaken ? (
                  <div className="ui pointing below prompt label">
                    Email has already been take
                 </div>
                ) : (
                  <></>
                )}
              
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="field">
                {props.passwordError ? (
                  <div className="ui pointing below prompt label">
                  Password  must contain at least one uppercase, one digit, one special character (!,@,#,$,%,^,*,+), minimum 8 characters, max 15 characters
                </div>
                ) : (
                  <></>
                )}
              
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {password === "" ? (
                <Button
                  style={{ backgroundColor: "#16ab7e", color: "#fff" }}
                  fluid
                  size="large"
                  disabled
                >
                  Update My Personal Information
                </Button>
              ) : (
                <Button
                  style={{ backgroundColor: "#16ab7e", color: "#fff" }}
                  fluid
                  size="large"
                >
                  Update My Personal Information
                </Button>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: (
      event,
      firstName,
      lastName,
      username,
      email,
      password,
      user_id
    ) =>
      dispatch(
        editUser(event, firstName, lastName, username, email, password, user_id)
      ),
  };
};

const mapStateToProps = (state) => {
  return {
    NewUser: state.editUserReducer.user,
    error: state.editUserReducer.error, 
    usernameError: state.editUserReducer.usernameError,
    firstNameError: state.editUserReducer.firstNameError,
    lastNameError: state.editUserReducer.lastNameError,
    passwordError: state.editUserReducer.passwordError,
    emaillError: state.editUserReducer.emaillError,
    emailHasBeenTaken: state.editUserReducer.emailHasBeenTaken,
    usernameHasBeenTaken: state.editUserReducer.usernameHasBeenTaken,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount);
