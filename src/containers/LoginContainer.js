import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/currentUserActions';
import { URL } from '../applicationConstants';
import ConditionalRedirect from '../components/ConditionalRedirect';
import ConditionalMessage from '../components/ConditionalMessage';
import LoginForm from '../components/LoginForm';

class LoginContainer extends React.Component {

  render() {
    return (
      <div>
        <div className="container">
          <ConditionalMessage 
            message="Login Failed. Please Try Again." 
            condition={this.props.currentUser.loginFail}
            className="error"  
          />
        </div>
        <ConditionalRedirect to="/home" condition={this.props.currentUser.loggedIn} />
        <LoginForm login={ this.props.login } />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    currentUser: state.currentUser
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    login: (name, password) => dispatch(login(URL, name, password))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);