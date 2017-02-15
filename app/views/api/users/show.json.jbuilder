json.extract! @user, :username

json.partial! 'api/users/user', user: @user
