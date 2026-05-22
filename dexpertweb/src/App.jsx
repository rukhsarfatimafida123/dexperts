import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import Visa from "./pages/Visa";
import WebDevelopment from "./pages/WebDevelopment";
import DigitalProducts from "./pages/DigitalProducts";
import DBlogs from "./pages/DBlogs";
import Contact from "./pages/Contact";
import VisaDetails from "./pages/VisaDetails";
import ApplyVisa from "./pages/ApplyVisa";
import GraphicDesignProducts from "./pages/GraphicDesignProducts";
import RukhsarPortfolio from "./pages/RukhsarPortfolio";
import DemoPage from "./components/DemoPage";
import AhmedPortfolio from "./pages/AhmedPortfolio";

function App() {
  const location = useLocation();

  // jis page par header/footer hide karna ho
  const hideLayoutRoutes = ["/rukhsar-portfolio"];

  const hideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/visa" element={<Visa />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/digital-products" element={<DigitalProducts />} />
        <Route path="/d-blogs" element={<DBlogs />} />
        <Route path="/graphic-design" element={<GraphicDesignProducts />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/visa-details/:visaType" element={<VisaDetails />} />
        <Route path="/apply/:visaType" element={<ApplyVisa />} />


        {/* Portfolio Route */}
        <Route path="/rukhsar-portfolio" element={<RukhsarPortfolio />} />
        <Route path="/demo/:projectId" element={<DemoPage />} />
        <Route path="/ahmed-portfolio" element={<AhmedPortfolio />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;