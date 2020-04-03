import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import { URL } from './applicationConstants';
import { checkToken } from './actions/currentUserActions';
import HomeContainer from './containers/HomeContainer';
import LoginContainer from './containers/LoginContainer';

class App extends React.Component{
  render() {
    return (
      <BrowserRouter history={this.props.history}>
        <Switch>
          <PrivateRoute 
            exact path="/" 
            component={HomeContainer} 
            loginStatus={this.props.currentUser.loggedIn} 
          />

          <Route path="/login" component={LoginContainer} />

          <PrivateRoute 
            path="/home"
            component={HomeContainer}
            loginStatus={this.props.currentUser.loggedIn}
          />

        </Switch>
      </BrowserRouter>
    );
  }
}

const PrivateRoute = ({ component: Component, loginStatus, ...rest }) => {
  return (
    <Route {...rest}
    render={ props => (loginStatus ? <Component { ...props } /> : <Redirect to="/login" />)} />
  )
}

const mapStateToProps = state => {
  return ({
    currentUser: state.currentUser
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    checkToken: () => dispatch(checkToken(URL))
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
