import { combineReducers } from 'redux';
import ChannelsReducer from './channels_reducer';
import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  users: UsersReducer,
  currentChannel: ChannelsReducer
})

export default rootReducer;
