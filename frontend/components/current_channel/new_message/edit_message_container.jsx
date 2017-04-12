import { connect } from 'react-redux';
import EditMessageForm from './edit_message_form';

import { updateChannelMessage } from '../../../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {


  return {
    messsageId: ownProps.messageId,
    messageChatroomId: ownProps.chatroomId,
    messageUserId: ownProps.userId,
    messageContent: ownProps.content,
    userPicture: ownProps.userPicture,
    editEscapeHandler: ownProps.editEscapeHandler
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateChannelMessage: (message) => dispatch(updateChannelMessage(message))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditMessageForm);
