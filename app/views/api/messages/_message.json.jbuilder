# json.extract! message, :id, :content, :user_id, :chatroom_id
#
# json.user_url message.user.image_url.to_s
#
#
#   # json.user_url message.user.image_url.to_s
#   # json.id message.id
#   # json.content message.content
#   # json.user_id message.user_id
#   # json.chatroom_id message.chatroom_id

message_object = {
                  id: message.id,
                  content: message.content,
                  user_id: message.user.id,
                  user_url: message.user.image_url,
                  username: message.user.username,
                  created_at: message.created_at,
                  updated_at: message.updated_at,
                  chatroom_id: message.chatroom_id,
                  message_type: message.message_type,
                  message_attachment_content_type: message.message_attachment_content_type,
                  message_title: message.message_title,
                  attachment_url: messsage.download_url,
                  preview_url: message.message_attachment.url
                 }

json.message message_object
