import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form_container';
import HomeContainer from './home_container';
import Display from './display';
import CurrentChannel from './current_channel/current_channel';
import CurrentChannelContainer from './current_channel/current_channel_container'

const Root = ({ store }) => {
    const _redirectIfLogggedIn = (nextState, replace) => {
      if (store.getState().session.currentUser) {
        replace('/');
      }
    }
    const _redirectIfNotLoggedIn = (nextState, replace) => {
      
      if (!store.getState().session.currentUser){
        replace('/login')
    }
  }


  let indexRedirect = null;
  return(
    <Provider store= { store }>
      <Router history={ hashHistory }>
        <Route path="/" component= { App }>
          <IndexRoute component={HomeContainer} />
          <Route path="login" component={ SessionFormContainer } onEnter={_redirectIfLogggedIn} />
          <Route path="signup" component={ SessionFormContainer } onEnter={_redirectIfLogggedIn} />
          <Route path="channels" component={ Display } onEnter={_redirectIfNotLoggedIn}>
            <Route path=":id" component={ CurrentChannelContainer } />
          </Route>
        </Route>
      </Router>
    </Provider>
  )

}

export default Root;
