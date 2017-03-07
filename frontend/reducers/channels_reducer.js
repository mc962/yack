import {
  RECEIVE_CURRENT_CHANNEL,
  RECEIVE_ALL_CHANNELS,
  REMOVE_CHANNEL,
  RECEIVE_CHANNEL_MESSAGES
} from '../actions/channel_actions';

import { merge } from 'lodash';

let initialState = {};
const ChannelsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      return Object.assign({}, state, action.channels);
    case RECEIVE_CURRENT_CHANNEL:
      return Object.assign({}, state, {fetchedChannel: action.currentChannel});
    case RECEIVE_CHANNEL_MESSAGES:


      return Object.assign({}, state, {fetchedMessages: action.receivedChannelMessages});
    case REMOVE_CHANNEL:
      let nextState = Object.assign({}, state);
      delete nextState[action.channel.id];
      return nextState;
    default:
      return state;
  }
};

export default ChannelsReducer;
