import React from 'react'
import logo from '../assets/Exclude.png'

const Navbar = () => {
  return (
    <nav className="bg-transparent absolute p-4 w-full  z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex gap-10 text-white">
            <li>
              <a href="#about" className="hover:text-orange-400">
                About me
              </a>
            </li>
            <li>
              <a href="#works" className="hover:text-orange-400">
                My works
              </a>
            </li>
          </ul>
          <button className="bg-orange-400 text-white px-4 py-2 rounded">
            Contact Me
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
