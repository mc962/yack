import { connect } from 'react-redux';

import Users from './users';

const mapStateToProps = (state, ownProps) => {

  return {
    users: state.channels.currentChannel.users
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
