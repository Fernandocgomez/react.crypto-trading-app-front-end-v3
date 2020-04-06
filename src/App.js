import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomeContainer from "./components/HomeContainer/HomeContainer";
import LoginContainer from "./components/LoginContainer/LoginContainer";
import SignUpContainer from "./components/SignUpContainer/SignUpContainer";
import { connect } from "react-redux";
import { authUserApp } from "./redux/AuthUser/AuthUserActions";
import MyAccountContainer from "./components/MyAccountContainer/MyAccountContainer";
import PortfolioContainer from './components/PortfolioContainer/PortfolioContainer'

function App(props) {
  useEffect(() => {
    props.authUser();
  }, []);
  return (
    <BrowserRouter>
      <NavBar />

      <Switch>
        <Route
          exact
          path="/"
          component={history => <HomeContainer history={history} />}
        />

        <Route
          exact
          path="/login"
          component={history => <LoginContainer history={history} />}
        />

        <Route
          exact
          path="/signup"
          component={history => <SignUpContainer history={history} />}
        />

        <Route exact path='/portfolio' component={ (history) => <PortfolioContainer history = {history} />}
          />


        <Route
          exact
          path="/my-account"
          component={history => <MyAccountContainer history={history} />}
        />

      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = state => {
  return {
    userLogin: state.authUserReducer.userLogin
  };
};

const mapDispatchToProps = dispatch => {
  return {
    authUser: () => dispatch(authUserApp())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
