import React, { useState, useEffect } from 'react'
import background from '../assets/Rectangle 29.png'

const Header = () => {
  const roles = ['Graphic Designer', 'UI/UX Designer', 'Videographer']
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => (prevRole + 1) % roles.length)
    }, 2000) // 4 seconds interval

    return () => clearInterval(interval) // Cleanup on component unmount
  }, [roles.length])

  return (
    <header
      className="bg-cover bg-center h-screen relative"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto flex flex-col justify-center h-full relative z-10">
        <h1 className="text-5xl md:text-8xl font-bold text-white ml-6">
          Hi, I’m Goodness
        </h1>
        <h2 className="text-3xl md:text-7xl font-bold text-orange-400 mt-4 ml-6">
          <span className="text-white">a</span>{' '}
          <span className="transition duration-500 ease-in-out">
            {roles[currentRole]}
          </span>
        </h2>

        <p className="text-white text-xl mt-9 ml-6 italic">
          Your Next Favorite Designer
        </p>
        <button className="mt-20 bg-transparent text-white border border-solid border-white px-2 w-36 py-2 rounded-md ml-6">
          Get in touch
        </button>
      </div>
    </header>
  )
}

export default Header
