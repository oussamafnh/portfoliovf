import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Linkedin from './components/Linkedin'
import Navbarx from './components/Navbarx'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <>
      <div className="mainapp">
        <Navbarx />
        <Linkedin />
        <Hero />
        <About />
        <Portfolio />
        <Contact /> 
      </div>
    </>
  )
}

export default App
