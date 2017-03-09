export const createMessage = (message) =>  {
  return $.ajax({
    method: 'POST',
    url: `/api/chatrooms/${message.chatroom_id}/messages`,
    data: { message }
  });
};

export const updateMessage = (message) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/chatrooms/${message.chatroom_id}/messages/${message.id}`,
    data: { message }
  });
};

export const deleteMessage = (message) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/chatrooms/${message.chatroom_id}/messages/${message.id}`
  });
};
