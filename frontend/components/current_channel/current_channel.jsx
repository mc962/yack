import React from 'react';

class CurrentChannel extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount(){

  }
  render() {



    return <div className="dummyclass">Channel {this.props.channelId}</div>

  }
}

export default CurrentChannel;
