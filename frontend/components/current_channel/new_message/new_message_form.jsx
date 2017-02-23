import React from 'react';
import { withRouter } from 'react-router';

class NewMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewMessageSubmit = this.handleNewMessageSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.placeholderHandler = this.placeholderHandler.bind(this);
  
    this.state = {content: ''};
  }


  handleChange(e) {
    e.preventDefault();
    const value = e.currentTarget.value;
    this.setState({[e.currentTarget.id]: value});
  }


  placeholderHandler(e) {
    e.preventDefault();
    console.log('This button is meant for message attachments. If you are seeing this, message attachments have not yet been implemented.');
    console.log(`Have a random number for your troubles: ${Math.floor(Math.random()*1000000)}`);
  }

  handleNewMessageSubmit(e) {
    e.preventDefault();
    let message = this.state;
    message.user_id = currentUser.id;

    message.chatroom_id = parseInt(this.props.params.id);

    this.props.createMessage(message).then(() => this.setState({content: ''}));

  }

  render() {
    // debugger
    return (
      <form className='new-message-form' onSubmit={this.handleNewMessageSubmit}>
        <div className='attachments-btn' onClick={this.placeholderHandler}>+</div>
        <input type='text' className='message-input-field' id='content' onChange={this.handleChange} placeholder={`Message #${this.props.roomTitle}`} value={this.state.content} />
      </form>
    );
  }
}

export default withRouter(NewMessageForm);
