import React from 'react'
import HeroSection from '../HeroSection'
import MySkills from '../MySkills'
import MyProjects from '../MyProjects'
import ContactMe from '../ContactMe'
import Education from '../Education'
import Experience from '../Experience'
import Footer from '../Footer'

export default function index() {
  return (
    <>
      <HeroSection />
      <Education />
      <MySkills />
      <Experience />
      <MyProjects />
      <ContactMe />
      <Footer />
    </>
  )
}
