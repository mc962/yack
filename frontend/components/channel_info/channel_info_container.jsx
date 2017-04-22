import { connect } from 'react-redux';
import ChannelInfo from './channel_info';
import { leaveChannel, fetchAllChannels } from '../../actions/channel_actions';
import { fetchCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {

  let roomTitle;
  let roomUsers;
  let roomPurpose;
  let roomId;
  let currentUserId;
  let roomType;
  if (state.session.currentUser) {
    currentUserId = state.session.currentUser.id;
  } else {
    currentUserId = '';
  }

  if (state.channels.currentChannel) {

    roomTitle = state.channels.currentChannel.room_title;
    roomUsers = Object.keys(state.channels.currentChannel.users).length;
    roomType = state.channels.currentChannel.room_type;
    roomId = state.channels.currentChannel.id;
    roomPurpose = state.channels.currentChannel.purpose;

  } else {
    roomTitle = '';
    roomUsers = '';
    roomPurpose = '-';
    roomId = '';
    roomType = ''
  }

  return {
    roomTitle: roomTitle,
    numUsers: roomUsers,
    roomPurpose: roomPurpose,
    roomId: roomId,
    roomType: roomType,
    currentUserUsername: state.session.currentUser.username,
    currentUserId: currentUserId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    leaveChannel: (channel) => dispatch(leaveChannel(channel)),
    fetchAllChannels: () => dispatch(fetchAllChannels()),
    fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelInfo);
