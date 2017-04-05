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
      return Object.assign({}, state, action.channels);
    case RECEIVE_CURRENT_CHANNEL:
      return Object.assign({}, state, {fetchedChannel: action.currentChannel});
    case RECEIVE_CHANNEL_MESSAGES:
      return Object.assign({}, state, {fetchedMessages: action.receivedChannelMessages});
    case RECEIVE_CHANNEL_MESSAGE:
    
      nextState = {fetchedMessages: {channel_messages: {[action.receivedChannelMessage.message.id]: action.receivedChannelMessage.message}}}
      return merge({}, state, nextState);
    case REMOVE_CHANNEL_MESSAGE:
      nextState = Object.assign({}, state);
      delete nextState[action.removedChannelMessage.message.id];
      return nextState
    case REMOVE_CHANNEL:
      nextState = Object.assign({}, state);
      delete nextState[action.channel.id];
      return nextState;
    default:
      return state;
  }
};

export default ChannelsReducer;
