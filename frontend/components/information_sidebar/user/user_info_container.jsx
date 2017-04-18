import { connect } from 'react-redux';

import UserInfo from './user_info';

const mapStateToProps = (state, ownProps) => {
  let pictureUrl = ""
  let username = ""
  let email = ""
  let firstName = ""
  let lastName = ""
  let infoUser;
  if (state.users.allUsers) {
    infoUser = state.users.allUsers[ownProps.params.user_id]
  }


  if (infoUser) {
    pictureUrl = infoUser.image_url,
    username = infoUser.username,
    email = infoUser.email,
    firstName = infoUser.first_name,
    lastName = infoUser.last_name
  }

  return {
    pictureUrl: pictureUrl,
    username: username,
    email: email,
    firstName: firstName,
    lastName: lastName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo)
