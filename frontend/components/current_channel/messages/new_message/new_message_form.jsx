import React from 'react';
import { withRouter } from 'react-router';
import Modal from 'react-modal';
import MessageAttachmentContainer from './message_attachment_container';
import EmojiPickerContainer from '../emoji_picker_container';

class NewMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewMessageSubmit = this.handleNewMessageSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.focusAttachments = this.focusAttachments.bind(this);
    this.blurAttachments = this.blurAttachments.bind(this);

    this.state = {
                   content: '',
                   attachmentFocusStatus: '',
                   containerFocusState: '',
                   displayPicker: true
                 };

  }

  focusAttachments(e) {
    this.setState({attachmentFocusStatus: 'focused-attachments-btn', containerFocusState: 'focus-new-message-box'})
  }

  blurAttachments(e) {
    this.setState({attachmentFocusStatus: '', containerFocusState: ''})
  }


  handleChange(e) {
    e.preventDefault();
    const value = e.currentTarget.value;
    this.setState({[e.currentTarget.id]: value});
  }

  handleNewMessageSubmit(e) {
    e.preventDefault();
    let message = this.state;
    message.user_id = this.props.currentUser.id;

    message.chatroom_id = parseInt(this.props.params.id);
    message.message_type = 'message'
    this.props.createChannelMessage(message).then(
      this.setState( {content: ''} )
    );
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={this.props.messageAttachmentModalOpen}
          contentLabel='MessageAttachmentModal'
          onRequestClose={this.props.toggleMessageAttachmentModal}
          className='message-attachment-modal-container'
          overlayClassName='message-attachment-modal-overlay'>

          <header className='message-attachments-modal-header'>
            <h2 className='edit-modal-header'>Upload a file?</h2>
            <button className='message-attchments-close-btn' onClick={this.props.toggleMessageAttachmentModal}>
              <div className='x-icon message-attchments-x-icon'>x</div>
            </button>
          </header>

          <MessageAttachmentContainer />

        </Modal>

        <Modal
          isOpen={this.props.emojiModalOpen}
          contentLabel='EmojiModal'
          onRequestClose={this.props.toggleEmojiModal}
          className='emoji-modal'
          overlayClassName='emoji-modal-overlay'
          >
          <EmojiPickerContainer />

        </Modal>

        <form className='new-message-form' onSubmit={this.handleNewMessageSubmit}>
          <div className={`attachments-btn ${this.state.attachmentFocusStatus}`} onClick={this.props.toggleMessageAttachmentModal}>+</div>
          <div className={`message-input-field-container ${this.state.containerFocusState}`}>
            <input autoFocus
              type='text'
              className='message-input-field'
              id='content' onChange={this.handleChange}
              placeholder={`Message #${this.props.roomTitle}`}
              value={this.state.content}
              onFocus={this.focusAttachments}
              onBlur={this.blurAttachments} />
            <span className='emoji-launcher' onClick={this.props.toggleEmojiModal}>
              <i className="fa fa-smile-o" aria-hidden="true"></i>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(NewMessageForm);
