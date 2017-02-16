import { merge } from 'lodash';
import { RECEIVE_USER_INFORMATION } from '../actions/current_user_actions';


const currentUserReducer = (state, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_INFORMATION:

      return Object.assign({})
    default:

  }
}
