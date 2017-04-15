import * as APIUtil from '../util/session_api_util';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';

// export const START_LOADING_CURRENT_USER = 'START_LOADING_CURRENT_USER';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

export const signup = (user) => (dispatch) => {
  dispatch(startLoadingCurrentUser());

    return APIUtil.signup(user).then(
      (fetchedUser)=>{
        return dispatch(receiveCurrentUser(fetchedUser));
      },
      (fetchedErrors) => {
        return dispatch(receiveErrors(fetchedErrors.responseJSON));
      }
    );
  };

export const login = (user) => (dispatch) => {
  dispatch(startLoadingCurrentUser());

  return APIUtil.login(user).then(
    (fetchedUser) => {dispatch(receiveCurrentUser(fetchedUser));
    },
    (fetchedErrors) => {
      return dispatch(receiveErrors(fetchedErrors.responseJSON));
    }
  );
};

export const logout = () => {
  return (dispatch) => {
    return APIUtil.logout().then(
      () => {
        return dispatch(receiveCurrentUser(null));
      },
      (fetchedErrors) => {
        return dispatch(receiveErrors(fetchedErrors.responseJSON));
      }
    );
  };
};

export const fetchCurrentUser = (userId) => {

  return (dispatch) => {
    return APIUtil.fetchCurrentUser(userId).then((fetchedUser) => {
      return dispatch(receiveCurrentUser(fetchedUser));
    });
  };
};


export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};

export const startLoadingCurrentUser = () => ({
  type: START_LOADING_CURRENT_USER
});
