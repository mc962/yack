import React from 'react';

class EditProfile extends React.Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
    this.submitProfileUpdate = this.submitProfileUpdate.bind(this);
    this.deleteUploadedPicture = this.deleteUploadedPicture.bind(this);

    this.state = {firstName: this.props.firstName, lastName: this.props.lastName, currentPhoto: this.props.imageUrl, fileUpload: '', imageFile: '', displayImage: ''}
  }

  handleChange(e) {
    const inputVal = e.currentTarget.value;
    this.setState({[e.currentTarget.id]: inputVal})
  }

  handlePhotoChange(e) {
    e.preventDefault()

    const targetEl = e.currentTarget
    const targetElField = targetEl.id

    const fileVal = targetEl.files[0];
    const uploadPath = targetEl.value

    // probably will want error checking here for if its a file
    const reader  = new FileReader();
    reader.onloadend = () => {
      this.setState({targetElField: uploadPath, imageFile: fileVal, displayImage: reader.result })
    }
    reader.readAsDataURL(fileVal);

  }

  deleteUploadedPicture(e) {
    e.preventDefault()
    let formData = new FormData()
    formData.append('user[id]', this.props.currentUserId);
    formData.append('user[delete_photo]', 'delete_photo');
    this.props.updateUser(formData).then(() => this.props.toggleUserInfoModal())
  }

  submitProfileUpdate(e) {
    e.preventDefault()
    // console.log('Will need to hook this up to container actions')
    let formData = new FormData();
    formData.append('user[id]', this.props.currentUserId);
    formData.append('user[first_name]', this.state.firstName)
    formData.append('user[last_name]', this.state.lastName);
    formData.append('user[profile_picture]', this.state.displayImage);
    this.props.updateUser(formData).then(() => this.props.toggleUserInfoModal())

  }

  render() {
    const displayUrl = this.state.displayImage ? this.state.displayImage : this.state.currentPhoto
    return (
      <form className='edit-profile-container' onSubmit={this.submitProfileUpdate}>

        <div className='edit-profile-inputs-container'>

          <div className='edit-profile-name-inputs-container'>
            <div className='edit-name-unit'>
              <label className='edit-profile-first-name edit-profile-label' htmlFor='firstName'>First name</label>
              <input type='text' className='edit-first-name-input edit-profile-input' id='firstName' value={this.state.firstName} onChange={this.handleChange} />
            </div>
            <div className='edit-name-unit'>
              <label className='edit-profile-last-name edit-profile-label' htmlFor='lastName'>Last name</label>
              <input type='text' className='edit-last-name-input edit-profile-input' id='lastName' value={this.state.lastName} onChange={this.handleChange} />
            </div>
          </div>
          <div className='edit-profile-upload-container'>
            <label htmlFor='pictureUpload' className='edit-photo-label'>Profile photo</label>
            <label htmlFor='fileUpload' className='edit-profile-image-enclosure' title='Click to upload'>
              <img src={displayUrl} className='profile-upload-photo' id='pictureUpload' alt='Current Photo' onChange={this.handleChange} />
              <input type='file' className='edit-profile-file-upload' id='fileUpload' value={this.state.fileUpload} onChange={this.handlePhotoChange} />
            </label>
            <div className='delete-profile-photo' onClick={this.deleteUploadedPicture}>Delete Uploaded Photo</div>
          </div>

        </div>

        <div className='edit-profile-submit-btns'>
          <div className='edit-profile-cancel-btn' onClick={this.props.toggleUserInfoModal} >Cancel</div>
          <input type='submit' className='submit-profile-edit-btn' value='Save Changes' />
        </div>

      </form>
    )
  }
}

export default EditProfile;
