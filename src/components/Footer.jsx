import React from 'react'
import logo from '../assets/Exclude.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <h1 className="text-2xl text-center md:text-6xl font-medium mb-16">
        Let’s turn your vision into reality.
      </h1>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-center md:text-left">
        {/* Left Section */}
        <div className="md:col-span-2 flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-4 mb-4">
            <div>
              {/* Placeholder for the signature image or text */}
              <img src={logo} alt="" className='w-24' />
            </div>
          </div>
          <div>
            <h3 className="font-medium text-lg mb-2">Contact</h3>
            <p className="text-gray-400">harkinola7991@gmail.com</p>
            <p className="text-gray-400">+234 915 855 8440</p>
          </div>
        </div>

        {/* About Me Section */}
        <div>
          <h3 className="font-medium text-lg mb-4">About me</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Experiences</li>
            <li>Skills</li>
          </ul>
        </div>

        {/* My Works Section */}
        <div>
          <h3 className="font-medium text-lg mb-4">My works</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Graphic Design</li>
            <li>UI/UX Design</li>
            <li>Motion Graphics</li>
          </ul>
        </div>

        {/* Contact Me Section */}
        <div>
          <h3 className="font-medium text-lg mb-4">Contact me</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Mail</li>
            <li>Whatsapp</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <i className="fab fa-behance"></i>
            </a>
          </div>
          <div className="w-12 h-12 bg-white rounded-full flex justify-center items-center">
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © 2024 Gallant Media. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
