json.extract! user, :id, :username, :first_name, :last_name, :email


json.channels do
  json.array! user.chatrooms, :id, :room_title, :room_type, :purpose
end

picture = user.gravatar_url
if user.profile_picture.present?
  picture = asset_path(user.profile_picture.url)
end

json.image_url picture

json.gen_channel_id @gen_channel.id
