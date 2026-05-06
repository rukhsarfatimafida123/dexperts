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
import DigitalProducts from "./pages/DigitalProducts"
import Blogs from "./pages/DBlogs"
import Contact from "./pages/Contact"
import VisaDetails from "./pages/VisaDetails"
import ApplyVisa from "./pages/ApplyVisa"
import ScrollToTop from "./components/ScrollToTop"; 
import DBlogs from './pages/DBlogs';
import GraphicDesignProducts from './pages/GraphicDesignProducts';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop /> 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/digital-products" element={<DigitalProducts />} />
        <Route path="/d-blogs" element={<DBlogs />} />
        <Route path="/graphic-design" element={<GraphicDesignProducts />} />  
        <Route path="/Contact" element={<Contact />} />
        <Route path="/visa-details/:visaType" element={<VisaDetails />} />
        <Route path="/apply/:visaType" element={<ApplyVisa />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App


