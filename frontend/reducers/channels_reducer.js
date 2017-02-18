import {
  RECEIVE_CURRENT_CHANNEL,
  RECEIVE_ALL_CHANNELS
} from '../actions/channel_actions';

import { merge } from 'lodash';

let initialState = {}
const ChannelsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      Object.assign({}, state, channels: action.channels)
    case RECEIVE_CURRENT_CHANNEL:
      return merge({}, state, channel: action.channel)
      /// not sure if this will work
    default:
      return state;
  }
}

export default ChannelsReducer;
