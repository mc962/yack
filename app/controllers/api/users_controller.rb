class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    gen_chat = Chatroom.find_by(room_title: 'general')
    if @user.save
      UserChat.new(user_id: @user.id, chatroom_id: gen_chat.id)
      login!(@user)
      render :show
    else
      render(json: @user.errors.full_messages, status: 422)
    end
  end

  def show
    @user = User.find(params[:id]) ## in jbuilder we will grab usr info and assoc.
    render :show
  end
  # def update
  # end
  #
  # def destroy
  # end


end
