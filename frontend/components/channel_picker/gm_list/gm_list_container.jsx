import GMList from './gm_list';
import { connect } from 'react-redux';
import { fetchAllChannels, joinChannel, toggleGMModal } from '../../../actions/channel_actions';
import { fetchCurrentUser } from '../../../actions/session_actions';

const mapStateToProps = (state) => {
  const currentUser = state.session.currentUser;
  let fetchedChannels = {};
  if (state.channels.chatrooms) {
    fetchedChannels = state.channels.chatrooms;
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
    fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
    toggleGMModal: () => dispatch(toggleGMModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GMList);
