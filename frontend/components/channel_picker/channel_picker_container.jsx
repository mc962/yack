import { connect } from 'react-redux';

import { getGeneralChannels, getDirectMessageChannels } from '../../reducers/selectors';

import ChannelPicker from './channel_picker';

import { fetchCurrentChannel, fetchAllChannels } from '../../actions/channel_actions';
// import { fetchCurrentUser } from '../../actions/session_actions';
const mapStateToProps = (state) => {

  return {
    generalMessageChannels: getGeneralChannels(state),
    directMessageChannels: getDirectMessageChannels(state),
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {

  return {
    fetchCurrentChannel: (currentChannelId) => dispatch(fetchCurrentChannel(currentChannelId)),
    fetchAllChannels: () => dispatch(fetchAllChannels())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelPicker);
