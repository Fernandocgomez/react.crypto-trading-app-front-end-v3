import React from 'react';
import './LoginContainer.css';
import LoginForm from '../LoginForm/LoginForm';

function LoginContainer(props) {
  return (
    <div className="LoginContainer">
      <LoginForm history={props.history.history}/>
    </div>
  )
}
 


export default LoginContainer;
