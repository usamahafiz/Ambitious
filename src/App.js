import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Bootstrap JS (for components like navbar, modals, tooltips, etc.)
import Header from './components/Header/header';
import Hero from "./components/hero";
import OurTrack from "./components/ourTrack";
import premium from "./components/premium";





function App() {
  return (
    <div>
      <Header />
      <Hero />
      <OurTrack />
      <premium />
    
    
      
    </div>
  );
}

export default App;
