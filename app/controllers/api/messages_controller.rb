class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    if @message.save
      # Pusher.trigger("channel_#{@message.chatroom_id}", 'message_published', {})
      ActionCable.server.broadcast 'messages',
        message: @message
        render :index
    else
      render(json: @message.errors.full_messages, status: 422)
    end
  end


  def index
    @messages = Message.all
    render :index
  end



  def update
    @message = current_user.messages.find(params[:id])

    if @message.update_attributes
      render :index
    else
      render(json: @message.errors.full_messages, status: 422)
    end
  end



  def destroy
    @message = current_user.messages.find(params[:id])
    @chatroom = @message.chatroom
    if @message
      @message.destroy
    end
    render '/api/chatrooms/show'
  end

  private

  def message_params
    params.require(:message).permit(:content, :user_id, :chatroom_id)
  end

end
