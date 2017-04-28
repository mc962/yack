import React from 'react';
import EditMessageContainer from './new_message/edit_message_container';

class MessageItem extends React.Component {
  constructor(props) {
    super(props);

    // editClickHandler is for the button in the messageItem component
    // while editEscapeHandler is for the button in the edit message form
    this.editClickHandler = this.editClickHandler.bind(this);
    this.editEscapeHandler = this.editEscapeHandler.bind(this);
    this.deleteClickHandler = this.deleteClickHandler.bind(this);

    this.state = { editable: false }
  }

  // render message content OR edit form
  editClickHandler(e) {
    e.preventDefault();
    this.setState({editable: true})
  }

  editEscapeHandler() {
    this.setState({editable: false})
  }

  deleteClickHandler(e) {
    e.preventDefault();
    let messagePackage = {id: this.props.messageId, chatroom_id: this.props.channelId};

    this.props.deleteChannelMessage(messagePackage);
  }

  _timeStringFormatter(timeString) {

    const timeObj = new Date(timeString);
    const todayDate = new Date(Date.now());

    let formattedTime;
    if (timeObj.toDateString() === todayDate.toDateString()) {
      formattedTime = `${this._timeFormatter(timeObj)}`
    } else {
      formattedTime = `${this._timeFormatter(timeObj)} | ${this._dateFormatter(timeObj)}`
    }

    return formattedTime;
  }

  _timeFormatter(timeObj) {
    timeObj = new Date(timeObj)
    return `${timeObj.getHours()}:${this._minSecPadder(timeObj.getMinutes())}`
  }

  _dateFormatter(timeObj) {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    return `${months[timeObj.getMonth()].slice(0, 3)} ${timeObj.getDate()}`
  }

  _minSecPadder(num) {
    let paddedNum = num;
    if (num < 10) {
      paddedNum = '0' + num
    }
    return paddedNum
  }

  processImageMessage() {
    let channelMessageActions;
    if (this.props.userId !== this.props.currentUserId) {
      channelMessageActions = <div className='no-actions'></div>
    } else {
          channelMessageActions = (
          <div className='message-actions hoverable-btns'>
            <div className='msg-delete-btn' onClick={this.deleteClickHandler}>
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </div>
          </div>
        )
    }
    return (
      <li className='message-element'>
        <div className='message-info'>
          <img src={this.props.gravatarUrl} alt={this.props.username} className='user-picture' />
          <div className='message-text'>
            <div className ='message-author'>
              <div className='author-name'>
                {this.props.username}
              </div>
            <div className ='picture-display-time'>{this._timeStringFormatter(this.props.createdAt)}</div>
          </div>

        <div className='message-content dont-break-out'>


          <span className='image-attachment-title' title="Click to download">
            <a href={this.props.attachmentUrl} download={this.props.messageTitle} className='message-download-link'>
              {this.props.messageTitle}
            </a>
          </span>

          <div className='image-attachment-content' title="Click to download">
            <a href={this.props.attachmentUrl} download={this.props.messageTitle} className='message-download-link'>
              <img src={this.props.previewUrl} alt='' className='message-attachment-image' />
            </a>
          </div>

          <div className='message-attachment-text'>
            <span className='attachment-quote'><i className="fa fa-quote-left" aria-hidden="true"></i></span>
            {this.props.content}
          </div>




        </div>
          </div>
        </div>
        {channelMessageActions}
      </li>
    )
  }

  processDocumentMessage() {
    let channelMessageActions;
    if (this.props.userId !== this.props.currentUserId) {
      channelMessageActions = <div className='no-actions'></div>
    } else {
          channelMessageActions = (
          <div className='message-actions hoverable-btns'>
            <div className='msg-delete-btn' onClick={this.deleteClickHandler}>
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </div>
          </div>
        )
    }
    return (
      <li className='message-element'>
        <div className='message-info'>
          <img src={this.props.gravatarUrl} alt={this.props.username} className='user-picture' />
          <div className='message-text'>
            <div className ='message-author'>
              <div className='author-name'>
                {this.props.username}
              </div>
            <div className ='picture-display-time'>{this._timeStringFormatter(this.props.createdAt)}</div>
          </div>

        <div className='message-content dont-break-out'>
          <div className='document-attachment-content'>
            <a href={this.props.attachmentUrl} download={this.props.messageTitle} className='message-download-link'>
              <div className='content-image-container' title="Click to download">
                <span className="document-message-icon"><i className="fa fa-file-text-o" aria-hidden="true"></i></span>
                <span className='document-attachment-title'>
                  {this.props.messageTitle}
                </span>
              </div>
            </a>
          </div>

          <div className='message-attachment-text'>
            <span className='attachment-quote'><i className="fa fa-quote-left" aria-hidden="true"></i></span>
            {this.props.content}
          </div>
        </div>
          </div>
        </div>
        {channelMessageActions}
      </li>
    )
  }


  render() {

    let pictureSpot;
    let pictureDisplayTime
    if (this.props.gravatarUrl === '') {
      pictureSpot = (
        <div className='gutter'>
          <div className ='gutter-display-time hoverable-time'>{this._timeFormatter(this.props.createdAt)}</div>
        </div>
      )

    } else {
      pictureSpot = <img src={this.props.gravatarUrl} alt={this.props.username} className='user-picture' />
      pictureDisplayTime = <div className ='picture-display-time'>{this._timeStringFormatter(this.props.createdAt)}</div>
    }

    let channelMessageActions;

    if (this.props.userId !== this.props.currentUserId) {
      channelMessageActions = <div className='no-actions'></div>
    } else {

          channelMessageActions = (
          <div className='message-actions hoverable-btns'>
            <div className='msg-edit-btn' onClick={this.editClickHandler}>
              <i className="fa fa-pencil" aria-hidden="true"></i>
            </div>
            <div className='msg-delete-btn' onClick={this.deleteClickHandler}>
              <i className="fa fa-trash-o" aria-hidden="true"></i>
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
                                                userPicture={this.props.gravatarUrl}
                                                editEscapeHandler={this.editEscapeHandler}/>
    } else {
      if (this.props.messageType === 'message') {
        renderableContent = (
          <li className='message-element'>
            <div className='message-info'>
              {pictureSpot}
              <div className='message-text'>
                <div className ='message-author'>
                  <div className='author-name'>
                    {this.props.username}
                  </div>
                  {pictureDisplayTime}
                </div>

                <div className='message-content dont-break-out'>{this.props.content}</div>
              </div>
            </div>
            {channelMessageActions}
          </li>
        );
      } else if (this.props.messageType === 'attachment') {
          // renderableContent = <li className='message-element'>Placeholder Content...</li>
          if (this.props.contentType.split('/').includes('image')) {
            renderableContent = this.processImageMessage()
          } else {
            // since documents are covered under the relatively broad MIME type of application
            // they will be handled in the else statement; for more specific things like image or video, they would get
            // a singular else if block
            renderableContent = this.processDocumentMessage()
          }

      } else {
        renderableContent = <li className='message-element'>Invalid message type!</li>
      }
    }

    return renderableContent;

  }
}

export default MessageItem;
