import { connect } from 'reacct-redux';
import ChannelSelector from './channel_selector'

const mapStateToProps = (state) => {
  return {    
    publicMessageChannels: Object.keys(state.publicMessageChannels).map(id => state.publicMessageChannels[id]),
    directMessageChannels: Object.keys(state.directMessageChannels).map(id => state.directMessageChannels[id])
  }
};

const mapDispatchToProps = (dispatch) => {
  requestChannels: () => dispatch(requestChannels()),
  requestDirectMessages: () => dispatch(requestDirectMessages())
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelSelector)
