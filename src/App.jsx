import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Education from './components/Education'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Skills />
      <Education/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
