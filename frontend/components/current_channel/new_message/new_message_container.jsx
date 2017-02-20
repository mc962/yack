import { connect } from 'react-redux';
import NewMessageForm from './new_message_form';

import { createMessage } from '../../../actions/message_actions';

const mapStateToProps = (state, ownProps) => {
  let channelId;
  let roomTitle;
  let users;

  if (ownProps.params) {
    channelId = parseInt(ownProps.params.id)
  }

  if (state.currentChannel.fetchedChannel) {

    roomTitle = state.currentChannel.fetchedChannel.room_title;
    users = state.currentChannel.fetchedChannel.users

  }


  return {
    roomTitle: roomTitle,
    channelId: channelId,
    users: users,
    channel: ownProps.channel
  }
}

const mapDispatchToProps = (dispatch) => {


  return {
    createMessage: (newMessage) => dispatch(createMessage(newMessage))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMessageForm)
