import React from 'react';
import Modal from 'react-modal';

import EditProfileContainer from './edit_profile_container';

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({ profileModalIsOpen: false })
    this.handleEditProfile = this.handleEditProfile.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
  }

  handleEditProfile() {
    this.setState({ profileModalIsOpen: true })
  }

  handleEscape() {
    this.setState({ profileModalIsOpen: false })
  }


  render() {
    let editButton;
    let email;
    if (parseInt(this.props.params.id[1]) === parseInt(currentUser.id)) {
      editButton = (
        <div className='edit-user-modal-btn' onClick={this.handleEditProfile} >
          Edit Profile
        </div>
      )
      email = this.props.email
    }
    return (
      <section className='user-profile-information'>
        <img src='' alt='Profile Picture' className='user-info-picture' />
        <h2 className='user-profile-fullname'>{`${this.props.firstName} ${this.props.lastName}`}</h2>
        {editButton}
        <div className='info-username'>
          {`@${this.props.username}`}
        </div>
        <Modal
          isOpen={this.state.profileModalIsOpen}
          contentLabel="EditProfileModal"
          onRequestClose={this.handleEscape} >

          <button className='modal-close-btn' onClick={this.handleEscape}>
            <div className='x-icon'>x</div>
            <div className='esc-text'>esc</div>
          </button>
          <EditProfileContainer handleEscape={this.handleEscape} />

        </Modal>
      </section>
    )
  }
}

export default UserInfo
