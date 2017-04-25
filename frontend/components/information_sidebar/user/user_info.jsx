import React from 'react';
import Modal from 'react-modal';
import { withRouter } from 'react-router'

import EditProfileContainer from './edit_profile_container';

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.handleEditProfile = this.handleEditProfile.bind(this);
    this.handleEscape = this.handleEscape.bind(this);
    this.returnToUsers = this.returnToUsers.bind(this);
    this.escapeInfo = this.escapeInfo.bind(this);
    this.leaveHandler = this.leaveHandler.bind(this);
    this.redirect = this.redirect.bind(this);

    this.state = ({ profileModalIsOpen: false })
  }

  redirect() {
    this.props.router.push(`/channels/${this.props.genChannelRoomId}`);
  }

  handleEditProfile() {
    this.setState({ profileModalIsOpen: true })
  }

  escapeInfo() {
    this.props.router.replace(`/channels/${this.props.roomId}`)
  }
  handleEscape() {
    this.setState({ profileModalIsOpen: false })
  }

  returnToUsers() {
    this.props.router.replace(`/channels/${this.props.roomId}/users`)
  }

  leaveHandler(e) {
    e.preventDefault();
    const currentUserId = this.props.currentUserId;
    this.props.leaveChannel({chatroom_id: this.props.roomId, user_id: this.props.currentUserId, username: this.props.currentUserUsername}).then((receivedChannel) => {
      this.props.fetchCurrentUser(currentUserId)
      this.redirect();
    })
  }

  render() {
    let editButton;
    let email;
    if (parseInt(this.props.params.user_id) === parseInt(this.props.currentUserId)) {
      editButton = (
        <div className='edit-user-modal-btn' onClick={this.handleEditProfile} >
          Edit Profile
        </div>
      )
      email = (
        <tr className='detail-row email-row'>
          <td className='detail-cell detail-label email-label'>Email</td>
          <td className='detail-cell user-detail-data email-data'><a href={`mailto:${this.props.email}`} className='user-detail-email'>{this.props.email}</a></td>
        </tr>
      )

    }

    const modalChannels = {
      content: {
        top: '0%',
        right: '0%',
        bottom: '0%',
        left: '0%'
      }
    };



    return (
      <sidebar className='user-profile-information-container'>
        <Modal
          isOpen={this.state.profileModalIsOpen}
          contentLabel="EditProfileModal"
          onRequestClose={this.handleEscape}
          className='edit-profile-modal-container'
          overlayClassName='edit-profile-modal-overlay'
           >

          <header className='edit-modal-header-container'>
            <h2 className='edit-modal-header'>Edit your profile</h2>
            <button className='profile-modal-close-btn' onClick={this.handleEscape}>
              <div className='x-icon edit-modal-x-icon'>x</div>
              </button>
          </header>
          <EditProfileContainer handleEscape={this.handleEscape} />

        </Modal>
        <div className='top-content'>
          <header className='profile-details-header'>
            <div className='profile-details-title' onClick={this.returnToUsers}>
              <div className="profile-details-chevron">
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
              </div>
              <div className='profile-details-title-text'>
                Team Directory
              </div>
            </div>
            <div className='details-x-icon' onClick={this.escapeInfo}>
              x
            </div>
          </header>

          <div className='directory-user-details'>
            <img src={this.props.pictureUrl} alt='Profile Picture' className='user-info-picture' title='Image resizing coming soon'/>
            <h2 className='user-profile-fullname'>{`${this.props.firstName} ${this.props.lastName}`}</h2>

            {editButton}

            <hr />

            <table className='user-details-table'>
              <tbody>
                <tr className='detail-row username-row'>
                  <td className='detail-cell detail-label username-label'>Username</td>
                  <td className='detail-cell user-detail-data username-data'>{`@${this.props.username}`}</td>
                </tr>
                {email}
              </tbody>
            </table>

          </div>

        </div>


      </sidebar>
    )
  }
}

export default UserInfo
