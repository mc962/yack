import React from 'react';

import MessageItemContainer from './message_item_container';

class Messages extends React.Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {

    this.props.fetchChannelMessages(this.props.channelId);
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
      received: (data) => {
        this.props.fetchChannelMessages(this.props.channelId);
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
  render() {
    let messageElements;
    let channelUsers = this.props.users;
    let username;
    let channelId = this.props.channelId;
      if (this.props.messages) {

        let prevMessage;

        messageElements = this.props.messages.map((message, idx) => {

          let userImageLink = message.user_url;
          let name = message.username;
          if (prevMessage) {
            if (prevMessage.username === message.username) {
              userImageLink = ''
              name = ''
            }
          }

          prevMessage = message;
          return <MessageItemContainer key={idx}
                                       username={name}
                                       content={message.content}
                                       messageId={message.id}
                                       gravatarUrl={userImageLink}
                                       userId={message.user_id}
                                       channelId={channelId} />;
        });
      } else {
        return <div className='no-messages'></div>;
      }
    return (
    <div>
      <ul className='channel-messages-list'>
        {messageElements}
      </ul>
      <div ref={node => this.bottomDiv = node }></div>
    </div>

    )
  }
}

export default Messages;
