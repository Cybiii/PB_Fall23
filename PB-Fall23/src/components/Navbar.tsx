import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
          SEXO
        </h1>
        <ul className="flex space-x-4 md:space-x-6">
          <li>
            <a href="#hero" className="text-sm md:text-base hover:text-blue-400 transition-colors duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="text-sm md:text-base hover:text-blue-400 transition-colors duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#about" className="text-sm md:text-base hover:text-blue-400 transition-colors duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className="text-sm md:text-base hover:text-blue-400 transition-colors duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;