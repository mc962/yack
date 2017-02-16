import { connect } from 'reacct-redux';
import ChannelSelector from './channel_selector'

const mapStateToProps = (state) => {
  channels: Object.keys(state.channels).map(id => state.channels[id])
}

const mapDispatchToProps = (dispatch) => {
  fetchAllChannels: () => dispatch(fetchAllChannels)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channels)
