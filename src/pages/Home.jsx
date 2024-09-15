import React from 'react'
import Nav from '../components/layout/Nav'
import Hero from '../components/home/Hero'
import Marquee from '../components/home/Marquee'
import AboutUs from '../components/aboutus/AboutUs'
import Freelance from '../components/freelancer/Freelance'
import Skills from '../components/skills/Skills'
import Projects from '../components/projects/Projects'

const home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <AboutUs />
      <Freelance />
      <Skills />
      <Projects/>
    </>
  )
}

export default home
