import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className='App'>
      <React.Fragment>
        <NavBar />
        <HeroSection />
      </React.Fragment>
    </div>
  );
}

export default App;
