import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import { signup, login, logout } from './actions/session_actions';

import configureStore from './store/store';
import Root from './components/root';


const css = (el, property) => {
  return window.getComputedStyle(el, null).getPropertyValue(property);
}

// used if fontawesome cdn is down or blocked, but nor working yet
// window.onload = () => {
//   let span = document.createElement('span');
//   span.className = 'fa';
//   span.style.display = 'none';
//   document.body.insertBefore(span, document.body.firstChild);
//   if ((css(span, 'font-family')) !== 'FontAwesome') {
//
//     $(document.body).find('.fa').each(function(i) {
//
//       let el = $(this)
//       el.addClass('fa-backup')
//     })
//
//   }
//   document.body.removeChild(span);
// }

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  Modal.setAppElement(document.body);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

});
