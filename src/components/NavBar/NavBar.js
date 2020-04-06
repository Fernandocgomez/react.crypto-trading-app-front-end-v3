import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.png'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/AuthUser/AuthUserActions';


function NavBar (props) { 
  return (
    <div className="ui large menu">
    <Link to="/">
      <img src={logo} className="item" style={{height: "75px"}} alt="logo"></img>
    </Link>
    <div className="menu">

      <div className="item">
        <Link to="/">Prices</Link>
      </div>

      {props.userLogin ? (
        <div className="item">
        <Link to="/portfolio">Portafolio</Link>
      </div>
      ) : (
        <></>
      )}
      
      {props.userLogin ? (
        <div className="item">
        <Link to="/my-account">My Account</Link>
      </div>
      ) : (
        <></>
      )}
      

    </div>
    <div className="right menu">

      {props.userLogin ? (
        <div className="item" onClick={props.logoutUser}>
        <Link className="ui red inverted button" to="/">Logout</Link>
        </div>
      ) : (
      <>
        <div className="item">
        <Link className="ui button inverted green" to="/login" >Log In</Link>
        </div>

      <div className="item">
        <Link className="ui button inverted blue" to="/signup">Sign Up</Link>
      </div>
      </>
      )}


    </div>
  </div>
  )
}

const mapStateToProps = state => {
  return {
    userLogin: state.authUserReducer.userLogin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logoutUser: () =>
      dispatch(logoutUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
