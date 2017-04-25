users_hash = {}




@users.each do |user|
  picture = user.gravatar_url
  if user.profile_picture.exists?
    picture = asset_path(user.profile_picture.url)
  end

  users_hash[user.id] = {
                          id: user.id,
                          username: user.username,
                          first_name: user.first_name,
                          last_name: user.last_name,
                          image_url: picture
                        }
end

json.all_users users_hash
