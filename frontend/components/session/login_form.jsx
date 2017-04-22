import React from 'react';

import { Link, withRouter } from 'react-router';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleGuestSubmit = this.handleGuestSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.getLoggedInUser = this.getLoggedInUser.bind(this);
    this.state= {
      username: "",
      password: "",
      first_name: "",
      last_name: "",
      email: ""
    };
  }

  handleInputChange(e) {
    e.preventDefault(e);
    const value = e.currentTarget.value;
    this.setState({[e.currentTarget.id]: value});
  }

  redirect(newRoute) {
    this.props.router.push(newRoute);
  }

  getLoggedInUser() {
    return this.props.currentUser;
  }

  handleGuestSubmit(e) {
    e.preventDefault();
    const user = { username: 'Guest', password: 'wizardhat1'};
    this.props.guestLogin(user).then(() => {
      const loggedInUser = this.getLoggedInUser();

      this.redirect(`/channels/${loggedInUser.gen_channel_id}`)
    })

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user).then(() => {
      const loggedInUser = this.getLoggedInUser();

      this.redirect(`/channels/${loggedInUser.gen_channel_id}`)},
     this.setState({password: ""})
    )

  }

  componentWillReceiveProps(newProps) {

    if (this.props.route.path !== newProps.route.path) {
      this.props.clearErrors();
    }
  }


  render() {
    let errList = this.props.errors
    let errClass = '';
    if (errList.length > 0) {
      errClass = " errBar";
    }
    errList = errList.join(' ');
    const form = (
      <div className='form-container'>
        <header className= 'session-form-header'>
          <div className='yak-logo'>
            <img src={images.cartoon_yak} alt="A yak" />
          </div>
          <div className='login-button-link'>
            <Link className="login-link" to={'/signup'}>Sign Up</Link>
          </div>
        </header>
        <div className='login-form-container'>

          <form className='session-form login-form' onSubmit={this.handleSubmit}>
            <div className={'form-errors' + errClass}>
              {errList}
            </div>
            <h1 className='form-heading'>Sign In</h1>

            <div className='session-form-section'>
              <div className='form-main'>
                <h4 className='signin-instructions'>Enter your <strong>username</strong> and <strong>password.</strong></h4>
                <div className='username-label-input'>
                  <input type='text' className='session-input field-input username-input' id='username' placeholder='awesomePerson' onChange={this.handleInputChange} value={this.state.username} />
                </div>

                <div className='password-label-input'>
                  <input type='password' className='session-input field-input password-input' id='password' placeholder='password' onChange={this.handleInputChange} value={this.state.password} />
                </div>
              </div>
            </div>
            <div className='guest-login'>Click <div onClick={this.handleGuestSubmit} className='guest-login-button'>here</div> to login as a guest.</div>

            <input type='submit' className='form-submit session-input' value='Sign In' />
          </form>

        </div>
      </div>
    );

    return form;
  }
}

export default LoginForm;
