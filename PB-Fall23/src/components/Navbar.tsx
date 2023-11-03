import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-semibold">My Portfolio</h1>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#about" className="hover:text-blue-500">About</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;