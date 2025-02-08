import './App.css'
import About from './Page/About'
import Contact from './Page/Contact'
import Hero from './Page/Hero'
import Navbar from './Page/Navbar'
import Portfolio from './Page/Portfolio'
import ScrollProgress from './Page/ScrollProgress'


// src/App.tsx
function App() {
  return (
    <>
      <div className='relative'>
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
      </div>
      <div id="contact" className='relative'>
        <Contact />
      </div>
      <ScrollProgress />
    </>
  )
}

export default App
