import { connect } from 'react-redux';
import { fetchChannelMessages } from '../../actions/channel_actions';
import Messages from './messages'

const mapStateToProps = (state, ownProps) => {
  let messages = [];
  if (state.currentChannel.fetchedChannel) {
    messages = state.currentChannel.fetchedMessages
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
    fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
