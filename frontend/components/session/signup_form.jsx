import React from 'react';

import { Link, withRouter } from 'react-router';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleGuestSubmit = this.handleGuestSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);

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

  handleGuestSubmit(e) {
    e.preventDefault();
    const user = { username: 'Guest', password: 'wizardhat1'};
    this.props.guestLogin(user).then(() => this.redirect('/'));

  }

  handleSubmit(e) {
    e.preventDefault();
    
    const user = Object.assign({}, this.state);

    this.props.signup(user).then(() => this.redirect('/'),
      this.setState({password: ""})
    );

  }

  componentWillReceiveProps(newProps) {

    if (this.props.route.path !== newProps.route.path) {
      this.props.clearErrors();
    }
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  signupErrors() {
    let errors = {
      firstNameErr: '',
      lastNameErr: '',
      userNameErr: '',
      emailErr: '',
      passwordErr: '',
    }

    if (this.props.errors) {

         if (this.props.errors.includes('first_name')){
           errors.firstNameErr = ' errorable';
         }
         if (this.props.errors.includes('last_name')) {
           errors.lastNameErr = ' errorable';
           }
         if (this.props.errors.includes('username')) {
           errors.userNameErr = ' errorable';
         }
         if (this.props.errors.includes('email')) {
           errors.emailErr = ' errorable';
         }
         if (this.props.errors.includes('password')) {
           errors.passwordErr = ' errorable';
         }
       }
    return errors;
  }

  render() {
    const formErrors = this.signupErrors()

    const form = (
      <div className='form-container'>
        <header className= 'session-form-header'>
          <div className='yak-logo'>
            <img src={images.cartoon_yak} alt="A yak" />
          </div>
          <div className='login-button-link'>
            <Link className="login-link" to={'/login'}>Sign In</Link>
          </div>
        </header>

        <form className='session-form signup-form' onSubmit={this.handleSubmit}>
          <h1 className='form-heading'>Sign Up</h1>

          <div className="form-main">
            <div className='session-form-section'>
              <div className= 'full-name'>
                <div className='full-name-label'>Your name</div>
                <div htmlFor='full-name' className='full-name-label'>
                  <input type='text' className={'name-input session-input field-input' + formErrors.firstNameErr} id='first_name' placeholder='First Name' onChange={this.handleInputChange} value={this.state.first_name} />
                  <input type='text' className={'name-input session-input field-input' + formErrors.lastNameErr} id='last_name' placeholder='Last Name' onChange={this.handleInputChange} value={this.state.last_name} />
                </div>
              </div>
            </div>

            <div className='session-form-section'>
              <div className='username-label-input'>
                <label htmlFor='username' className='session-input-label'>Username</label>
                <input type='text' className={'session-input field-input username-input public-info' + formErrors.userNameErr} id='username' placeholder='awesomePerson' onChange={this.handleInputChange} value={this.state.username} />
              </div>

              <div className='email-label-input'>
                <label htmlFor='email' className='session-input-label'>Email</label>
                <input type="email" className={'session-input field-input email-input public-info' + formErrors.emailErr} id='email' placeholder='you@awesome.com' onChange={this.handleInputChange} value={this.state.email} />
              </div>

              <div className='password-label-input'>
                <label htmlFor='password' className='session-input-label'>Password</label>
                <input type='password' className={'session-input field-input password-input public-info' + formErrors.passwordErr} id='password' placeholder='password' onChange={this.handleInputChange} value={this.state.password} />
              </div>

            </div>
          </div>

          <div className='guest-login'>Click <div onClick={this.handleGuestSubmit} className='guest-login-button'>here</div> to login as a guest.</div>

          <input type='submit' className='form-submit session-input' value='Sign Up' />

        </form>

      </div>
    )

    return form;
  }

}

export default SignupForm;
