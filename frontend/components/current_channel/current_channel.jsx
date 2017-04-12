/* globals Pusher */
import React from 'react';
import ReactDom from 'react-dom';
import { withRouter } from 'react-router';

import LoadingIcon from '../shared/loading_icon';

import ChannelInfoContainer from '../channel_info/channel_info_container';

import MessagesContainer from './messages/messages_container';
import NewMessageFormContainer from './messages/new_message/new_message_container';

class CurrentChannel extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

        return this.props.loading ?
          <LoadingIcon /> :

          <div className='current-channel-sections'>
            <header className='channel-information'>
              <ChannelInfoContainer />
            </header>

            <section className='messages-container' id='messages-container'>
              <MessagesContainer users={this.props.users}
                                 channelId={ this.props.params.id} />
            </section>

            <footer className='new-messages-form-container'>
              <NewMessageFormContainer />
            </footer>
          </div>
  }
}

export default withRouter(CurrentChannel);
