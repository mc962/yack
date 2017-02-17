import { connect } from 'react-redux';
import CurrentChannel from './current_channel';

const mapStateToProps = (state, ownProps) => {
debugger
  const channelName = state.channels[ownProps.params.id]
  const channelId = ownProps.params.id
  return {
    channelName: channelName,
    channelId: channelId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const currentChannelId = ownProps.params.id;
  return {

    fetchChannelPosts: (currentChannelId) => dispatch(currentChannelId)
  }
}

export default connect(

  mapStateToProps
)(CurrentChannel)
