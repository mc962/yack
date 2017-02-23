import { connect } from 'react-redux';
import ChannelInfo from './channel_info';
import { _size } from 'lodash'
const mapStateToProps = (state) => {
  let roomTitle;
  let roomUsers;

  if (state.currentChannel.fetchedChannel) {
    roomTitle = state.currentChannel.fetchedChannel.room_title;
    roomUsers = _.size(state.currentChannel.fetchedChannel.users);
  } else {
    roomTitle = '';
    roomUsers = '';
  }

  return {
    roomTitle: roomTitle,
    numUsers: roomUsers
  };
};



export default connect(
  mapStateToProps
)(ChannelInfo);
