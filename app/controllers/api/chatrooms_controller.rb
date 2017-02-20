class Api::ChatroomsController < ApplicationController
  def create
    @chatroom = Chatroom.new(chatroom_params)
    if @chatroom.save

      
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
