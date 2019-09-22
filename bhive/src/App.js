import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Maincontent from './components/Maincontent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Maincontent />
      <Footer />
    </div>
  );
}

export default App;
