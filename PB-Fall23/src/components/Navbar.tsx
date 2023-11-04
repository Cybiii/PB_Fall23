import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white 4xl p-4 shadow-md">
      <div className="container mx-auto flex py-3 pl-10 justify-between items-center">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-300">
          SEXO
        </h1>
        <ul className="flex space-x-20 px-10 md:space-x-9">
          <li>
            <a href="#projects" className="text-sm md:text-base hover:text-blue-400 transition-colors duration-300">
              About Us
            </a>
          </li>
          <li>
            <a href="#about" className="text-sm md:text-base hover:text-blue-400 transition-colors duration-300">
              Contact
            </a>
          </li>
          <li>
            <a href="#contact" className="text-sm md:text-base hover:text-blue-400 transition-colors duration-300">
              Resources
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;