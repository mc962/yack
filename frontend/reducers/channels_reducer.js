import {
  RECEIVE_CURRENT_CHANNEL,
  RECEIVE_ALL_CHANNELS
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

    default:
      return state;
  }
};

export default ChannelsReducer;

///////need to take care of duplicates in state
