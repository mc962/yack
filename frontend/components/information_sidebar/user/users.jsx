import React from 'react'
import DirectoryListItem from './directory_list_item'

class Users extends React.Component {
  constructor(props) {
    super(props)
    this.escapeInfo = this.escapeInfo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.leaveHandler = this.leaveHandler.bind(this);
    this.redirect = this.redirect.bind(this);

    this.state = { letterVal: '' };
  }

  redirect() {
    this.props.router.push(`/channels/${this.props.genChannelRoomId}`);
  }

  handleInputChange(e) {
    const inputVal = e.currentTarget.value;
    this.setState({letterVal: inputVal});
  }

  escapeInfo(e) {
    this.props.router.replace(`/channels/${this.props.roomId}`)
  }

  matches(users) {
    let arrayChannels = Object.keys(users).map((id) => users[id]);

    let matchings = [];

    if (this.state.letterVal.length === 0) {
      matchings = arrayChannels.map((user, idx) => {

        return <DirectoryListItem key={idx}
          userId={user.id}
          firstName={user.first_name}
          lastName={user.last_name}
          username={user.username}
          imageUrl={user.image_url} />
      });
    } else {
      arrayChannels.forEach((user, idx )=> {

        const nameString = `${user.first_name} ${user.last_name}`
        let substring = nameString.slice(0, this.state.letterVal.length);
        if (substring.toLowerCase() === this.state.letterVal.toLowerCase()) {
          matchings.push(
            <DirectoryListItem key={idx}
              userId={user.id}
              firstName={user.first_name}
              lastName={user.last_name}
              username={user.username}
              imageUrl={user.image_url} />
          );
        }
      });
    }
    return matchings;
  }

  leaveHandler(e) {
    e.preventDefault();
    const currentUserId = this.props.currentUserId;
    this.props.leaveChannel({chatroom_id: this.props.roomId, user_id: this.props.currentUserId, username: this.props.currentUserUsername}).then((receivedChannel) => {
      this.props.fetchCurrentUser(currentUserId)
      this.redirect();
      })
  }


  render() {
    const userDirectory = this.matches(this.props.users)

    let leaveChannelButton;
    if (Object.keys(this.props.users).includes(`${this.props.currentUserId}`)) {
        leaveChannelButton = <div className='leave-channel-btn' onClick={this.leaveHandler}>Leave Channel</div>
    } else {
      <div className='leave-channel-btn' onClick={this.leaveHandler}>Join Channel</div>
    }

    return (
      <sidebar className='user-directory-container'>
        <div className='top-content'>
          <header className='user-directory-header'>
            <div className='user-directory-title'>
              Team Directory
            </div>
            <div className='details-x-icon' onClick={this.escapeInfo}>
              x
            </div>
          </header>
          <div className='users-directory-search-container'>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type='text'
              id='userDirectorySearch'
              className='users-directory-search'
              placeholder='Search members'
              onChange={this.handleInputChange}
              value={this.state.letterVal} />
          </div>
          <ul className='user-directory-list'>
            {userDirectory}
          </ul>
        </div>
        <footer className='information-footer'>
          {leaveChannelButton}
        </footer>
      </sidebar>
    )
  }
}

export default Users;
