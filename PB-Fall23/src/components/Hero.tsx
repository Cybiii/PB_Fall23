import React from 'react';

const Hero = () => {

  const navStyle = {
    backgroundImage: 'url("/src/assets/background.png")', // Ensure the path is correct
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  
  return (
    <section style={navStyle} id="hero" className="h-screen flex">
      <div className="self-end ml-10 mb-10 text-white">
        <h3 className='text-4xl'>General Meetings</h3>
        <h3 className='text-4xl'>Coming up / Tuesdays 12:30 PM - 13:20 PM</h3>
        <h1 className="text-9xl font-bold mb-4">
          CODING WITH MESA
        </h1>
      </div>
    </section>
  );
}

export default Hero;