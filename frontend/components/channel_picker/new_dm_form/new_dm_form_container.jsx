import { connect } from 'react-redux';
import NewDMForm from './new_dm_form';
import { createChannel } from '../../../actions/channel_actions';
import { fetchAllUsers } from '../../../actions/user_actions';
import { fetchCurrentUser } from '../../../actions/session_actions';
import { getDirectMessageChannels } from '../../../reducers/selectors';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  const recentDirectMessages= getDirectMessageChannels(state);
  let fetchedUsers;

  if (state.users.users.users) {
    fetchedUsers = state.users.users.users;
  } else {
    fetchedUsers = {};
  }
  let currentUserId = state.session.currentUser.id;

  return {
    fetchedUsers: fetchedUsers,
    recentDirectMessages: recentDirectMessages,
    currentUserId: currentUserId
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    createChannel: (channel) => dispatch(createChannel(channel)),
    fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewDMForm));
