import {
  RECEIVE_CURRENT_CHANNEL,
  RECEIVE_ALL_CHANNELS,
  REMOVE_CHANNEL,
  RECEIVE_CHANNEL_MESSAGES,
  RECEIVE_CHANNEL_MESSAGE,
  REMOVE_CHANNEL_MESSAGE
} from '../actions/channel_actions';

import { merge } from 'lodash';

let initialState = {};
let nextState;
const ChannelsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return merge({}, state, action.channels);
    case RECEIVE_CURRENT_CHANNEL:
        return Object.assign({}, state, { currentChannel: action.currentChannel })    
    case RECEIVE_CHANNEL_MESSAGE:
      return merge({}, state, { currentChannel: {channel_messages: { [action.receivedChannelMessage.message.id]: action.receivedChannelMessage.message }}});
    case REMOVE_CHANNEL_MESSAGE:
      nextState = Object.assign({}, state);
      // Prevents double deletion error from received delete request through thunk action and websocket action
      // look into how to prevent this
      const messageData = action.removedChannelMessageData.message
      if (messageData && state.currentChannel.channel_messages) {
        delete nextState.currentChannel.channel_messages[messageData.id]
      }
      return merge({}, nextState);
    case REMOVE_CHANNEL:
      nextState = Object.assign({}, state);
      delete nextState[action.channel.id];
      return nextState;
    default:
      return state;
  }
};

export default ChannelsReducer;
