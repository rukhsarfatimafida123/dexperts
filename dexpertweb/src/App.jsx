// import Navbar from "./components/Navbar"
// import Hero from "./components/Hero"
// import About from "./components/About"
// import Services from "./components/Services"
// import Products from "./components/Products"
// import WhyChooseUs from "./components/Whychooseus"
// import Testimonials from "./components/Testimonials"
// import Blogs from "./components/Blogs"
// import Contact from "./components/Contact"
// import Footer from "./components/Footer"

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <Products />
//       <WhyChooseUs />
//       <Testimonials />
//       <Blogs />
//       <Contact />
//       <Footer />
//     </>
//   )
// }

// export default App
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Visa from "./pages/Visa"
import WebDevelopment from "./pages/WebDevelopment"
import GraphicDesign from "./pages/GraphicDesign"
import Blogs from "./pages/Blogs"
import Contact from "./pages/Contact"

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App


