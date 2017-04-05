import { connect } from 'react-redux';
// import { updateMessage, deleteMessage } from '../../actions/message_actions';
import { deleteChannelMessage } from '../../actions/channel_actions';

import MessageItem from './message_item';

const mapStateToProps = (state, ownProps) => {

  return {
    username: ownProps.username,
    content: ownProps.content,
    messageId: ownProps.messageId,
    gravatarUrl: ownProps.gravatarUrl,
    channelId: ownProps.channelId,
    currentUserId: state.session.currentUser.id,
    userId: ownProps.userId,
    createdAt: ownProps.createdAt,
    updatedAt: ownProps.updatedAt
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteChannelMessage: (messageData) => dispatch(deleteChannelMessage(messageData))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageItem);
