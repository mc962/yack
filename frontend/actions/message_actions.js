import * as APIUtil from '../util/message_api_util';

export const CREATE_MESSAGE = 'CREATE_MESSAGE';
export const EDIT_MESSAGE = 'EDIT_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
export const REMOVE_MESSAGE = 'REMOVE_MESSAGE';

export const START_RECEIVING_MESSAGE = 'START_RECEIVING_MESSAGE';



export const createMessage = (message) => {
  return (dispatch) => {
    return APIUtil.createMessage(message).then(
      (createdMessage) => {
        return dispatch(receiveMessage(createdMessage));
      }
    );
  };
};

export const updateMessage = (message) => {
  return (dispatch) => {
    return APIUtil.updateMessage(message).then(
      (updatedMessage) => {
        return dispatch(receiveMessage(updatedMessage));
      }
    );
  };
};

export const deleteMessage = (message) => {
  return (dispatch) => {
    return APIUtil.deleteMessage(message).then(
      (deletedMessage) => {
        return dispatch(removeMessage(deletedMessage));
      }
    );
  };
};



export const receiveMessage = (receivedMessage) => {
  return {
    type: RECEIVE_MESSAGE,
    receivedMessage
  };
};

export const removeMessage = (receivedMessage) => {
  return {
    type: REMOVE_MESSAGE,
    receivedMessage
  };
};
