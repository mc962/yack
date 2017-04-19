import React from 'react'
import DirectoryListItem from './directory_list_item'

class Users extends React.Component {
  constructor(props) {
    super(props)
    this.escapeInfo = this.escapeInfo.bind(this);
  }

  escapeInfo(e) {
    this.props.router.replace(`/channels/${this.props.params.id}`)
  }

  getListItems() {
    let items = []
    if (this.props.users) {
      const userList = this.props.users
      items = Object.keys(this.props.users).map((userId, idx) => {
        const user = userList[userId];
        return <DirectoryListItem key={idx}
          userId={user.id}
          firstName={user.first_name}
          lastName={user.last_name}
          username={user.username}
          gravatarUrl={user.image_url} />
      })
    }

    return items;
  }

  render() {
    const userDirectory = this.getListItems();

    return (
      <sidebar className='user-directory-container'>
        <header className='user-directory-header'>
          <div className='user-directory-title'>
            Team Directory
          </div>
          <div className='details-x-icon' onClick={this.escapeInfo}>
            x
          </div>
        </header>
        <ul className='user-directory-list'>
          {userDirectory}
        </ul>
      </sidebar>
    )
  }
}

export default Users;
