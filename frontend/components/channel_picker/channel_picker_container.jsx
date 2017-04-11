import { connect } from 'react-redux';

import { getGeneralChannels, getDirectMessageChannels } from '../../reducers/selectors';
import { fetchCurrentChannel, fetchAllChannels } from '../../actions/channel_actions';
import ChannelPicker from './channel_picker';

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
