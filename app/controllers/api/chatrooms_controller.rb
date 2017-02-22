class Api::ChatroomsController < ApplicationController
  def create

    @chatroom = Chatroom.new(chatroom_params)


    if @chatroom.save!
      params[:chatroom][:user_ids].each do |user_id|
        UserChat.new(user_id: user_id.to_i, chatroom_id: @chatroom.id).save!
      end
      render :show
    else
      render(json: @chatroom.errors.full_messages, status: 422)
    end
  end

  def index
    @chatrooms = Chatroom.all
    render :index
  end

  def show
    @chatroom = Chatroom.find(params[:id])
    render :show
  end

end

private

def chatroom_params
  params.require(:chatroom).permit(:room_title, :room_type, :purpose)
end
