import { connect } from 'react-redux';
import { updateMessage, deleteMessage } from '../../actions/message_actions';
import MessageItem from './message_item';

const mapStateToProps = (state, ownProps) => {

  return {
    username: ownProps.username,
    content: ownProps.content,
    messageId: ownProps.messageId,
    gravatarUrl: ownProps.gravatarUrl,
    channelId: ownProps.channelId
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateMessage: (message) => dispatch(updateMessage(message)),
    deleteMessage: (messageData) => dispatch(deleteMessage(messageData))
    // fetchCurrentChannel: ownProps.fetchCurrentChannel
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageItem);
