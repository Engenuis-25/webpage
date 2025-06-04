import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Vision from './components/Vision';
import Mission from './components/Mission';
import Values from './components/Values';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Vision />
      <Mission />
      <Values />
      <Footer />
    </div>
  );
}

export default App