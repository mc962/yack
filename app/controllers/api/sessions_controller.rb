class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login!(@user)
      render "/api/users/show"
    else
      short_errors = sym_to_s(@user.errors)

      render(json: short_errors, status: 401)
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


  private

  def sym_to_s(errors)
    str_errors = errors.map do |error|
      error.to_s
    end
  end
end
