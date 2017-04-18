import React from 'react'
import { withRouter, Link } from 'react-router';

class DirectoryListItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleUserClick = this.handleUserClick.bind(this);
  }

  handleUserClick(e) {
    const userId = this.props.userId;
    this.props.router.push(`/channels/${this.props.params.id}/users/${userId}`)
  }

  render() {

    return(
      <li className="user-directory-item-container" onClick={this.handleUserClick}>
        <img src="" className="user-directory-thumb" alt={this.props.username} />
        <h3 className='directory-full-name'>{`${this.props.firstName} ${this.props.lastName}`}</h3>
        <div className='directory-username'>{`@${this.props.username}`}</div>
      </li>
    )
  }
}

export default withRouter(DirectoryListItem);
