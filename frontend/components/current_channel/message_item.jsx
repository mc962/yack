import React from 'react';
import EditMessageContainer from './new_message/edit_message_container';

class MessageItem extends React.Component {
  constructor(props) {
    super(props);

    // editClickHandler is for the button in the messageItem component
    // while submitEditHandler is for the button in the edit message form
    this.editClickHandler = this.editClickHandler.bind(this);
    this.submitEditHandler = this.submitEditHandler.bind(this);
    this.deleteClickHandler = this.deleteClickHandler.bind(this);

    this.state = { editable: false }
  }

  // render message content OR edit form
  editClickHandler(e) {
    e.preventDefault();

    this.setState({editable: true})
  }

  submitEditHandler() {    
    this.setState({editable: false})
  }

  deleteClickHandler(e) {
    e.preventDefault();
    let messagePackage = {id: this.props.messageId, chatroom_id: this.props.channelId};

    this.props.deleteMessage(messagePackage);

  }

  render() {
    let pictureSpot;
    if (this.props.gravatarUrl === '') {
      pictureSpot = <div className='gutter'></div>
    } else {
      pictureSpot = <img src={this.props.gravatarUrl} alt={this.props.username} className='user-picture' />
    }

    let channelMessageActions;

    if (this.props.userId !== this.props.currentUserId) {
      channelMessageActions = <div className='no-actions'></div>
    } else {

          channelMessageActions = (
          <div className='message-actions hoverable-btns'>
            <div className='msg-edit-btn'>
              <i className="fa fa-pencil" aria-hidden="true" onClick={this.editClickHandler}></i>
            </div>
            <div className='msg-delete-btn'>
              <i className="fa fa-trash-o" aria-hidden="true" onClick={this.deleteClickHandler}></i>
            </div>
          </div>
        )

    }

    let renderableContent;
    if (this.state.editable) {

      renderableContent = <EditMessageContainer userId={this.props.currentUserId}
                                                chatroomId={this.props.channelId}
                                                content={this.props.content}
                                                messageId={this.props.messageId}
                                                submitEditHandler={this.submitEditHandler}/>
    } else {
      renderableContent = (
        <li className='message-element'>
          <div className='message-info'>
            {pictureSpot}
            <div className='message-text'>
              <div className ='message-author'>{this.props.username}</div>
              <div className='message-content dont-break-out'>{this.props.content}</div>
            </div>
          </div>
          {channelMessageActions}
        </li>
      );
    }

    return renderableContent;

  }
}

export default MessageItem;
