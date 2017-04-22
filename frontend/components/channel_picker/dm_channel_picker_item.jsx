import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class DMChannelPickerItem extends React.Component {
  constructor(props) {
    super(props);
    this.linkClickHandler = this.linkClickHandler.bind(this);
  }

  linkClickHandler(e) {
    e.preventDefault();
    
    hashHistory.push(`/channels/${this.props.channelId}`);

  }

  constructRoomTitle(title) {
    let titleUsers = title.split(', ')
    if (titleUsers.length === 1) {
      if (titleUsers[0] === this.props.currentUserUsername) {
        return `${this.props.currentUserUsername} (you)`
      }
    }

    let roomTitleUsernames = titleUsers.filter((username) => {
      if (username !== this.props.currentUserUsername) {
        return username;
      }
    });

    return roomTitleUsernames.sort().join(', ');
  }

  render() {
    let classList = ['dm-channel-element', 'channel-element'];

    let channelId = this.props.channelId;
    if (channelId === parseInt(this.props.params.id)) {
      classList.push(" selected-channel-element");
    } else {
      classList.push('dm-channel-element channel-element dm-hoverable');
    }

    classList = classList.join(' ')
    const filteredRoomTitle = this.constructRoomTitle(this.props.roomTitle)

    const listEl = (
      <button className={classList} onClick={this.linkClickHandler}>
      <li className='element-text'>
          <img src={images.cartoon_yak} alt="A yak" className='dm-yak' />{filteredRoomTitle}
      </li>
    </button>
  );

    return (
      listEl
    );
  }
}

export default withRouter(DMChannelPickerItem);
