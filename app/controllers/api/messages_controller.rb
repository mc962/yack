class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)

    if @message.save
      # Pusher.trigger("channel_#{@message.chatroom_id}", 'message_published', {})

      ActionCable.server.broadcast 'messages',
      message_id: @message.id


      render :show
    else
      render(json: @message.errors.full_messages, status: 422)
    end
  end


  def index
    @messages = Message.all
    render :index
  end

  def show
    @message = Message.find(params[:id])
    render :show
  end

  def update

    #  this is still giving me underfined id, which leads to a duplicate messge issue
    @message = current_user.messages.find(params[:id])

    if @message.update_attributes(message_params)
      ActionCable.server.broadcast 'messages',
      message_id: @message.id

      render :show
    else
      render(json: @message.errors.full_messages, status: 422)
    end
  end



  def destroy
    # seems to be making a fetch request for particular messge even after deleted, and so returns not found
    @message = current_user.messages.find(params[:id])
    @chatroom = @message.chatroom
    if @message
      @message.destroy

      ActionCable.server.broadcast 'messages',
      message_id: @message.id
    end
    render '/api/chatrooms/show'
  end

  private

  def message_params
    params.require(:message).permit(:content, :user_id, :chatroom_id)
  end

end
