import React from 'react';

class InformationSidebar extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return(
      <sidebar className='channel-sidebar-container'>
        {this.props.children}
        <footer className='.information-footer'>The Footer</footer>
      </sidebar>
    )
  }
}

export default InformationSidebar;
