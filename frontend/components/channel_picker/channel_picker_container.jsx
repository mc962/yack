import { connect } from 'react-redux';
import {getGeneralChannels, getDirectMessageChannels} from '../../reducers/selectors';
import ChannelPicker from './channel_picker'
import { fetchCurrentChannel } from '../../actions/channel_actions';

const mapStateToProps = (state) => {

  return {
    generalMessageChannels: getGeneralChannels(state),
    directMessageChannels: getDirectMessageChannels(state)
  }
};

const mapDispatchToProps = (dispatch) => {

  return {
    fetchCurrentChannel: (currentChannelId) => dispatch(fetchCurrentChannel(currentChannelId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelPicker)
