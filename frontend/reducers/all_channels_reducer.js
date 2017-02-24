import {
  RECEIVE_ALL_CHANNELS
} from '../actions/channel_actions';

import { merge } from 'lodash';

let initialState = {};

const AllChannelsReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CHANNELS:
      
      return Object.assign({}, state, action.channels);
    default:
      return state;
    }
  };

  export default AllChannelsReducer;
