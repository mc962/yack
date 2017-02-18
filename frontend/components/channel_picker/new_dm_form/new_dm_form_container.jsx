import { connect } from 'react-redux';
import NewDMForm from './new_dm_form'
import { createChannel } from '../../../actions/channel_actions';
import { fetchAllUsers } from '../../../actions/user_actions';
import { getDirectMessageChannels } from '../../../reducers/selectors';
// recommend just a user search for now, can do dm search if have time later
const mapStateToProps = (state) => {
  const recentDirectMessages= getDirectMessageChannels(state)

  return {
    fetchedUsers: state.users,
    recentDirectMessages: recentDirectMessages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    createChannel: (channel) => dispatch(createChannel(channel))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewDMForm)
