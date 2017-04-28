import React from 'react';

import MessageItemContainer from './message_item_container';

class Messages extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    // this.pusher = new Pusher('<NOKEYFORYOU>', {
    //   encrypted: true
    // });
    //
    // let channel = this.pusher.subscribe(`channel_${channelId}`);
    // channel.bind('message_published', (data) => {
    //   // alert(data.message);
    //   this.props.fetchChannelMessages(this.props.channelId);
    // });
    App.messages = App.cable.subscriptions.create('MessagesChannel', {
      received: (receivedMessageData) => {

        switch (receivedMessageData.message.action) {
          case 'CREATE':
            this.props.receiveChannelMessage(receivedMessageData)
            break;
          case 'UPDATE':
            this.props.receiveChannelMessage(receivedMessageData)
            break;
          case ('DESTROY'):
            this.props.removeChannelMessage(receivedMessageData)
            break;
          default:
            throw 'Invalid Action!'

        }
      }
    });

    this.channel = App.messages;
  }

  componentDidUpdate() {
    if (this.bottomDiv) {

      this.bottomDiv.scrollIntoView();
    }
  }

  componentWillUnmount() {
    // this.pusher.unsubscribe(`channel_${channelId}`)

    this.channel.unsubscribe();
  }

  _processMessages(obj) {
    let messageElements;
    let username;
    let prevMessage;
    let channelUsers = this.props.users;
    let channelId = this.props.channelId;

    if (this.props.messages) {
      messageElements = Object.keys(this.props.messages).map((message_id, idx) => {
        let message = this.props.messages[message_id]
        let userImageLink = message.user_url;
        let name = message.username;
        if (prevMessage) {
          if (prevMessage.username === message.username) {
            userImageLink = ''
            name = ''
          }
        }

        prevMessage = message;
        message_id = message_id
        
        return <MessageItemContainer
          key={idx}
          username={name}
          content={message.content}
          messageId={message_id}
          gravatarUrl={userImageLink}
          userId={message.user_id}
          channelId={channelId}
          messageType={message.message_type}
          createdAt={message.created_at}
          updatedAt={message.updated_at} />;
      });
    } else {
      messageElements = <div className='no-messages'></div>;
    }
    return messageElements;
  }

  render() {

    let processedMessages = [];
    if (this.props.messages) {
      processedMessages = this._processMessages(this.props.messages)
    }
    //
    return (
    <div className='message-elements-container'>
      <ul className='channel-messages-list'>
        {processedMessages}
      </ul>
      <div ref={node => this.bottomDiv = node }></div>
    </div>

    )
  }
}

export default Messages;
