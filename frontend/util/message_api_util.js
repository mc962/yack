export const createMessage = (message) =>  {
  return $.ajax({
    method: 'POST',
    url: `/api/chatrooms/${message.chatroom_id}/messages`,
    data: { message }
  })
}
