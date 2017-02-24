import { connect } from 'react-redux';
import ChannelInfo from './channel_info';
import { leaveChannel, fetchAllChannels } from '../../actions/channel_actions';
import { _size } from 'lodash';

const mapStateToProps = (state) => {
  let roomTitle;
  let roomUsers;
  let roomPurpose;
  let roomId;
  let currentUserId;
  if (state.session.currentUser) {
    currentUserId = state.session.currentUser.id;
  } else {
    currentUserId = '';
  }

  if (state.currentChannel.fetchedChannel) {
    roomTitle = state.currentChannel.fetchedChannel.room_title;
    roomUsers = _.size(state.currentChannel.fetchedChannel.users);
    roomPurpose = state.currentChannel.fetchedChannel.purpose;
    roomId = state.currentChannel.fetchedChannel.id;
  } else {
    roomTitle = '';
    roomUsers = '';
    roomPurpose = '';
    roomId = '';
  }

  return {
    roomTitle: roomTitle,
    numUsers: roomUsers,
    roomPurpose: roomPurpose,
    roomId: roomId,
    currentUser: currentUserId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    leaveChannel: (channel) => dispatch(leaveChannel(channel)),
    fetchAllChannels: () => dispatch(fetchAllChannels())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelInfo);
