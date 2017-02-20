# json.partial! 'user', collection: @users, as: :user


json.extract! @users

users_hash = {}

@users.each do |user|
  users_hash[user.id] = {id: user.id, username: user.username, first_name: user.first_name, last_name: user.last_name}
end

json.users users_hash  
