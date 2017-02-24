import { connect } from 'react-redux';
import ChannelInfo from './channel_info';
import { _size } from 'lodash';
const mapStateToProps = (state) => {
  let roomTitle;
  let roomUsers;
  let roomPurpose;

  if (state.currentChannel.fetchedChannel) {
    roomTitle = state.currentChannel.fetchedChannel.room_title;
    roomUsers = _.size(state.currentChannel.fetchedChannel.users);
    roomPurpose = state.currentChannel.fetchedChannel.purpose;
  } else {
    roomTitle = '';
    roomUsers = '';
    roomPurpose = '';
  }

  return {
    roomTitle: roomTitle,
    numUsers: roomUsers,
    roomPurpose: roomPurpose
  };
};



export default connect(
  mapStateToProps
)(ChannelInfo);
