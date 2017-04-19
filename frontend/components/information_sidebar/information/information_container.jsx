import { connect } from 'react-redux';

import Information from './information';

const mapStateToProps = (state) => {
  let createdAt = '';
  let roomPurpose = '';
  let users = [];
  let roomTitle= '';
  let usersCount='';

  if (state.channels.currentChannel) {
    createdAt = state.channels.currentChannel.created_at;
    roomPurpose = state.channels.currentChannel.purpose;
    roomTitle = state.channels.currentChannel.room_title;
    usersCount = state.channels.currentChannel.users.length;
  }
  if (state.channels.currentChannel) {
    users = state.channels.currentChannel.users
  }

  return {
    users: users,
    purpose: roomPurpose,
    createdAt: createdAt,
    roomTitle: roomTitle,
    usersCount: usersCount
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Information)
