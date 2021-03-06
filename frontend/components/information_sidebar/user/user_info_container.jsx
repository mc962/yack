import { connect } from 'react-redux';

import { leaveChannel } from '../../../actions/channel_actions';
import { fetchCurrentUser, toggleUserInfoModal } from '../../../actions/session_actions';

import UserInfo from './user_info';

const mapStateToProps = (state, ownProps) => {
  let pictureUrl = ""
  let username = ""
  let email = ""
  let firstName = ""
  let lastName = ""
  let infoUser;
  let users = {}

  if (parseInt(ownProps.params.user_id) === parseInt(state.session.currentUser.id)) {
    infoUser = state.session.currentUser
    
  } else {
    if (state.users.allUsers) {
      infoUser = state.users.allUsers[ownProps.params.user_id]
    }
  }

  if (state.channels.currentChannel) {
    users = state.channels.currentChannel.users
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
    lastName: lastName,
    currentUserId: state.session.currentUser.id,
    currentUserUsername: state.session.currentUser.username,
    roomId: ownProps.params.id,
    users: users,
    genChannelRoomId: state.session.currentUser.gen_channel_id,
    userInfoModalOpen: state.modals.userInfoModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    leaveChannel: (channel) => dispatch(leaveChannel(channel)),
    fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
    toggleUserInfoModal: () => dispatch(toggleUserInfoModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo)
