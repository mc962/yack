/* globals Pusher */
import React from 'react';
import ReactDom from 'react-dom';
import MessageItemContainer from './message_item_container';
import { withRouter } from 'react-router';
import NewMessageFormContainer from './new_message/new_message_container';
import ChannelInfoContainer from '../channel_info/channel_info_container';
import LoadingIcon from '../../loading_icon';

class CurrentChannel extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount(){
    const channelId = parseInt(this.props.params.id);
    this.props.fetchCurrentChannel(channelId);

    // this.pusher = new Pusher('<NOKEYFORYOU>', {
    //   encrypted: true
    // });
    //
    // let channel = this.pusher.subscribe(`channel_${channelId}`);
    // channel.bind('message_published', (data) => {
    //   this.props.fetchCurrentChannel(channelId);
    // });

    App.messages = App.cable.subscriptions.create('MessagesChannel', {
      received: (data) => {
        this.props.fetchCurrentChannel(this.props.params.id);
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
                                      channelId={ this.props.params.id} />;
      });
    } else {
      return <div className='no-messages'></div>;
    }
    return this.props.loading ?
      <LoadingIcon /> :
      <div className='current-channel-sections'>
        <header className='channel-information'>
          <ChannelInfoContainer />
        </header>
        <section className='messages-container' id='messages-container'>
          <ul className='channel-messages-list'>
            {messageElements}
          </ul>
          <div ref={node => this.bottomDiv = node }></div>
        </section>
        <footer className='new-messages-form-container'>
          <NewMessageFormContainer />
        </footer>
      </div>
  }
}

export default withRouter(CurrentChannel);
