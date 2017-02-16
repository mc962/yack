import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form_container';
import HomeContainer from './home_container';

const Root = ({ store }) => {
  const _redirectIfLogggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser) {
      replace('/');
    }
  }

  let indexRedirect = null;
  return(
    <Provider store= { store }>
      <Router history={ hashHistory }>
        <Route path="/" component= { App }>
          <IndexRoute component={HomeContainer} />
          <Route path="/login" component={ SessionFormContainer } onEnter={_redirectIfLogggedIn} />
          <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLogggedIn} />
        </Route>
      </Router>
    </Provider>
  )





}

export default Root;
