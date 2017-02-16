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
        <div className="home-container">
          <header className='home-bar'>
            <h2>{ `Welcome, lazy ${this.props.currentUser.username}` }</h2>
            <form className='logout-button' onSubmit={this.submitLogout}>
              <input type='submit' value='Logout' />
            </form>
          </header>
        </div>
      );
    } else {
      return(
        <div className='home-container entry-links'>
          <header className='home-bar'>
            <Link to="signup">Sign Up</Link>
            <Link to="login">Log In</Link>
          </header>
        </div>
      );
    }
  }
}

export default Home;
