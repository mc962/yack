import GMList from './gm_list';
import { connect } from 'react-redux';
import { fetchAllChannels } from '../../../actions/channel_actions';

const mapStateToProps = (state) => {
  let fetchedChannels = {};
  if (state.currentUser) {
    for (let i = 0; i < state.currentUser.channels.length; i++) {
      fetchedChannels[state.currentUser.channels[i].id] = state.currentUser.channels[i];
    }
  }
debugger
  return {
    fetchedChannels: fetchedChannels
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllChannels: () => dispatch(fetchAllChannels())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GMList);
