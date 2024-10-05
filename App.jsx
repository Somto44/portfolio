import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Nav'
import Home from './Home'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
function App() {
  return (
    <>
      <Nav />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default App
