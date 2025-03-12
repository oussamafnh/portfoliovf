import './App.css'
import About from './Page/About'
import Contact from './Page/Contact'
import Hero from './Page/Hero'
import Navbar from './Page/Navbar'
import Portfolio from './Page/Portfolio'
import ScrollProgress from './Page/ScrollProgress'
import { Analytics } from '@vercel/analytics/react';

import PortfolioMobile from './Page/Mobile/PortfolioMobile'
import HeroMobile from './Page/Mobile/HeroMobile'
import NavbarMobile from './Page/Mobile/NavbarMobile'
import AboutMobile from './Page/Mobile/AboutMobile'
function App() {
  return (
    <>
      <div className='desktop'>
        <Navbar />
        <div id="home" className='homepage'>
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="contact" className='relative'>
          <Contact />
        </div>
        <ScrollProgress />
      </div>

      <div className='mobile'>
        <NavbarMobile />
        <div id="homeMobile" className='homepage'>
          <HeroMobile />
        </div>
        <div id="aboutMobile">
          <AboutMobile />
        </div>
        <div id="portfolioMobile">
          <PortfolioMobile />
        </div>
        <div id="contactMobile" className='relative'>
          <Contact />
        </div>
      </div>






      <Analytics />
    </>
  )
}

export default App
