import React from 'react';
import Modal from 'react-modal';
import UserItem from './user_item';
import { merge } from 'lodash';
import { createChannel } from '../../../actions/channel_actions';
import { withRouter } from 'react-router';
import { _size } from 'lodash';

export default class NewDMForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleModalSubmit = this.handleModalSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.deleteTokenHandler = this.deleteTokenHandler.bind(this);
    this.redirect = this.redirect.bind(this);
    this.state = {letterVal: "", disabledButton: true, submittableUsers: {}};
  }

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  handleInputChange(e) {
    let val = e.currentTarget.value;
    this.setState({letterVal: val});
  }


  handleModalSubmit(e) {
    e.preventDefault();


    const room_type = 'direct_message';
    const room_purpose = 'Private Chat';

    let userIds = Object.keys(this.state.submittableUsers);
    userIds.push(this.props.currentUserId);
    let names = Object.keys(this.state.submittableUsers).map((id) => {
      return this.props.fetchedUsers[id].username;
    });
    if (!names.includes(this.props.currentUserUsername)) {
      names.push(this.props.currentUserUsername)
    }
    let room_title = names.join(', ');

    const chatroom = {room_title: room_title, room_type: room_type, purpose: room_purpose, user_ids: userIds};

    this.props.createChannel(chatroom).then((receivedChannel) => {
      const newChannelId = receivedChannel.currentChannel.id;
      this.props.fetchCurrentUser(this.props.currentUserId);
      this.redirect(newChannelId);
    }).then(this.props.handleEscape());


  }

  redirect(channelId) {

    this.props.router.push(`/channels/${channelId}`);
  }

  deleteTokenHandler(e) {
    e.preventDefault();
    let undeletedUsers = this.state.submittableUsers;

    let userId = parseInt(e.currentTarget.id);

    delete undeletedUsers[userId]
    this.setState({submittableUsers: undeletedUsers}, this.toggleButtonStatus);
  }

  handleItemClick(e) {
    e.preventDefault();
    let clickedUser = {};

    let userId = e.currentTarget.value;
    let name = this.props.fetchedUsers[userId].username;

    let userUrl = this.props.fetchedUsers[userId].image_url;
    let numUsers = Object.keys(this.state.submittableUsers).length;

    if (numUsers < 7) {
      clickedUser[userId] = (
        <div className='user-token' onClick={this.deleteTokenHandler} id={userId} key={userId}>
          <div className='tiny-profile-picture'><img src={userUrl} /></div>
          <div className='token-name'>{name}</div>
          <div className='token-x'>x</div>
        </div>
      );

    }

    let newSubmittedUsersState = merge({}, this.state.submittableUsers, clickedUser);
    this.setState({submittableUsers: newSubmittedUsersState}, this.toggleButtonStatus);

  }



  barFocuser(e) {
    let searchBar = document.querySelector('.input-border');
    searchBar.classList.add('focused-searchbar');
  }

  barBlur(e) {
    let searchBar = document.querySelector('.input-border');
    searchBar.classList.remove('focused-searchbar');
  }

  toggleButtonStatus() {

    let submitButton = document.querySelector('.new-dm-submit')
    const submittableUsersCount = Object.keys(this.state.submittableUsers).length;

    if (submittableUsersCount > 0) {

      submitButton.classList.add('submittableButton');
      this.setState({disabledButton: false});
    } else if (submittableUsersCount === 0) {
      submitButton.classList.remove('submittableButton')
      this.setState({disabledButton: true});
    }
  }

  matches(users) {
    let arrayUsers = Object.keys(users).map((id) => users[id]);

    let matchings = [];
    if (this.state.letterVal.length === 0) {
      matchings = arrayUsers.map((user, idx) => {
        return <UserItem key={idx}
                         username={user.username}
                         userId={user.id}
                         firstName={user.first_name}
                         lastName={user.last_name}
                         gravatarUrl={user.image_url}
                         handleItemClick={this.handleItemClick} />;
      });
      return matchings;
    } else {
      arrayUsers.forEach((user, idx )=> {
        let substring = user.username.slice(0, this.state.letterVal.length);
        if (substring.toLowerCase() === this.state.letterVal.toLowerCase()) {
          matchings.push(
            <UserItem key={idx}
                      username={user.username}
                      userId={user.id}
                      firstName={user.first_name}
                      lastName={user.last_name}
                      gravatarUrl={user.image_url}
                      handleItemClick={this.handleItemClick} />
          );
        }
      });
    }
    return matchings;
  }


  render() {
    let arraySubmittableUsers = Object.keys(this.state.submittableUsers).map((id)=> {
      return this.state.submittableUsers[id];
    });

    let availableUsers;
    // let submittableColor;

    if (this.props.fetchedUsers) {
    availableUsers = this.matches(this.props.fetchedUsers);

    } else {
      availableUsers = [];

    }
    // if (availableUsers.length < _.size(this.props.fetchedUsers)) {
    //   submittableColor = ' submittableButton';
    // } else {
    //   submittableColor = '';
    // }

    return (
      <div className="modal-form">

          <form className='dm-form' onSubmit={this.handleModalSubmit}>
            <h1 className='dm-form-heading'>Direct Messages</h1>
            <div className='search-inputs'>

              <div className='new-dm-container'>
                <div className='input-border'>

                    {arraySubmittableUsers}

                  <input type='text'
                         className='dm-users-search'
                         placeholder={Object.keys(this.state.submittableUsers).length === 0 ? 'Find or start a conversation' : ""}
                         onChange={this.handleInputChange}
                         value={this.state.letterVal}
                         onFocus={this.barFocuser}
                         onBlur={this.barBlur} />
                </div>
                <input type='submit'
                       className={'new-dm-submit'}
                       value='Go'
                       disabled={this.state.disabledButton} />
            </div>
              <h4 className='users-heading'>Available Users</h4>
              <ul className='selectable-users'>
                {availableUsers}
              </ul>
            </div>
          </form>
        </div>

    );
  }
}
