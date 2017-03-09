import React from 'react';
import ReactDOM from 'react-dom';

class EditMessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditMessageSubmit = this.handleEditMessageSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addFocus = this.addFocus.bind(this);
    this.removeFocus = this.removeFocus.bind(this);
    this.handleEscapeKey = this.handleEscapeKey.bind(this);

    this.handleComponentClick = this.handleComponentClick.bind(this);

    this.state = {content: this.props.messageContent};
  }

  componentWillMount() {
    document.addEventListener('click', this.handleComponentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleComponentClick, false);
  }

  handleComponentClick(e) {
    // if component represented by this does not contain click target, handle submit logic
    if(!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.props.editEscapeHandler();
    }
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
    ).then(this.props.editEscapeHandler());
  }

  handleEscapeKey(e) {
    if (e.keyCode === 27) {
      this.props.editEscapeHandler();
    }
  }
  addFocus(e) {
    // let el = e.currentTarget
    // let modifiedClassList = el.classList.split(' ').push('focused-textarea').join(' ')
    let editContainer = document.querySelector('.edit-input-container')
    editContainer.classList.add('focused-textarea');
    // el.classList = modifiedClassList;
  }

  removeFocus(e) {
    // let el = e.currentTarget
    // let modifiedClassList = el.classList.split(' ').filter((el) => el !== 'focused-textarea').join(' ')
    let editContainer = document.querySelector('.edit-input-container')
    editContainer.classList.remove('focused-textarea');
    // el.classList = modifiedClassList;
  }

  render() {

    let pictureSpot;
    if (this.props.userPicture === '') {
      pictureSpot = <div className='edit-form-gutter'></div>
    } else {
      pictureSpot = <img src={this.props.userPicture} alt={this.props.username} className='user-picture edit-form-picture' />
    }


    return (
      <div className='edit-form-container'>

        <form className='edit-message-form'>
          <div className='user-edit-content'>
            {pictureSpot}
            <div className='edit-form-content-controls'>
              <div className='edit-input-container'>
                <textarea className='edit-input-content'
                          id='content'
                          autoFocus type='text'
                          value={this.state.content}
                          onChange={this.handleChange}
                          onFocus={this.addFocus}
                          onBlur={this.removeFocus}
                          onKeyDown={this.handleEscapeKey}/>
              </div>
              <div className='edit-form-exit-btns'>
                <div className='cancel-button edit-submit-btn' onClick={this.props.editEscapeHandler}>Cancel</div>
                <div className='edit-content-submit edit-submit-btn' onClick={this.handleEditMessageSubmit}>
                  <div className='return-key'><i className="fa fa-level-down" aria-hidden="true"></i></div>
                  <div className='save-edit-btn-txt'>Save Changes</div>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default EditMessageForm;
