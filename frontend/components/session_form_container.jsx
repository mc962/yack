import { connect } from 'react-redux';
import SessionForm from './session_form';

import { login, signup, clearErrors } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let loginStatus;
  if (state.session.currentUser) {
    loginStatus = true;
  } else {
    loginStatus = false;
  }
  
  let errors = state.session.errors;

  let form = ownProps.route.path;
  return {
    loggedIn: loginStatus,
    errors: errors,
    formType: form
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let sendForm;

  if (ownProps.route.path === 'login') {
    sendForm = (user) => dispatch(login(user));
  } else if (ownProps.route.path === 'signup') {
    sendForm = (user) => dispatch(signup(user));
  }

  return {
    processForm: sendForm,
    guestLogin: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
