import { connect } from 'react-redux';

import { leaveChannel } from '../../../actions/channel_actions';
import { fetchCurrentUser } from '../../../actions/session_actions';

import Users from './users';

const mapStateToProps = (state, ownProps) => {
  let users = {}
  if (state.users.allUsers) {
    users = state.users.allUsers
  }
  return {
    users: users,
    currentUserId: state.session.currentUser.id,
    currentUserUsername: state.session.currentUser.username,
    roomId: ownProps.params.id,
    genChannelRoomId: state.session.currentUser.gen_channel_id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    leaveChannel: (channel) => dispatch(leaveChannel(channel)),
    fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
