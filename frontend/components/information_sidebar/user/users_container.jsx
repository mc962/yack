import { connect } from 'react-redux';

import Users from './users';

const mapStateToProps = (state, ownProps) => {
  
  return {
    users: state.users.allUsers
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
