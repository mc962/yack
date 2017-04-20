import { connect } from 'react-redux';

import EditProfile from './edit_profile';

const mapStateToProps = (state) => {
  return {
    firstName: state.session.currentUser.first_name,
    lastName: state.session.currentUser.last_name,
    imageUrl: state.session.currentUser.image_url
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile)
