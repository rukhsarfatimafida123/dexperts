import Hero from "../components/Hero"
import About from "../components/About"
import Services from "../components/Services"
import WhatWeDo from "../components/WhatWeDo"
import OurTeam from "../components/OurTeam";
import LatestNews from "../components/LatestNews"
// import Whychooseus from "../components/Whychooseus"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"




const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhatWeDo />
      <OurTeam />
      {/* <DigitalProducts /> */}
      <LatestNews/>
      {/* <Whychooseus /> */}
      <Testimonials />
      
      <Contact />
      
    </>
  )
}

export default Home
