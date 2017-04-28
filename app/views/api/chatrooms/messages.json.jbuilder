# json.array! @chatroom.messages do |message|
#   json.id message.id
#   json.content message.content
#
#   json.user_id message.user.id
#   json.user_url message.user.image_url.to_s
#   json.username message.user.username.to_s
#
#   json.created_at message.created_at
#   json.updated_at message.updated_at
#
#   json.chatroom_id message.chatroom_id
# end

messages_hash = {}

@chatroom.messages.each do |message|
  messages_hash[message.id] = {
                                 content: message.content,
                                 user_id: message.user.id,
                                 user_url: message.user.image_url,
                                 username: message.user.username,
                                 created_at: message.created_at,
                                 updated_at: message.updated_at,
                                 chatroom_id: message.chatroom_id,
                                 message_attachment_content_type: message.message_attachment_content_type,
                                 message_title: message.message_title,
                                 attachment_url: messsage.download_url,
                                 preview_url: message.message_attachment.url,
                                 message_comment: message.message_comment
                              }
end

json.channel_messages messages_hash
