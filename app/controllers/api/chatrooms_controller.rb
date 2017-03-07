class Api::ChatroomsController < ApplicationController
  def create

    @chatroom = Chatroom.new(chatroom_params)


    if @chatroom.save
      params[:chatroom][:user_ids].each do |user_id|
        UserChat.new(user_id: user_id.to_i, chatroom_id: @chatroom.id).save
      end
      render :show
    else

      render(json: @chatroom.errors.full_messages, status: 422)
    end

  end

  def index
    @chatrooms = Chatroom.all.includes(:users)
    render :index
  end

  def show

    @chatroom = Chatroom.find(params[:id])
    render :show
  end

  def channel_messages
    # @channel_messages = Message.where(chatroom_id: params[:id]).order(created_at: :asc)
    @chatroom = Chatroom.find(params[:id])

    render :messages
  end

  def join_channel
    @chatroom = Chatroom.find(params[:id])
    join_user = UserChat.new(chatroom_id: params[:user_chat][:chatroom_id], user_id: params[:user_chat][:user_id])

    if join_user.save!
      render :show
    else
      render(json: ["Invalid params."], status: 422)
    end
  end

  def leave_channel
    @chatroom = Chatroom.find(params[:user_chat][:chatroom_id])
    subscription = UserChat.find_subscription({user_id: params[:user_chat][:user_id], chatroom_id: params[:user_chat][:chatroom_id]})

    if subscription
      subscription.first.destroy
    end

    render :show
  end
end

private

def chatroom_params
  params.require(:chatroom).permit(:room_title, :room_type, :purpose)
end
