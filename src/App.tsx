import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react';
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Linkedin from './components/Linkedin'
import Navbarx from './components/Navbarx'
import Portfolio from './components/Portfolio'
import Loader from './components/loader'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [])


  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (

        <div className="mainapp">
          <Analytics />
          <Navbarx />
          <Linkedin />
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </div>
      )}
    </>
  )






}

export default App
