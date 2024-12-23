import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Services from '../components/Services'
import Creativity from '../components/Creativity'
import PortfolioSection from '../components/Portfolio'
import FooterSection from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Services/>
      <Creativity/>
      <PortfolioSection/>
      <FooterSection/>
      {/* Other components or content can go here */}
    </div>
  )
}

export default Home
