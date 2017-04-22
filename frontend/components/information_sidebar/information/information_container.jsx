import { connect } from 'react-redux';

import { leaveChannel } from '../../../actions/channel_actions';
import { fetchCurrentUser } from '../../../actions/session_actions';


import Information from './information';

const mapStateToProps = (state, ownProps) => {
  let createdAt = '';
  let roomPurpose = '';
  let users = [];
  let roomTitle= '';
  let usersCount='';

  if (state.channels.currentChannel) {
    createdAt = state.channels.currentChannel.created_at;
    roomPurpose = state.channels.currentChannel.purpose;
    roomTitle = state.channels.currentChannel.room_title;
    usersCount = Object.keys(state.channels.currentChannel.users).length;
  }
  if (state.channels.currentChannel) {
    users = state.channels.currentChannel.users
  }

  return {
    users: users,
    purpose: roomPurpose,
    createdAt: createdAt,
    roomTitle: roomTitle,
    usersCount: usersCount,
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
)(Information)
