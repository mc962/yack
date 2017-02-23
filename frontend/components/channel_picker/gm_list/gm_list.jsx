import React from 'react';
import GMListItem from './gm_list_item';

export default class GMList extends React.Component {
  constructor(props) {
    super(props);
    this.submitModal = this.submitModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    // this.deleteTokenHandler = this.deleteTokenHandler.bind(this);
    this.redirect = this.redirect.bind(this);

    this.state = {letterVal: "", selectedChannel: ""};
  }

  componentDidMount() {
    this.props.fetchAllChannels();
  }

  componentWillReceiveProps(newProps) {
      if (this.props.params !== newProps.params) {
        this.props.fetchAllChannels();
      }
  }

  handleInputChange(e) {
    let val = e.currentTarget.value;
    this.setState({letterVal: val});
  }

  submitModal(e) {
    e.preventDefault();

    const room_type = 'general';
    const room_purpose = this.state.purpose;

    const userId = currentUser.id;
    room_title = e.currentTarget.value;

    this.props.joinChannel(chatroom).then((receivedChannel) => {
      this.redirect(receivedChannel);
    }).then(this.props.handleEscape());
    this.setState({letterVal: "", selectedChannel});
  }

  redirect(channel) {
    this.props.router.push(`/channels/${channel.currentChannel.id}`);
  }

  handleItemClick(e) {
    e.preventDefault();
    let clickedChannel = e.currentTarget.value;
    this.setState({selectedChannel: clickedChannel});
    this.submitModal();
  }

  matches(chatrooms) {
    let arrayChannels = Object.keys(chatrooms).map((id) => chatrooms[id]);

    let matchings = [];
    if (this.state.letterVal.length === 0) {
      matchings = arrayChannels.map((chatroom, idx) => {
        return <GMListItem key={idx} roomTitle={room_title} chatroomId={chatroom.id} handleItemClick={this.handleItemClick} />;
      });
      return matchings;
    } else {
      arrayChannels.forEach((chatroom, idx )=> {
        let substring = chatroom.room_title.slice(0, this.state.letterVal.length);
        if (substring.toLowerCase() === this.state.letterVal.toLowerCase()) {
          matchings.push(
            <GMListItem key={idx} roomTitle={chatroom.room_title} chatroomId={chatroom.id} dateCreate={chatroom.date_created} numUsers={chatroom.users.length} handleItemClick={this.handleItemClick} />
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
    if (this.props.availableChannels) {
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
              <div className='input-border'>
                  {availableChannels}
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
// post to custom route to custom action in Chatroom controller,
// will need new apitul/thunkaction
