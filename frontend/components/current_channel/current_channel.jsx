import React from 'react';
import MessageItem from './message_item';
import { withRouter } from 'react-router';

class CurrentChannel extends React.Component {
  constructor(props) {
    super(props)

  }
  componentDidMount(){

    const channelId = parseInt(this.props.params.id)

    this.props.fetchCurrentChannel(channelId);

  }

  componentWillReceiveProps(newProps) {
    const channelId = parseInt(this.props.params.id)
    const newPropsId = parseInt(newProps.params.id)
    const paramsId = parseInt(this.props.params.id)
    // debugger
    if (newPropsId !== paramsId) {
      this.props.fetchCurrentChannel(channelId);
    }
  }

  render() {

  let messageElements;
    if (this.props.messages) {

      messageElements = this.props.messages.map((message, idx) => {
        return <MessageItem key={idx} userId={message.user_id} content={message.content} />
      })
    } else {
      return <div className='no-messages'></div>
    }


    return (
      <div className='current-channel-sections'>
        <header className='channel-information'>
          This is my current channel: Channel {this.props.channelId}
        </header>
        <section className='messages-container'>
          <ul className='channel-messages-list'>
            {messageElements}
          </ul>
        </section>
        <footer className='new-messages-form-container'>
          Bob
        </footer>
      </div>
    )
  }
}

export default withRouter(CurrentChannel);
