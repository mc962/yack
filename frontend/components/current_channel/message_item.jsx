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


    return (

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
}

export default MessageItem;
