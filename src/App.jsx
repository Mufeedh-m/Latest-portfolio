import { useState } from 'react'
import Navsec from './components/Navsec'
import Herosec from './components/Herosec'
import About from './components/About'
import Skill from './components/Skill'
import Project from './components/Project'
import Scrolling from './components/Scrolling'
import Contactsec from './components/Contactsec'
import Footer from './components/Footer'
// import ParticlesBackground from './components/ParticlesBackground'





function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
        <Navsec/>
       <Herosec/> 
       <About/>
       <Skill/>
      <Project/>
      <Scrolling/>
      <Contactsec/>
      <Footer/>
    </div>
    </>
  )
}

export default App
