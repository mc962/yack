import { connect } from 'react-redux';

import { fetchChannelMessage, receiveChannelMessage, removeChannelMessage } from '../../../actions/channel_actions';

import Messages from './messages'

const mapStateToProps = (state, ownProps) => {

  let messages = [];
  if (state.channels.currentChannel.channel_messages) {
    messages = state.channels.currentChannel.channel_messages
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
    fetchChannelMessage: (messageId, channelId) => dispatch(fetchChannelMessage(messageId, channelId)),
    receiveChannelMessage: (message) => dispatch(receiveChannelMessage(message)),
    removeChannelMessage: (messageId) => dispatch(removeChannelMessage(messageId))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
