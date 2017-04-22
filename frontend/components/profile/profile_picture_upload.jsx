import React from 'react'

class ProfilePictureUpload extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='profile-picture-upload-container'>
        <img src='' alt='Preview' className='profile-picture-preview'/>
        <form className='profile-picture-upload-form' onSubmit={this.uploadPicture}>

        </form>
      </div>
    )
  }
}

export default ProfilePictureUpload;
