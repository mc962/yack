module EmojiHelper
  def emojify_message(message)
    message_content = message.content

      # h is alias for html_safe
    message_content = message_content.to_str.gsub(/:([\w+-]+):/) do |match|
      curr_emoji = Emoji.find_by_alias($1)
      if curr_emoji
        %(<img alt="#$1" src="#{image_url("emoji/#{curr_emoji.image_filename}")}" className="inline-message-emoji" style="vertical-align:middle" width="20" height="20" />)
      else
       match
      end
    end.html_safe if message_content.present?
    debugger

    message.content = message_content
  end
end
