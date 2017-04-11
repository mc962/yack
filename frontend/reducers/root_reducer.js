import { combineReducers } from 'redux';

import ChannelsReducer from './channels_reducer';
import SessionReducer from './session_reducer';
import UsersReducer from './users_reducer';
import LoadingReducer from './loading_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  users: UsersReducer,
  channels: ChannelsReducer,
  loading: LoadingReducer
});

export default rootReducer;
