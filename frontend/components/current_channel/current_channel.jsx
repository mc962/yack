import React from 'react';

class CurrentChannel extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){

  }
  render() {



    return (
      <div>
        <div>Channel {this.props.channelId}</div>
        <footer className='new-message-form-container'>

        </footer>

      </div>
    )

  }
}

export default CurrentChannel;
