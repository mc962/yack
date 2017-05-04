import React from 'react'
import { Picker } from 'emoji-mart'

class EmojiPicker extends React.Component {
  constructor(props) {
    super(props)
    this.handleEmojiClick = this.handleEmojiClick.bind(this);
  }

  handleEmojiClick(emoji) {

    this.props.attachEmoji(emoji)
    // e represents the element we got when we clicked
// find message, and append :emoji_name: to the text, for this, i think we should bind an action
// in new message form and pass it here, then call it and pass in :emoji_name text to add it to message box,
// probably also add emoji text tracker there as well
// will probably also keep a state of unicode items or something like that (the actual emoji info)
// a separate picker launched from message items, will add emojis directly to message
//
  }

  render() {
    return <Picker color={'#2ab27b'}
                   style={{fontFamily: 'Lato, sans-serif'}}
                   perLine={9}
                   onClick={this.handleEmojiClick} />

  }
}

export default EmojiPicker;
