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
    this.props.leaveChannel({chatroom_id: this.props.roomId, user_id: this.props.currentUserId}).then((receivedChannel) => {
      this.props.fetchCurrentUser(currentUserId)
      this.redirect();
      })
  }

  redirect() {
    this.props.router.push(`/channels`);
  }

  render() {
    let btnTxt;
    if (this.props.roomTitle) {
      btnTxt = 'Leave Channel';
    } else {
      btnTxt = '';
    }

    return(
      <section className='information-container'>
        <div className='room-text-container'>

          <div className='info-room-title'>#{this.props.roomTitle}</div>

          <div className='room-stats'>
            <i className="fa fa-user-o" aria-hidden="true"></i>
            <div className='users-number'>{this.props.numUsers}</div>
            <div className='line-separator'>|</div>
            <div className='room-purpose'>{this.props.roomPurpose}</div>
          </div>

          <div className='leave-channel-btn' onClick={this.leaveHandler}>{btnTxt}</div>
        </div>
      </section>
    );
  }
}

export default withRouter(ChannelInfo);
