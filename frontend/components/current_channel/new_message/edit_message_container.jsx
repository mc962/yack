import { connect } from 'react-redux';
import EditMessageForm from './edit_message_form';

import { updateMessage } from '../../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {


  return {
    messsageId: ownProps.messageId,
    messageChatroomId: ownProps.chatroomId,
    messageUserId: ownProps.userId,
    messageContent: ownProps.content,
    submitMessageHandler: ownProps.submitMessageHandler
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: (message) => dispatch(updateMessage(message))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditMessageForm);
