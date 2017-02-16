import * as APIUtil from '../util/channel_api_util';

export const FETCH_USER_INFORMATION = 'FETCH_USER_INFORMATION'
export const RECEIVE_USER_INFORMATION = 'RECEIVE_USER_INFORMATION'

// may want to add instnce for error checking later, what if dispatched user doesnt exist
export const fetchUserInformation = (user) => {
  return (dispatch) => {
    return APIUtil.fetchUserInformation(user.id).then((userData)=> {
      return dispatch(receiveUserInformation(userData))
    })
  }
}

export const receiveUserInformation = (userData) => {
  return {
    RECEIVE_USER_INFORMATION,
    userData
  }
}
