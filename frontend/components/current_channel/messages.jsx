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
    //   this.props.fetchCurrentChannel(channelId);
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

        messageElements = this.props.messages.map((message, idx) => {

          const userId = parseInt(message.user_id);
          if (userId && channelUsers[userId]) {

            username=channelUsers[userId].username;
          } else {
            username="";
          }

          return <MessageItemContainer key={idx}
                                       username={username}
                                       content={message.content}
                                       messageId={message.id}
                                       gravatarUrl={channelUsers[userId].gravatar_url}
                                       fetchCurrentChannel={this.props.fetchCurrentChannel}
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
