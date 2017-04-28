import { connect } from 'react-redux';
import { createChannelAttachmentMessage, toggleMessageAttachmentModal } from '../../../../actions/channel_actions'; 

import MessageAttachment from './message_attachment';

const mapStateToProps = (state) => {
  return {
    currentChannelId: state.channels.currentChannel.id,
    currentUserId: state.session.currentUser.id
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createChannelAttachmentMessage: (messageData) => dispatch(createChannelAttachmentMessage(messageData)),
    toggleMessageAttachmentModal: () => dispatch(toggleMessageAttachmentModal())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageAttachment)
