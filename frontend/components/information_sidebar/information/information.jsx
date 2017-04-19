import React from 'react';
import { withRouter } from 'react-router'

import QuickUserItem from './quick_user_item'

class Information extends React.Component {
  constructor(props) {
    super(props)
    this.togglePurpose = this.togglePurpose.bind(this);
    this.togglePeople = this.togglePeople.bind(this);
    this.escapeInfo = this.escapeInfo.bind(this);

    this.state = {detailsStatus: 'hidden-purpose', peopleStatus: 'hidden-people'}
  }


  togglePurpose(e) {
    const newStatus = this.state.detailsStatus === 'hidden-purpose' ? 'revealed-purpose' : 'hidden-purpose'
    this.setState({detailsStatus: newStatus})
  }

  togglePeople(e) {
    const newStatus = this.state.peopleStatus === 'hidden-people' ? 'revealed-people' : 'hidden-people'
    this.setState({peopleStatus: newStatus})
  }

  parseDate(unprocessedDate) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'December'];
    const date = new Date(unprocessedDate)
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getUTCFullYear()}`;
  }

  getUsers() {
    let items = []
    if (this.props.users) {
      const allUsers = this.props.users
      items = Object.keys(this.props.users).map((userId, idx) => {
        const user = allUsers[userId];
        return <QuickUserItem key={idx}
          userId={user.id}
          username={user.username}
          gravatarUrl={user.image_url}
          paramId={this.props.params.id} />
      })
    }

    return items;
  }

  escapeInfo(e) {
    this.props.router.replace(`/channels/${this.props.params.id}`)
  }

  render() {
    let displayDetails;
    let displayDetailCaret;
    let displayPeople;
    let displayPeopleCaret;

    if (this.state.detailsStatus === 'hidden-purpose') {
      displayDetails = 'hidden-purpose';
      displayDetailCaret = 'side-caret'
    } else if (this.state.detailsStatus === 'revealed-purpose') {
      displayDetails = 'revealed-purpose';
      displayDetailCaret = 'down-caret'
    }

    if (this.state.peopleStatus === 'hidden-people') {
      displayPeople = 'hidden-people';
      displayPeopleCaret = 'side-caret'
    } else if (this.state.peopleStatus === 'revealed-people') {
      displayPeople = 'revealed-people';
      displayPeopleCaret = 'down-caret'
    }


    let date;
    if (this.props.createdAt) {
      date = this.parseDate(this.props.createdAt);
    } else {
      date = ''
    }
    const userList = this.getUsers()

    return (
      <sidebar className='channel-sidebar-details-container'>
        <header className='information-section-header channel-details-header'>
          <div className='channel-details-title'>
            About #{this.props.roomTitle}
          </div>
          <div className='details-x-icon' onClick={this.escapeInfo}>
            x
          </div>
        </header>

        <section className='details-section-container'>

          <div className='details-header details-section-header' onClick={this.togglePurpose} >
            <div className='details-header-text-container'>
              <span className='info-icon'><i className="fa fa-info" aria-hidden="true"></i></span>
              <span className='details-header-text'>
                Channel Details
              </span>
            </div>
            <i className={`fa fa-caret-right info-caret ${displayDetailCaret}`} aria-hidden="true"></i>
          </div>

          <div className={`details-text-container ${displayDetails}`}>
            <div className='purpose-label'>Purpose</div>
            <p className='purpose-text'>{this.props.purpose}</p>
            <div className='room-date-created'>Created on {date}</div>
          </div>
        </section>

        <section className='users-text-container'>

          <div className='people-header details-section-header' onClick={this.togglePeople} >
            <div className='details-header-user-container'>
              <span className='user-icon'><i className="fa fa-user-o" aria-hidden="true"></i></span>
              <span className='people-header-text'>
                {this.props.usersCount} Members
              </span>
            </div>
            <i className={`fa fa-caret-right user-caret ${displayPeopleCaret}`} aria-hidden="true"></i>
          </div>

          <ul className={`details-user-list ${displayPeople}`}>
            {userList}
          </ul>
        </section>
      </sidebar>
    )
  }
}

export default withRouter(Information)
