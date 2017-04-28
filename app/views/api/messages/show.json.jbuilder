# json.partial! 'message', message: @message


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
message_user = @message.user
picture = message_user.gravatar_url
if message_user.profile_picture.present?
  picture = asset_path(message_user.profile_picture.url)
end

message_object = {
                  id: @message.id,
                  content: @message.content,
                  user_id: message_user.id,
                  user_url: picture,
                  username: message_user.username,
                  created_at: @message.created_at,
                  updated_at: @message.updated_at,
                  chatroom_id: @message.chatroom_id,
                  message_type: @message.message_type,
                  message_attachment_content_type: @message.message_attachment_content_type,
                  message_title: @message.message_title,
                  attachment_url: @message.download_url,
                  preview_url: @message.message_attachment.url

                }

json.message message_object
