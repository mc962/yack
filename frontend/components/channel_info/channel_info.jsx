import React from 'react';
import { withRouter } from 'react-router';

class ChannelInfo extends React.Component {
  constructor(props) {
    super(props);
    this.leaveHandler = this.leaveHandler.bind(this);
    this.redirect = this.redirect.bind(this);
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
    this.props.router.push(`/channels`);
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
    return(
      <section className='information-container'>
        <div className='room-text-container'>

          <div className='info-room-title'>{filteredRoomTitle}</div>

          <div className='room-stats'>
            <i className="fa fa-user-o" aria-hidden="true"></i>
            <div className='users-number'>{this.props.numUsers}</div>
            <div className='line-separator'>|</div>
            <div className='room-purpose'>{displayRoomPurpose}</div>
          </div>

          <div className='leave-channel-btn' onClick={this.leaveHandler}>{btnTxt}</div>
        </div>
      </section>
    );
  }
}

export default withRouter(ChannelInfo);
