import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';

import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import HomeContainer from './home_container';
import Display from './display';

import CurrentChannelContainer from './current_channel/current_channel_container'
import InformationSidebarContainer from './information_sidebar/information_sidebar_container'
import UsersContainer from './information_sidebar/user/users_container';
import UserInfoContainer from './information_sidebar/user/user_info_container'

import { fetchCurrentChannel } from '../actions/channel_actions'
import { fetchAllUsers, fetchUser } from '../actions/user_actions';

const Root = ({ store }) => {
    const _redirectIfLogggedIn = (nextState, replace) => {
      const currentUser = store.getState().session.currentUser;
      if (currentUser) {
        replace(`/channels/${currentUser.gen_channel_id}`);
      }
    }

    const _redirectIfNotLoggedIn = (nextState, replace) => {

      if (!store.getState().session.currentUser){
        replace('/login')
      }
    }

    const _fetchCurrentChannel = (nextState, replace) => {
      // temp fix
      let channelId
      if (Array.isArray(nextState.params.id)) {
        channelId = nextState.params.id[0]
      } else {
        channelId = nextState.params.id
      }
      

      store.dispatch(fetchCurrentChannel(channelId))
    }

    const _fetchAllUsers = (nextState, replace) => {
      store.dispatch(fetchAllUsers())
    }

    const _fetchInfoUser = (nextState, replace) => {

      const userId = nextState.params.id[1]
      if (!store.getState().users.userId) {
        store.dispatch(fetchUser(userId))
      }
    }

  let indexRedirect = null;
  return(
    <Provider store= { store }>
      <Router history={ hashHistory }>
        <Route path="/" component= { App }>
          <IndexRoute component={HomeContainer} />

          <Route path="login" component={ LoginFormContainer } onEnter={_redirectIfLogggedIn} />
          <Route path="signup" component={ SignupFormContainer } onEnter={_redirectIfLogggedIn} />

          <Route path="channels" component={ Display } onEnter={_redirectIfNotLoggedIn}>
            <Route path=":id" component={ CurrentChannelContainer } onEnter={_fetchCurrentChannel}>
              <Route path="information" component={ InformationSidebarContainer }>
                <Route path="users" component={ UsersContainer } onEnter={_fetchAllUsers}>

                </Route>
                <Route path="users/:id" component= { UserInfoContainer } onEnter={_fetchInfoUser}/>
              </Route>
            </Route>
          </Route>
        </Route>
      </Router>
    </Provider>
  )

}

export default Root;
