import React from 'react';


class EditMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditMessageSubmit = this.handleEditMessageSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {content: this.props.messageContent};
  }

  handleChange(e) {
    e.preventDefault();
    const value = e.currentTarget.value;
    this.setState({[e.currentTarget.id]: value});
  }

  handleEditMessageSubmit(e) {
    e.preventDefault()
    let message = {}
    message.user_id = parseInt(this.props.messageUserId);
    message.chatroom_id = this.props.messageChatroomId;
    message.content = this.state.content;
    message.id = this.props.messageId;
    this.props.updateMessage(message).then((updatedMessage) => {      
      }
    ).then(this.props.submitEditHandler());
  }

  render() {
    return (
      <div>
        <form className='edit-message-form' onSubmit={this.handleEditMessageSubmit}>
          <textarea autoFocus type='text'  id='content' onChange={this.handleChange} value={this.state.content} />
          <div className='cancel-button' onClick={this.props.submitEditHandler}>Cancel</div>
          <button className='edit-submit' onClick={this.props.handleEditMessageSubmit}>Save Changes</button>
        </form>
      </div>
    )
  }
}

export default EditMessageForm;
