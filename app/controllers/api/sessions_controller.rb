class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      
      login!(@user)
      render json: @user
    else
      render(json: ["invalid credentials"], status: 401)
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
