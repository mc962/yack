import { connect } from 'react-redux';
import {getGeneralChannels, getDirectMessageChannels} from '../reducers/selectors';
import ChannelPicker from './channel_picker'

const mapStateToProps = (state) => {
  return {
    generalMessageChannels: getGeneralChannels(state),
    directMessageChannels: getDirectMessageChannels(state)
  }
};



export default connect(
  mapStateToProps
)(ChannelPicker)
