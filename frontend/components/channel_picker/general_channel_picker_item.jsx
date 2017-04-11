import React from 'react';
import { Link, withRouter, hashHistory } from 'react-router';

class GeneralChannelPickerItem extends React.Component {
  constructor(props) {
    super(props);
    this.linkClickHandler = this.linkClickHandler.bind(this);
  }

  linkClickHandler(e) {

    e.preventDefault();
    const newChannelId = parseInt(this.props.params.id);
    // this.props.fetchCurrentChannel(this.props.channelId);
    hashHistory.push(`/channels/${this.props.channelId}`);
  }


  render() {
    let classList = ['general-channel-element', 'channel-element'];
    let channelId = this.props.channelId;
    if (channelId === parseInt(this.props.params.id)) {
      classList.push("selected-channel-element");
    } else {
      classList.push('general-hoverable');
    }

    classList = classList.join(' ')
    let listEl = (
      <button className={classList} onClick={this.linkClickHandler}>
      <li className='element-text'>
          <span># {this.props.roomTitle}</span>
      </li>
    </button>
  );

    return (
      listEl
    );
  }
}

export default withRouter(GeneralChannelPickerItem);
