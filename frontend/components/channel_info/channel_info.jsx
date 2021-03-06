import React from 'react';
import { withRouter } from 'react-router';

class ChannelInfo extends React.Component {
  constructor(props) {
    super(props);
    this.leaveHandler = this.leaveHandler.bind(this);
    this.redirect = this.redirect.bind(this);
    this.toggleDisplayInformation = this.toggleDisplayInformation.bind(this);

  }

  leaveHandler(e) {
    e.preventDefault();
    const currentUserId = this.props.currentUserId;
    this.props.leaveChannel({chatroom_id: this.props.roomId, user_id: this.props.currentUserId, username: this.props.currentUserUsername}).then((receivedChannel) => {
      this.props.fetchCurrentUser(currentUserId)
      this.redirect();
      })
  }

  redirect() {
    this.props.router.replace(`/channels/${this.props.genChannelRoomId}`);
  }

  toggleDisplayInformation(e) {

    const currPath = this.props.location.pathname;
    const channelPath = `/channels/${this.props.params.id}`
    const infoPath = `/channels/${this.props.params.id}/information`
    const newPath = currPath === channelPath ? infoPath : channelPath

    this.props.router.replace(newPath)

  }

  constructRoomTitle(title) {
    let titleUsers = title.split(', ')
    if (titleUsers.length === 1) {
      if (titleUsers[0] === this.props.currentUserUsername) {
        return `${this.props.currentUserUsername} (you)`
      }
    }

    let roomTitleUsernames = titleUsers.filter((username) => {
      return username !== this.props.currentUserUsername
    });

    return roomTitleUsernames.join(', ');
  }

  render() {
    let btnTxt;
    let filteredRoomTitle = this.props.roomTitle;
    let displayRoomPurpose = this.props.roomPurpose;

    if (this.props.roomTitle) {
      btnTxt = 'Leave Channel';
    } else {
      btnTxt = '';
    }

    if (this.props.roomType === 'direct_message') {
      filteredRoomTitle = `${this.constructRoomTitle(filteredRoomTitle)}`;
      if (this.props.roomTitle.split(', ').length === 1) {
        filteredRoomTitle = '@' + filteredRoomTitle
      }
    } else {
      filteredRoomTitle = `#${this.props.roomTitle}`;
    }

    if (!displayRoomPurpose) {
      displayRoomPurpose = '-'
    }
    // <div className='leave-channel-btn' onClick={this.leaveHandler}>{btnTxt}</div>
    return(
      <header className='channel-information-container'>
        <div className='room-text-container'>

          <div className='info-room-title'>{filteredRoomTitle}</div>

          <div className='room-stats'>
            <i className="fa fa-user-o" aria-hidden="true"></i>
            <div className='users-number'>{this.props.numUsers}</div>
            <div className='line-separator'>|</div>
            <div className='room-purpose'>{displayRoomPurpose}</div>
          </div>

        </div>
        <div className='channel-information-nav-btns'>
          <span className='info-nav' onClick={this.toggleDisplayInformation}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </span>
        </div>
      </header>
    );
  }
}

export default withRouter(ChannelInfo);
