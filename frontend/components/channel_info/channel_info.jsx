import React from 'react';

export default class ChannelInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <section className='information-container'>
        <div className='room-text-container'>

          <div className='room-title'>#{this.props.roomTitle}</div>

          <div className='room-stats'>
            <i className="fa fa-user-o" aria-hidden="true"></i>
            <div className='users-number'>{this.props.numUsers}</div>
          </div>

        </div>
      </section>
    );
  }
}
