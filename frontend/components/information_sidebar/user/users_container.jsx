import { connect } from 'react-redux';

import Users from './users';

const mapStateToProps = (state, ownProps) => {
  let users = {}
  if (state.channels.currentChannel) {
    users = state.channels.currentChannel.users
  }
  return {
    users: users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
