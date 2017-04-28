import React from 'react'

class MessageAttachment extends React.Component {
  constructor(props) {
    super(props)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAttachmentUpload = this.handleAttachmentUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = { attachmentContent: '', messageUpload: '', displayUrl: '', messageTitle: '', fileName: ''}
  }

  handleInputChange(e) {
    const inputVal = e.currentTarget.value;
    this.setState({[e.currentTarget.id]: inputVal})
  }

  getAttachmentType(fileName) {

    let baseFileName;
    if (fileName) {
      if (fileName[0] === '.') {
        if (fileName.length <= 1) {
          return '';
        } else {
          baseFileName = fileName.slice(1)
        }
      } else {
        baseFileName = fileName
      }

    } else {
      return '';
    }

    const lastIndex = baseFileName.lastIndexOf('.');
    if (lastIndex < 1) {
      return ''
    } else {
      return baseFileName.substr(lastIndex + 1)
    }
  }

  handleAttachmentUpload(e) {
    e.preventDefault()
    const targetEl = e.currentTarget
    const targetElField = targetEl.id

    const fileVal = targetEl.files[0];
    const uploadPath = targetEl.value


    // probably will want error checking here for if its a file
    const reader  = new FileReader();
    reader.onloadend = () => {
      this.setState({uploadPath: uploadPath, displayImage: reader.result, fileName: fileVal.name })
    }
    reader.readAsDataURL(fileVal);


  }

  handleSubmit(e) {
    e.preventDefault()
    const title = this.state.messageTitle ? this.state.messageTitle : this.state.fileName
    
    let formData = new FormData();
    formData.append('message[content]', this.state.attachmentContent)
    formData.append('message[message_type]', 'attachment');
    formData.append('message[message_attachment]', this.state.displayImage);
    formData.append('message[user_id]', this.props.currentUserId);
    formData.append('message[chatroom_id]', this.props.currentChannelId);
    formData.append('message[message_title]', title);

    this.props.createChannelAttachmentMessage(formData).then(() => this.props.toggleMessageAttachmentModal())
  }

  render() {
    const documentTypes = ['pdf', 'doc', 'ppt', 'xls', 'zip', 'docx', 'pptx', 'xlsx', 'txt']
    let previewImage;

    if (documentTypes.includes(this.getAttachmentType(this.state.uploadPath))) {
      previewImage = <div className='document-icon-container message-attachment-preview'>
        <i className="fa fa-file-text-o document-attachment-icon" aria-hidden="true"></i>
        <span className='message-attachment-filename'>{this.state.uploadPath}</span>
      </div>
    } else {
      previewImage = <img src={this.state.displayImage} className='message-attachment-preview' />
    }

    return(
      <form className='message-attachment-form' onSubmit={this.handleSubmit}>
        <div className = 'message-upload-box-inputs'>
          <div className='message-upload-box-container'>
            <label htmlFor='message-upload-box' className='upload-box-label'>Click to Upload</label>
            <div className='message-upload-container' id='message-upload-box'>
              <label htmlFor='messageUpload' className='message-attachment-enclosure'>
                {previewImage}
                <input type='file' className='message-attachment-file-upload' id='messageUpload' value={this.state.messageUpload} onChange={this.handleAttachmentUpload} />
              </label>
            </div>
          </div>
          <div className='message-attachment-title-container'>
            <label htmlFor='messageTitle' className='message-attachment-title-label'>Title</label>
            <input type='text' id="messageTitle" className='message-attachment-title' onChange={this.handleInputChange} value={this.state.messageTitle} />
          </div>
        </div>

        <div className='message-attachment-content-container'>
          <label htmlFor='attachmentContent' className='attachment-content-label'>
            <span className='attachment-label-text'>Add Comment</span>
            <span className='attachment-label-optional'>(optional)</span>
          </label>
          <textarea className='message-attachment-content' id='attachmentContent' onChange={this.handleInputChange}></textarea>
        </div>

        <div className='message-attachment-submit-btns'>
          <div className='cancel-message-attachment message-attachment-modal-close' onClick={this.props.toggleMessageAttachmentModal}>Cancel</div>
          <input type='submit' className='submit-message-attachment message-attachment-modal-close' value='Upload' />
        </div>
      </form>
    )
  }
}

export default MessageAttachment;
