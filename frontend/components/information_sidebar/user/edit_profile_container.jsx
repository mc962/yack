import { connect } from 'react-redux';

import { updateUser, toggleUserInfoModal } from '../../../actions/session_actions'

import EditProfile from './edit_profile';

const mapStateToProps = (state) => {
  return {
    firstName: state.session.currentUser.first_name,
    lastName: state.session.currentUser.last_name,
    imageUrl: state.session.currentUser.image_url,
    currentUserId: state.session.currentUser.id
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleUserInfoModal: () => dispatch(toggleUserInfoModal()),
    updateUser: (formData) => dispatch(updateUser(formData))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile)
