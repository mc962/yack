import React from 'react';
import Modal from 'react-modal';

import EditProfileContainer from './edit_profile_container';

class UserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({ profileModalIsOpen: true })
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
    if (parseInt(this.props.params.user_id) === parseInt(currentUser.id)) {
      editButton = (
        <div className='edit-user-modal-btn' onClick={this.handleEditProfile} >
          Edit Profile
        </div>
      )
      email = this.props.email
    }

    const modalChannels = {
      content: {
        top: '0%',
        right: '0%',
        bottom: '0%',
        left: '0%'
      }
    };

    // addd in a back caret when get font awesome

    return (
      <section className='user-profile-information'>
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
        <header className='directory-header'>Team Directory</header>

        <div className='directory-user-details'>
          <img src='' alt='Profile Picture' className='user-info-picture' />
          <h2 className='user-profile-fullname'>{`${this.props.firstName} ${this.props.lastName}`}</h2>

          {editButton}

          <hr />

          <table className='user-details-table'>
            <tbody>
              <tr className='detail-row username-row'>
                <td className='detail-cell detail-label username-label'>Username</td>
                <td className='detail-cell user-detail-data username-data'>{`@${this.props.username}`}</td>
              </tr>
              <tr className='detail-row email-row'>
                <td className='detail-cell detail-label email-label'>Email</td>
                <td className='detail-cell user-detail-data email-data'>{this.props.email}</td>
              </tr>
            </tbody>
          </table>


        </div>


      </section>
    )
  }
}

export default UserInfo
