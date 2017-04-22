users_hash = {}

@users.each do |user|
  users_hash[user.id] = {
                          id: user.id,
                          username: user.username,
                          first_name: user.first_name,
                          last_name: user.last_name,
                          image_url: user.image_url
                        }
end

json.all_users users_hash
