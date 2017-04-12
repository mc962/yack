import { connect } from 'react-redux';

import NewMessageForm from './new_message_form';
import { createMessage } from '../../../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  let channelId;
  let roomTitle;
  let users;
  let currentUser;

  if (ownProps.params) {
    channelId = parseInt(ownProps.params.id);
  }

  if (state.channels.currentChannel) {

    roomTitle = state.channels.currentChannel.room_title;
    users = state.channels.currentChannel.users;

  }
  currentUser = state.session.currentUser;

  return {
    roomTitle: roomTitle,
    channelId: channelId,
    users: users,
    channel: ownProps.channel,
    currentUser: currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createMessage: (newMessage) => dispatch(createMessage(newMessage))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessageForm);
