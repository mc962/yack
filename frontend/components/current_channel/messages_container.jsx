import { connect } from 'react-redux';
import { fetchChannelMessages } from '../../actions/channel_actions';
import { fetchChannelMessage } from '../../actions/channel_actions';
import { receiveChannelMessage } from '../../actions/channel_actions';
import { removeChannelMessage } from '../../actions/channel_actions';

import Messages from './messages'

const mapStateToProps = (state, ownProps) => {

  let messages = [];
  if (state.currentChannel.fetchedMessages) {    
    messages = state.currentChannel.fetchedMessages.channel_messages
  }

  return {
    channelId: ownProps.channelId,
    users: ownProps.users,
    messages: messages
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const channelId = ownProps.channelId;

  return {
    fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId)),
    fetchChannelMessage: (messageId, channelId) => dispatch(fetchChannelMessage(messageId, channelId)),
    receiveChannelMessage: (message) => dispatch(receiveChannelMessage(message)),
    removeChannelMessage: (messageId) => dispatch(removeChannelMessage(messageId))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
