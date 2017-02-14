import React from 'react'
import HomeContainer from './home_container';

const App = ({ children }) => {
  return(
    <div>
      <h1>Revenge of the Slackers!</h1>
      <HomeContainer />
      { children }
    </div>
  );
}

export default App;
