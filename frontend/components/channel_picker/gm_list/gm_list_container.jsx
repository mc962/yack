import GMList from './gm_list';
import { connect } from 'react-redux';
import { fetchAllChannels, joinChannel } from '../../../actions/channel_actions';
import { fetchCurrentUser } from '../../../actions/session_actions';

const mapStateToProps = (state) => {
// refactor this into just the channels reducer if possible
  const currentUser = state.session.currentUser;
  let fetchedChannels = {};
  if (state.allChannels) {
    fetchedChannels = state.allChannels.chatrooms;
  }

  return {
    fetchedChannels: fetchedChannels,
    currentUser: currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllChannels: () => dispatch(fetchAllChannels()),
    joinChannel: (user_chat) => dispatch(joinChannel(user_chat)),
    fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GMList);
