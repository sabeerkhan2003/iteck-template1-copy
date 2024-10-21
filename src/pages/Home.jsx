import React from 'react'
import Nav from '../components/Home/nav'
import Hero from '../components/Home/Hero'
import Acheivements from '../components/Home/acheivements'
import Services from "../components/Home/services"
import IconCircles from "../components/Home/circle"
import Projects from '../components/Home/projects'
import Posts from '../components/Home/posts'
import Contact from '../components/Home/contact'
import Footer from '../components/Home/footer'
import Testimonials from '../components/Home/testimonials'
import Experts from '../components/Home/experts'

function Home() {
  return (
   <>
   <Nav />
   <Hero />
   <Acheivements />
   <Services />
   <IconCircles />
   <Projects />
   <Testimonials />
   <Experts/>
   <Posts/>
   <Contact/>
   <Footer/>
   
   </>
  )
}

export default Home