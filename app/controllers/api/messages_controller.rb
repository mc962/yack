class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)

    if @message.save
      # Pusher.trigger("channel_#{@message.chatroom_id}", 'message_published', {})

      broadcasted_message = attach_message_user_info(@message)
      broadcasted_message['action'] = 'CREATE'
      ActionCable.server.broadcast 'messages',
      message: broadcasted_message


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
    @message = current_user.messages.find(params[:id])

    if @message.update_attributes(message_params)
      broadcasted_message = attach_message_user_info(@message)
      broadcasted_message['action'] = 'UPDATE'
      ActionCable.server.broadcast 'messages',
      message: broadcasted_message

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
      message_action = 'DESTROY'
      ActionCable.server.broadcast 'messages',
      message: {id: @message.id, action: message_action}
    end
    render '/api/chatrooms/show'
  end

  private

  def message_params
    params.require(:message).permit(:content, :user_id, :chatroom_id)
  end

  def attach_message_user_info(message)
    message_user = message.user
    message_picture = message_user.gravatar_url
    if message_user.profile_picture.exists?
      message_picture = asset_path(message_user.profile_picture.url)
    end
    user_info = {
                 "username" => message.user.username,
                 "user_url" => message.user.message_picture
                }

    message_attributes = message.attributes
    processed_message = message_attributes.merge(user_info)

  end

end
