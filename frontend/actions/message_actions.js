import * as APIUtil from '../util/message_api_util';

export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

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

export const receiveMessage = (receivedMessage) => {
  return {
    type: RECEIVE_MESSAGE,
    receivedMessage
  };
};
