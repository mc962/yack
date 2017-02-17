import {
  RECEIVE_CURRENT_CHANNEL,
  RECEIVE_ALL_CHANNELS
} from '../actions/current_channel_actions';

import { merge } from 'lodash';

initialState = {}
const CurrentChannelReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_CHANNEL:
      return merge({}, state, channel: action.channel)
    default:
      return state;
  }
}

export default CurrentChannelReducer;
