import React from 'react';
import GMListItem from './gm_list_item';
import { withRouter } from 'react-router';
class GMList extends React.Component {
  constructor(props) {
    super(props);
    this.submitModal = this.submitModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    // this.deleteTokenHandler = this.deleteTokenHandler.bind(this);
    this.redirect = this.redirect.bind(this);

    this.state = {letterVal: "", selectedChannelId: ""};
  }

  componentDidMount() {
    this.props.fetchAllChannels();
  }

  handleInputChange(e) {
    let val = e.currentTarget.value;
    this.setState({letterVal: val});
  }

  submitModal() {
    const chatroomId = this.state.selectedChannelId;
    const userId = this.props.currentUser.id;
    const user_chat = {chatroom_id: chatroomId, user_id: userId};

    this.props.joinChannel(user_chat).then((receivedChannel) => {
      const newChannelId = receivedChannel.currentChannel.id;
      this.redirect(newChannelId);
    }).then(this.props.handleEscape());
    // this.setState({letterVal: "", selectedChannelId: ""});
  }

  redirect(channelId) {

    this.props.router.push(`/channels/${channelId}`);
  }

  handleItemClick(e) {
    e.preventDefault();
    let clickedChannel = e.currentTarget.value;

    this.setState({selectedChannelId: clickedChannel}, this.submitModal);

  }



  matches(chatrooms) {
    let arrayChannels = Object.keys(chatrooms).map((id) => chatrooms[id]);

    let matchings = [];
    if (this.state.letterVal.length === 0) {
      matchings = arrayChannels.map((chatroom, idx) => {
        return <GMListItem key={idx} roomTitle={chatroom.room_title} chatroomId={chatroom.id} dateCreated={chatroom.date_created} numUsers={chatroom.num_users} handleItemClick={this.handleItemClick} />;
      });
      return matchings;
    } else {
      arrayChannels.forEach((chatroom, idx )=> {

        let substring = chatroom.room_title.slice(0, this.state.letterVal.length);
        if (substring.toLowerCase() === this.state.letterVal.toLowerCase()) {
          matchings.push(
            <GMListItem key={idx} roomTitle={chatroom.room_title} chatroomId={chatroom.id} dateCreate={chatroom.date_created} numUsers={chatroom.num_users} handleItemClick={this.handleItemClick} />
          );
        }
      });
    }
    return matchings;
  }


  render() {
    // let arrayChannels = Object.keys(this.state.)

    let availableChannels;
    let submittableColor;
    if (this.props.fetchedChannels) {
      availableChannels = this.matches(this.props.fetchedChannels);
    } else {
      availableChannels = [];
    }

    if (availableChannels.length < _.size(this.props.fetchedChannels)) {
      submittableColor = ' submittableButton';
    } else {
      submittableColor = '';
    }

    return (
      <div className='modal-form'>
        <form className='gm-form' onSubmit={this.handleModalSubmit}>
          <h1 className='gm-form-heading'>Browse All {_.size(this.props.fetchedChannels)} channels</h1>
          <div className='search-inputs'>

            <div className='new-gm-container'>
              <div className='gm-input'>
                  <i className="fa fa-search" aria-hidden="true"></i>
                  <input type='text' className='gm-channels-search' placeholder='Search channels' onChange={this.handleInputChange} value={this.letterVal} />
              </div>
              <h4 className='channels-heading'>Channels you can join</h4>
              <ul className='selectable-channels'>
                {availableChannels}
              </ul>
            </div>
          </div>
        </form>
      </div>

    );

  }
}
export default withRouter(GMList);
// post to custom route to custom action in Chatroom controller,
// will need new apitul/thunkaction
