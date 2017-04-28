class Api::UsersController < ApplicationController
# look into ways to preload user count queries
  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)

    if @user.save
      UserChat.new(user_id: @user.id, chatroom_id: gen_chat.id).save
      login!(@user)
      render :show
    else
      short_errors = sym_to_s(@user.errors)

      render(json: short_errors, status: 422)
    end
  end

  def show
    @user = User.find(params[:id])
    @gen_channel ||= gen_channel
    # @user.image_url = User.gravatar_for(@user)
    render :show
  end

  def update
    @user = User.find(params[:user][:id])
    @user.check_profile_picture_status(params[:user][:delete_photo])
    @gen_channel ||= gen_channel

    if @user.update(user_params)

      render :show
    else
      short_errors = sym_to_s(@user.errors)

      render(json: short_errors, status: 422)
    end
  end

  private

  def sym_to_s(errors)
    str_errors = errors.map do |error|
      error.to_s
    end
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :profile_picture)
  end
end
