import { connect } from 'react-redux';
import NewDMForm from './new_dm_form';
import { createChannel, toggleDMModal } from '../../../actions/channel_actions';
import { fetchAllUsers } from '../../../actions/user_actions';
import { fetchCurrentUser } from '../../../actions/session_actions';
import { getDirectMessageChannels } from '../../../reducers/selectors';
import { withRouter } from 'react-router';

const mapStateToProps = (state) => {
  const recentDirectMessages= getDirectMessageChannels(state);
  let fetchedUsers;

  if (state.users.allUsers) {
    fetchedUsers = state.users.allUsers;
  } else {
    fetchedUsers = {};
  }


  return {
    fetchedUsers: fetchedUsers,
    recentDirectMessages: recentDirectMessages,
    currentUserUsername: state.session.currentUser.username,
    currentUserId: state.session.currentUser.id
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    createChannel: (channel) => dispatch(createChannel(channel)),
    fetchCurrentUser: (userId) => dispatch(fetchCurrentUser(userId)),
    toggleDMModal: () => dispatch(toggleDMModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewDMForm));
