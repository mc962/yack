import { connect } from 'react-redux';
import CurrentChannel from './current_channel';
import currentUserLoading from '../../actions/session_actions';
import { fetchCurrentChannel } from '../../actions/channel_actions';

const mapStateToProps = (state, ownProps) => {

  let channelName;
  let channelId;

  let users;
  if (state.channels.currentChannel) {
    users = state.channels.currentChannel.users;

   }

  if (ownProps.params) {
    channelName = state.session.currentUser.channels[ownProps.params.id];
    channelId = ownProps.params.id;
  } else {
    channelName = "";
    channelId = 0;
  }

  return {
    channelName: channelName,
    channelId: channelId,
    users: users,
    loading: state.loading.currentChannelLoading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {

  let currentChannelId;
  if (ownProps.params) {
    currentChannelId = parseInt(ownProps.params.id);
  } else {
    currentChannelId = 0; // there will never be 0 in the database, but we dont want null error
  }

  return {
    fetchCurrentChannel: (currentChannelId) => dispatch(fetchCurrentChannel(currentChannelId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentChannel);
