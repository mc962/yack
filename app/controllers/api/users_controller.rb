class Api::UsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    gen_chat = Chatroom.find_by(room_title: 'general')
    if @user.save!

      # UserChat.new(user_id: @user.id, chatroom_id: gen_chat.id).save
      login!(@user)


      render :show
    else
      short_errors = sym_to_s(@user.errors)

      render(json: short_errors, status: 422)
    end
  end

  def show
    @user = User.find(params[:id]) ## in jbuilder we will grab usr info and assoc.

    @user.gravatar_url = User.gravatar_for(@user)
    render :show
  end
  # def update
  # end
  #
  # def destroy
  # end

private

def sym_to_s(errors)
  str_errors = errors.map do |error|
    error.to_s
  end
end


end
