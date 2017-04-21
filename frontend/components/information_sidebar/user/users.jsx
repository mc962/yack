import React from 'react'
import DirectoryListItem from './directory_list_item'

class Users extends React.Component {
  constructor(props) {
    super(props)
    this.escapeInfo = this.escapeInfo.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);

    this.state = { letterVal: '' };
  }

  handleInputChange(e) {
    const inputVal = e.currentTarget.value;
    this.setState({letterVal: inputVal});
  }

  escapeInfo(e) {
    this.props.router.replace(`/channels/${this.props.params.id}`)
  }

  // getListItems() {
  //   let items = []
  //   if (this.props.users) {
  //     const userList = this.props.users
  //     items = Object.keys(this.props.users).map((userId, idx) => {
  //       const user = userList[userId];
  //       return <DirectoryListItem key={idx}
  //         userId={user.id}
  //         firstName={user.first_name}
  //         lastName={user.last_name}
  //         username={user.username}
  //         imageUrl={user.image_url} />
  //     })
  //   }
  //
  //   return items;
  // }

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


  render() {
    const userDirectory = this.matches(this.props.users)

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
      </sidebar>
    )
  }
}

export default Users;
