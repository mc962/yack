class Api::ChatroomsController < ApplicationController
  def index
    @chatrooms = Chatroom.all
    render :index
  end

  def show
    @chatroom = Chatroom.find(params[:id])
    render :show
  end
end
