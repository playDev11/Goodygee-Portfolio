import React from 'react'
import image1 from '../assets/Component 3.png'
import image2 from '../assets/Component 43.png'
import image3 from '../assets/Component 5.png'
import image4 from '../assets/Rectangle 2318.png'
import image5 from '../assets/Rectangle 2321.png'

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      src: image1,
      alt: 'Central Image',
      span: 'row-span-2 col-span-2',
    },
    {
      id: 2,
      src: image2,
      alt: 'Image 2',
      span: 'row-span-1 col-span-1',
    },
    {
      id: 3,
      src: image3,
      alt: 'Image 3',
      span: 'row-span-1 col-span-1',
    },
    {
      id: 4,
      src: image4,
      alt: 'Image 4',
      span: 'row-span-1 col-span-1',
    },
    {
      id: 5,
      src: image5,
      alt: 'Image 5',
      span: 'row-span-1 col-span-1',
    },
  ]

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-2xl font-medium tracking-wide text-[#A4A4A4]">
        My Portfolio
      </h2>
      <h3 className="text-4xl md:text-6xl text-black mt-2">My Masterpiece</h3>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {['All', 'Graphic Design', 'UI/UX Design', 'Motion Graphics'].map(
          (category) => (
            <button
              key={category}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-orange-500 hover:text-white transition"
            >
              {category}
            </button>
          )
        )}
      </div>

      {/* Portfolio grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-80 auto-rows-[minmax(150px,_1fr)]">
        {/* Image 2 */}
        <div className="col-span-1">
          <img
            src={portfolioItems[1].src}
            alt={portfolioItems[1].alt}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Central Image */}
        <div className="lg:col-span-2 lg:row-span-2">
          <img
            src={portfolioItems[0].src}
            alt={portfolioItems[0].alt}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Image 3 */}
        <div className="col-span-1">
          <img
            src={portfolioItems[2].src}
            alt={portfolioItems[2].alt}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Image 4 */}
        <div className="col-span-1">
          <img
            src={portfolioItems[3].src}
            alt={portfolioItems[3].alt}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Image 5 */}
        <div className="col-span-1">
          <img
            src={portfolioItems[4].src}
            alt={portfolioItems[4].alt}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection
