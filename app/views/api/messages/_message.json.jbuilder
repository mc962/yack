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
                  preview_url: message.message_attachment.url,
                  message_comment: message.message_comment
                 }

json.message message_object
