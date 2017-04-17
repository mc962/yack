/* globals Pusher */
import React from 'react';
import ReactDom from 'react-dom';
import { withRouter } from 'react-router';

import LoadingIcon from '../shared/loading_icon';

import ChannelInfoContainer from '../channel_info/channel_info_container';

import MessagesContainer from './messages/messages_container';
import NewMessageFormContainer from './messages/new_message/new_message_container';
import InformationSidebarContainer from '../information_sidebar/information_sidebar_container'

class CurrentChannel extends React.Component {
  constructor(props) {
    super(props);
  }

  currentSidebarComponent() {

  }

  render() {
// sidebar will render particular component based on dispatched actions from state
        return this.props.loading ?
          <LoadingIcon /> :



          <div className='current-channel-sections'>
              <ChannelInfoContainer />

            <div className='dynamic-channel-info'>

              <div className='messages-content-area'>
                <section className='messages-container' id='messages-container'>
                  <MessagesContainer users={this.props.users}
                    channelId={ this.props.params.id} />
                </section>

                <footer className='new-messages-form-container'>
                  <NewMessageFormContainer />
                </footer>
              </div>

              {this.props.children}

            </div>

          </div>
  }
}

export default withRouter(CurrentChannel);
