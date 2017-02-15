import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {

    super(props);
    this.submitLogout = this.submitLogout.bind(this)
  }

  submitLogout(e) {
    e.preventDefault();    
    this.props.logout();
  }

  render() {

    if (this.props.currentUser) {
      return(
        <div>
          <h2>{ `Welcome, lazy ${this.props.currentUser.username}` }</h2>
          <form onSubmit={this.submitLogout}>
            <input type='submit' value='Logout' />
          </form>
        </div>
      );
    } else {
      return(
        <div>
          <Link to="signup">Sign Up</Link>
          <Link to="login">Log In</Link>
        </div>
      );
    }
  }
}

export default Home;
