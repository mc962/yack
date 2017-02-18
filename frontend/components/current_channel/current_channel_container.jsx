import { connect } from 'react-redux';
import CurrentChannel from './current_channel';

const mapStateToProps = (state, ownProps) => {

  let channelName;
  let channelId;
  if (ownProps.params) {
    channelName = state.session.currentUser.channels[ownProps.params.id];
    channelId = ownProps.params.id;
  } else {
    channelName = "";
    channelId = null;
  }
  return {
    channelName: channelName,
    channelId: channelId
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {

  let currentChannelId;
  if (ownProps.params) {
    currentChannelId = ownProps.params.id
  } else {
    currentChannelId = 0 // there will never be 0 in the database, but we dont want null error
  }

  return {

    // fetchChannelPosts: (currentChannelId) => dispatch(currentChannelId)
  }
}

export default connect(

  mapStateToProps
)(CurrentChannel)
