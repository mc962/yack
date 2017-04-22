import { connect } from 'react-redux';

import LoginForm from './login_form';

import { login, clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state) => {

  return {
    currentUser: state.session.currentUser,
    errors: state.session.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    guestLogin: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
