import React from 'react'
import Nav from '../components/layout/Nav'
import Hero from "../components/home/Hero"
import Marquee from "../components/home/Marquee"
import AboutUs from '../components/home/AboutUs'
import Freelance from '../components/home/Freelance'
import Skills from "../components/home/Skills"
import Projects from '../components/home/Projects'
import Services from '../components/home/Services'
import Experience from '../components/home/Experience'
import ContactMe from '../components/home/ContactMe '
const home = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <AboutUs />
      <Freelance />
      <Services />
      <Skills />
      <Projects />
      <Experience />
      <ContactMe />
    </>
  )

}
export default home
