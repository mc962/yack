import { connect } from 'react-redux';

import SignupForm from './signup_form';

import { login, signup, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  let loginStatus = false;
  if (state.session.currentUser) {
    loginStatus = true;
  }

  return {
    errors: state.session.errors,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (user) => dispatch(signup(user)),
    guestLogin: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm)
