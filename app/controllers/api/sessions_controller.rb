class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    @gen_channel ||= gen_channel
    if @user
      login!(@user)
      render "/api/users/show"
    else
      render(json: ['Sorry, you entered an incorrect email address or password.'], status: 401)
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: @user
    else
      render(json: ["You are not signed in"], status: 404)
    end
  end
end
