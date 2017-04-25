json.extract! @chatroom, :id, :room_title, :room_type, :purpose, :created_at

messages_hash = {}

@chatroom.messages.each do |message|
  message_user = message.user
  message_picture = message_user.gravatar_url
  if message_user.profile_picture.present?
    message_picture = asset_path(message_user.profile_picture.url)
  end
  messages_hash[message.id] = {
                                id: message.id,
                                content: message.content,
                                user_id: message_user.id,
                                user_url: message_picture,
                                username: message_user.username,
                                created_at: message.created_at,
                                updated_at: message.updated_at,
                                chatroom_id: message.chatroom_id
                              }
end

users_hash = {}

@chatroom.users.each do |user|
  picture = user.gravatar_url
  if user.profile_picture.present?
    picture = asset_path(user.profile_picture.url)
  end
  users_hash[user.id] = {
    id: user.id,
    first_name: user.first_name,
    last_name: user.last_name,
    image_url: picture,
    username: user.username
  }
end

json.users users_hash
json.channel_messages messages_hash
