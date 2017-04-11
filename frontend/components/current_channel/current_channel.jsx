/* globals Pusher */
import React from 'react';
import ReactDom from 'react-dom';
import MessageItemContainer from './message_item_container';
import { withRouter } from 'react-router';
import NewMessageFormContainer from './new_message/new_message_container';
import ChannelInfoContainer from '../channel_info/channel_info_container';
import LoadingIcon from '../shared/loading_icon';
import MessagesContainer from './messages_container';

class CurrentChannel extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount(){
    const channelId = parseInt(this.props.params.id);
    this.props.fetchCurrentChannel(channelId);
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
