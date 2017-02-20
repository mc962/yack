/* globals Pusher */

import React from 'react';
import MessageItem from './message_item';
import { withRouter } from 'react-router';
import NewMessageFormContainer from './new_message/new_message_container';
class CurrentChannel extends React.Component {
  constructor(props) {
    super(props)

  }
  componentDidMount(){
    const channelId = parseInt(this.props.params.id)
    this.props.fetchCurrentChannel(channelId);
    //not positive on const
    this.pusher = new Pusher('ed4f630c935baafe26a6', {
      encrypted: true
    });

    let channel = this.pusher.subscribe(`channel_${channelId}`);
    channel.bind('message_published', (data) => {
      // alert(data.message);
      this.props.fetchCurrentChannel(channelId);
    });
  }

  componentWillReceiveProps(newProps) {
    const channelId = parseInt(this.props.params.id)

    if (this.props.messages !== newProps.messages) {
      // this.props.fetchCurrentChannel(channelId);
    }

  }

  componentWillUnmount() {
    this.pusher.unsubscribe(`channel_${channelId}`)
  }
  render() {

  let messageElements;
  let channelUsers = this.props.users;
  let username;
    if (this.props.messages) {

      messageElements = this.props.messages.map((message, idx) => {


        const userId = parseInt(message.user_id)
        if (userId && channelUsers[userId]) {

          username=channelUsers[userId].username;
        } else {
          username=""
        }
        return <MessageItem key={idx} username={username} content={message.content} />
      })
    } else {
      return <div className='no-messages'></div>
    }



    return (
      <div className='current-channel-sections'>
        <header className='channel-information'>
          This is my current channel: Channel {this.props.roomTitle}
        </header>
        <section className='messages-container'>
          <ul className='channel-messages-list'>
            {messageElements}
          </ul>
        </section>
        <footer className='new-messages-form-container'>
          <NewMessageFormContainer />
        </footer>
      </div>
    )
  }
}

export default withRouter(CurrentChannel);
