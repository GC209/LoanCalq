import React from 'react';
//import NavigationBar from '../Root/NavigationBar/NavigationBar';
import TileContainer from '../components/TileContainer/TileContainer';
// import EmiDetailContextProvider from '../hooks/emiProvider';

// import LandingView from '../views/landing-view/LandingView';


function App() {
  return (
    <div className="App">
      {/* <NavigationBar /> */}
      {/* <EmiDetailContextProvider>
        <LandingView />
      </EmiDetailContextProvider> */}
      <TileContainer />
    </div>
  );
}

export default App;
