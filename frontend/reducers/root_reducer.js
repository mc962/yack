import { combineReducers } from 'redux';

import SessionReducer from './session_reducer'
// import CurrentChannelReducer from './current_channel_reducer'

const rootReducer = combineReducers({
  session: SessionReducer
})

export default rootReducer;
