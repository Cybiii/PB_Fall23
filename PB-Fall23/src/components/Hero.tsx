import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex justify-center items-center bg-blue-500">
      <div>
        <h1 className="text-5xl font-bold mb-4">Hello! I'm [Your Name]</h1>
        <p className="text-xl">A passionate developer from [Your City].</p>
      </div>
    </section>
  );
}

export default Hero;