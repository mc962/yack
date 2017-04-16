import React from 'react';
import { withRouter } from 'react-router';

import Modal from 'react-modal';
import ProfilePictureUploadContainer from './profile_picture_upload_container';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.submitLogout = this.submitLogout.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.openMenu = this.openMenu.bind(this);
    this.openPictureUpload = this.openPictureUpload.bind(this);
    this.handleEscape = this.handleEscape.bind(this)
    this.state = {popoverDisplay: 'hidden-popover', menuDisplay: 'hideable-menu', uploadModalOpen: false };
  }

  openMenu(e) {
    e.preventDefault();
    this.setState({popoverDisplay: ' transparent-popover-popover', menuDisplay: ''});
  }
  closeMenu(e) {
    e.preventDefault();
    this.setState({popoverDisplay: ' hidden-popover', menuDisplay: ' hideable-menu'});
  }

  openPictureUpload() {
    this.setState({ uploadModalOpen: true })
  }

  handleEscape() {
    this.setState({ uploadModalOpen: false })
  }

  submitLogout(e) {
    e.preventDefault();
    this.props.logout();


    this.props.router.push('/');

  }

  render() {

    return(
        <section className="profile">
          <div className='menu-toggle-btn' onClick={this.openMenu}>
            <div className='displayed-btn-text'>
              <div className='yack-logo-text'>
                <h2 className='team-name'>Yack</h2>
                <i className="fa fa-1x fa-chevron-down" aria-hidden="true"></i>
              </div>

              <div className='profile-username'>
                {this.props.currentUser.username}
              </div>
            </div>
          </div>

            <div className={'popover-mask' + this.state.popoverDisplay}
                 onClick={this.closeMenu}></div>

            <div className={this.state.menuDisplay}>
              <div className='profile-menu'>
                <div className='personal-profile-info'>
                  <div className='profile-menu-picture'>
                    <img className='profile-menu-picture gravatar-picture' src={this.props.currentUser.gravatar_url} alt={this.props.currentUser.username} />
                  </div>
                  <div className='name-text'>
                    <div className='normal-name'>{this.props.currentUser.username}</div>
                    <div className='at-name'>@{this.props.currentUser.username}</div>
                  </div>
                </div>
                <div className='menu-items'>
                  <div className='menu-element' onClick={this.openPictureUpload}>
                    Change Profile Picture
                  </div>
                  <form className='logout-button menu-element' onSubmit={this.submitLogout}>
                    <input className='logout-button-input' type='submit' value='Logout' />
                  </form>
                </div>
              </div>
            </div>

            <Modal
              isOpen={this.state.uploadModalOpen}
              contentLabel="ProfilePictureUploadModal"
              onRequestClose={this.handleEscape}
              className={'profile-picture-upload-modal'}
              overlayClassName={'profile-picture-upload-overlay'} >

              <button className='modal-close-btn' onClick={this.handleEscape}>
                <div className='x-icon'>x</div>
                <div className='esc-text'>esc</div>
              </button>
              <ProfilePictureUploadContainer handleEscape={this.handleEscape} />

            </Modal>
        </section>
    );
  }
}

export default withRouter(Profile);
