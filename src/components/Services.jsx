import React from 'react'
import graphic from '../assets/graphic-designer.png'
import frame11 from '../assets/Frame 11.png'
import camera from '../assets/camera.png'

const Services = () => {
  return (
    <div id="services" className="container mx-auto py-20">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center gap-7 items-center">
          <p className="text-2xl text-[#A4A4A4] font-medium tracking-wider">
            My services
          </p>
          <h1 className="text-black font-bold  text-6xl tracking-wider mb-10">
            {' '}
            What I Am Great At
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-64 ">
          <div className="flex flex-col justify-center items-center">
            <img src={graphic} alt="" className="w-4/6 mb-10" />
            <h2 className="text-[30px] text-black sm:text-center font-medium tracking-wide">
              Graphic Design
            </h2>
            <ul className=" flex flex-col text-2xl gap-1 mt-4">
              <li>Brand Identity</li>
              <li>Typography</li>
              <li>Illustration</li>
              <li>Digital Design</li>
            </ul>
          </div>
          <div className="flex flex-col  items-center">
            <img src={frame11} alt="" className="w-4/6 mb-10" />
            <h2 className="text-[30px] text-black font-medium tracking-wide">
              UI/UX Design
            </h2>
            <ul className=" flex flex-col text-2xl gap-1 mt-4">
              <li>Mobile Design</li>
              <li>Web Design</li>
            </ul>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={camera} alt="" className="w-4/6 mb-10" />
            <h2 className="text-[30px] text-black font-medium tracking-wide">
              Videography
            </h2>
            <ul className=" flex flex-col text-2xl gap-1 mt-4">
              <li>Cinematography</li>
              <li>Filming</li>
              <li>Video Editing</li>
              <li>MotionGraphics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
