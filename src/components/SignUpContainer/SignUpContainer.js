import React from 'react';
import './SignUpContainer.css';
import SignUpForm from '../SignUpForm/SignUpForm';

function SignUpContainer(props) {
  return (
    <div className="SignUpContainer">
      <SignUpForm history={props.history.history}/>
    </div>
  )
}


export default SignUpContainer;
