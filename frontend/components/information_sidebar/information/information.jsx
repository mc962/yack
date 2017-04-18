import React from 'react';
import { withRouter } from 'react-router'

import QuickUserItem from './quick_user_item'

class Information extends React.Component {
  constructor(props) {
    super(props)
    this.state = {detailsStatus: 'hidden-purpose'}
  }


  togglePurpose(e) {
    const newStatus = this.state.detailsStatus === 'hidden-purpose' ? 'revealed-purpose' : 'hidden-purpose'
    this.setState({detailsStatus: newStatus})
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

  render() {
  let date = this.parseDate(this.props.createdAt);
  if (this.props.createdAt) {
    date = this.parseDate(this.props.createdAt);
  } else {
    date = ''
  }

  const userList = this.getUsers()

    return (
      <sidebar className='channel-sidebar-details-container'>
        <header className='information-section-header channel-details-header'>About #{this.props.roomTitle}</header>
        <section className='details-text-container'>
          <div className='details-header details-section-header'>Channel Details</div>
          <div className={`details-text-container ${this.state.detailsStatus}`}>
            <div className='purpose-label'>Purpose</div>
            <p className='purpose-text'>{this.props.purpose}</p>
            <div className='room-date-created'>Created on {date}</div>
          </div>
        </section>
        <section className='users-text-container'>
          <div className='details-section-header'>{this.props.usersCount} Members</div>
          <ul className='details-user-list'>
            {userList}
          </ul>
        </section>
      </sidebar>
    )
  }
}

export default withRouter(Information)
