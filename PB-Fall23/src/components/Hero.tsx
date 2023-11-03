import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex bg-blue-500">
      <div className="self-end ml-10 mb-10"> {/* Adjusted for bottom-left alignment */}
        <h3 className='text-4xl'>General Meetings</h3>
        <h3 className='text-4xl'>Coming up / Tuesdays 12:30 PM - 13:20 PM</h3>
        <h1 className="text-9xl font-bold mb-4"> {/* Increased font size */}
          CODING WITH MESAAAA
        </h1>

      </div>
    </section>
  );
}

export default Hero;
