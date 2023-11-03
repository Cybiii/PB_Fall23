import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Components';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
