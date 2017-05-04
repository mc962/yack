import { connect } from 'react-redux';

import EmojiPicker from './emoji_picker';

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    attachEmoji: (emoji) => ownProps.attachEmoji(emoji)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmojiPicker)
