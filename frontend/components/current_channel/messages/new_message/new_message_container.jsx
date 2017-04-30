import { connect } from 'react-redux';

import NewMessageForm from './new_message_form';
import {
        createChannelMessage,
        toggleMessageAttachmentModal,
        toggleEmojiModal
       } from '../../../../actions/channel_actions';

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
    currentUser: currentUser,
    messageAttachmentModalOpen: state.modals.messageAttachmentModal,
    emojiModalOpen: state.modals.emojiModal
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createChannelMessage: (newMessage) => dispatch(createChannelMessage(newMessage)),
    toggleMessageAttachmentModal: () => dispatch(toggleMessageAttachmentModal()),
    toggleEmojiModal: () => dispatch(toggleEmojiModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessageForm);
