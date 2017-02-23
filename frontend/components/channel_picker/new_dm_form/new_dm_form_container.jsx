import { connect } from 'react-redux';
import NewDMForm from './new_dm_form';
import { createChannel } from '../../../actions/channel_actions';
import { fetchAllUsers } from '../../../actions/user_actions';
import { getDirectMessageChannels } from '../../../reducers/selectors';
import { withRouter } from 'react-router';
// recommend just a user search for now, can do dm search if have time later
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
    createChannel: (channel) => dispatch(createChannel(channel))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(NewDMForm));
