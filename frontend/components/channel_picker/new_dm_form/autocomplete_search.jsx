import React from 'react'
import UserItem from './user_item';

export default class AutoCompleteSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.selectName = this.selectName.bind(this);

  }

  handleInput(e) {
    e.preventDefault();
    this.setState({inputValue: e.currentTarget.value});
  }

  matches() {
    const matches = []
    if (this.state.inputValue.length === 0) {
      return this.props.availableUsers;
    }

    this.props.availableUsers.forEach(user => {
      let substring =  user.slice(0, this.state.inputValue.length)
      if (substring.toLowerCase() === this.state.inputValue.toLowerCase()) {
        matches.push(user);
      }
    });
    return matches;
  }

  selectName(e) {
    let user = event.currentTarget.innerText;
    this.setState({inputValue: name});
  }

  render() {
    const userItems = this.matches()

    return (

      <ul className='user-list'>
        {userItems}
      </ul>
    )
  }


}
