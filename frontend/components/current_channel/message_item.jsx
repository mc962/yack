import React from 'react';


class MessageItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.editClickHandler = this.editClickHandler.bind(this);
    this.deleteClickHandler = this.deleteClickHandler.bind(this);

  }
  editClickHandler(e) {
    e.preventDefault();
    // updateMessage(this.props.messageId).then(
    //   this.props.fetchCurrentChannel(this.props.channelId)
    // );
    console.log('Also not yet implemented. But you can always destroy and start fresh. Once more, a random number for your troubles.');
    console.log(Math.floor((Math.random(42)*10)));
  }

  deleteClickHandler(e) {
    e.preventDefault();
    let messagePackage = {id: this.props.messageId, chatroom_id: this.props.channelId};

    this.props.deleteMessage(messagePackage); /// might need a follow up method

  }

  render() {
    return (

        <li className='message-element'>
          <div className='message-info'>
            <img className='user-picture' src={this.props.gravatarUrl} alt={this.props.username} />

            <div className='message-text'>


              <div className ='message-author'>{this.props.username}</div>
              <div className='message-content dont-break-out'>{this.props.content}</div>
            </div>

          </div>
          <div className='message-actions'>
            <div className='msg-edit-btn'>
              <i className="fa fa-pencil" aria-hidden="true" onClick={this.editClickHandler}></i>
            </div>
            <div className='msg-delete-btn'>
              <i className="fa fa-trash-o" aria-hidden="true" onClick={this.deleteClickHandler}></i>
            </div>
          </div>



        </li>

    );

  }
}

export default MessageItem;
