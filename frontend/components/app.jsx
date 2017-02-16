import React from 'react'
import HomeContainer from './home_container';

const App = ({ children }) => {
  return(
    <div className="app-container">
      { children }
    </div>
  );
}

export default App;
