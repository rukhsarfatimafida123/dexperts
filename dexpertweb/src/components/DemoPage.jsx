import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiShoppingCart, FiCheckCircle, FiLayers, FiMapPin, FiInfo, FiMaximize2, FiX, FiCpu, FiMonitor } from "react-icons/fi";

// Importing local asset structures directly
import traderhome from "../assets/traderhome.png";
import traderabout from "../assets/traderabout.png";
import tradershop from "../assets/tradershop.png";
import tradercontact from "../assets/tradercontact.png";
import amtraders from "../assets/amtraders.png";

import rainonsite from "../assets/rainonsite-training.png";
import rainvr from "../assets/rainvrtraining.png";
import rainhome from "../assets/rainhome.png";
import raincontact from "../assets/raincontact.png";
import raindemo from "../assets/raindemo.png";

import civilengpro from "../assets/civilengpro.png";

// Importing unified dynamic background hero asset
import bghero from "../assets/bghero.png";

const demoData = {
  "ambitious-traders": {
    title: "Ambitious Traders",
    subtitle: "Premium E-Commerce Retail Platform",
    tag: "FinTech & Retail Ecosystem",
    features: [
      {
        title: "Dynamic Landing & Brand Showcase",
        badge: "User Interface",
        icon: FiLayers,
        description: "The home interface is engineered with highly responsive image hero systems, smooth transitions, and intuitive layouts designed to maximize instant visitor conversion.",
        image: traderhome
      },
      {
        title: "Fully Operational Add-to-Cart System",
        badge: "E-Commerce Core",
        icon: FiShoppingCart,
        description: "Equipped with a real-time reactive shopping cart state machine. Clicking items on the market layer increments the Global Navigation badge instantaneously with persistent layout state updating.",
        image: tradershop
      },
      {
        title: "Comprehensive Single Product Interface",
        badge: "Product Details",
        icon: FiCpu,
        description: "A conversion-optimized product detail page featuring dynamic product rating analytics, detailed inventory breakdowns, responsive customer counters, and synchronized incrementor selectors linked with the checkout system.",
        image: amtraders
      },
      {
        title: "Organized Multi-Category Management",
        badge: "Product Filters",
        icon: FiInfo,
        description: "Features structured layout segments splitting inventory seamlessly into precise niches such as Home Essentials, Pet Care, and Office tools, lowering interface friction.",
        image: traderabout
      },
      {
        title: "Enterprise Contact System with Map Routing",
        badge: "Customer Support",
        icon: FiMapPin,
        description: "Architected with secure dynamic verification inputs alongside a fully embedded interactive visual mapping display module to track enterprise operations accurately.",
        image: tradercontact
      }
    ]
  },
  "rainbow-lense": {
    title: "Rainbow Lens",
    subtitle: "Immersive Virtual Reality Training Portal",
    tag: "Creative Media & EdTech",
    features: [
      {
        title: "Immersive Learning Ecosystem Landing",
        badge: "Corporate Landing",
        icon: FiLayers,
        description: "A highly cinematic front-facing page leveraging rich gradient backgrounds and engaging hero visuals to capture corporate attention and outline technological workflows.",
        image: rainhome
      },
      {
        title: "On-Site Delivery Architecture",
        badge: "Service Deep-Dive",
        icon: FiMonitor,
        description: "A tailored matrix breaking down training logistics, step-by-step implementation phases, regional coverage analytics, and specialized pricing tiers for hardware rollouts.",
        image: rainonsite
      },
      {
        title: "Interactive Course Training Catalogs",
        badge: "Curriculum Grid",
        icon: FiCpu,
        description: "Structured educational cards managing fire safety modules, healthcare protocols, customer service simulations, and custom business tracks with dynamic call-to-actions.",
        image: rainvr
      },
      {
        title: "Corporate Trial Verification Engine",
        badge: "Lead Capture",
        icon: FiInfo,
        description: "Integrated secure request systems backed by interactive FAQs modules designed to lower drop-off rates for corporate trial subscriptions.",
        image: raindemo
      },
      {
        title: "Multi-Channel Communication Node",
        badge: "Connect Hub",
        icon: FiMapPin,
        description: "A beautifully split touchpoint framework containing custom validation forms, micro-targeted contact options, and geographical corporate routing.",
        image: raincontact
      }
    ]
  },
  "civil-eng-pro": {
    title: "Civil Eng Pro",
    subtitle: "Industrial Architectural Estimation Portal",
    tag: "Industrial ERP Solutions",
    features: [
      {
        title: "Precision Engineering Solutions Panel",
        badge: "Enterprise Workspace",
        icon: FiLayers,
        description: "An advanced technical hub built to support material calculation engines, structured design services, project scheduling, and architectural cost evaluation frameworks.",
        image: civilengpro
      }
    ]
  }
};

const DemoPage = () => {
  const { projectId } = useParams();
  const project = demoData[projectId];
  
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="w-full min-h-[60vh] bg-white flex flex-col items-center justify-center text-indigo-950 px-6">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Project Workspace Unavailable</h1>
        <p className="text-gray-500 mb-6 font-light">The case module specification you requested cannot be located.</p>
        <Link
          to="/web-development"
          className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-indigo-950 text-white font-medium shadow-md transition-transform hover:scale-105"
        >
          Return to Hub
        </Link>
      </div>
    );
  }

  return (
    <main className="w-full bg-slate-50 text-indigo-950 selection:bg-red-500 selection:text-white">
      
      {/* HERO SECTION WITH BG MOVEMENT & BACKDROP BLUR TO QUENCH MERGED TEXT ART */}
      <div 
        className="w-full relative bg-[length:cover] bg-[center_top_-80px] bg-no-repeat pt-6 pb-20 px-6 overflow-hidden min-h-[380px] flex flex-col justify-between"
        style={{ backgroundImage: `linear-gradient(to bottom, rgba(15, 23, 42, 0.40), rgba(15, 23, 42, 0.50)), url(${bghero})` }}
      >
        {/* UPPER CLEAN AREA - LOGO TEXT ENTIRELY REMOVED */}
        <div className="w-full max-w-7xl mx-auto flex items-center justify-end border-b border-white/10 pb-6 relative z-30 backdrop-blur-md bg-slate-950/10 rounded-lg px-4 py-2">
          {/* Dexperts Agency Text is now successfully eliminated */}
          <div className="text-white/40 text-xs font-mono tracking-widest uppercase">System Canvas</div>
        </div>

        {/* HERO BODY TEXT CONTENT CONTAINER */}
        <div className="w-full max-w-7xl mx-auto relative z-20 mt-12 space-y-4">
          <div>
            <span className="inline-block px-4 py-1 rounded-full bg-slate-900/80 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-lg">
              {project.tag}
            </span>
          </div>
          
          {/* Glass Shield to isolate from background layout textures */}
          <div className="max-w-3xl bg-slate-950/50 p-6 md:p-8 rounded-2xl border border-white/10 backdrop-blur-[6px] shadow-2xl space-y-3">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {project.title}
            </h1>
            <p className="text-gray-100 font-normal text-base md:text-lg leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
              {project.subtitle} — Technical specifications detailing dynamic core modules, layout structures, and system configurations.
            </p>
          </div>
        </div>
      </div>

      {/* COMPONENT HIGHLIGHT LAYOUT ALTERNATING ROWS */}
      <section className="max-w-7xl mx-auto py-24 px-6 space-y-28">
        {project.features.map((feature, index) => {
          const IconComponent = feature.icon;
          const isEven = index % 2 === 0;

          return (
            <div 
              key={index}
              className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-16 items-center`}
            >
              {/* INTERACTIVE FULL VIEW SCREENSHOT FRAME */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="w-full lg:w-1/2"
              >
                <div 
                  onClick={() => setActiveImage(feature.image)}
                  className="bg-indigo-950 p-2.5 rounded-2xl shadow-xl border border-indigo-900/10 group overflow-hidden relative cursor-pointer"
                >
                  {/* Visual Top Browser Bars */}
                  <div className="absolute top-3.5 left-4 flex gap-1.5 z-20">
                    <span className="w-2 h-2 rounded-full bg-red-500 block"></span>
                    <span className="w-2 h-2 rounded-full bg-yellow-500 block"></span>
                    <span className="w-2 h-2 rounded-full bg-green-500 block"></span>
                  </div>

                  {/* Maximize Icon Trigger Overlay */}
                  <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center rounded-xl">
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white shadow-lg">
                      <FiMaximize2 className="text-xl animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Viewport Frame */}
                  <div className="overflow-hidden rounded-xl bg-white h-72 sm:h-96 relative">
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>

              {/* SPECIFICATION SIDE BAR TEXT */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="w-full lg:w-1/2 space-y-5"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-red-500/10 flex items-center justify-center text-red-600">
                    <IconComponent className="text-lg" />
                  </div>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-widest">{feature.badge}</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-indigo-950">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-base font-light leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2.5 pt-1.5">
                  <div className="flex items-center gap-3 text-sm text-indigo-950 font-medium">
                    <FiCheckCircle className="text-red-500 shrink-0 text-base" /> Fully verified pixel-perfect styling layouts.
                  </div>
                  <div className="flex items-center gap-3 text-sm text-indigo-950 font-medium">
                    <FiCheckCircle className="text-red-500 shrink-0 text-base" /> Production-grade rendering speeds across viewports.
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </section>

      {/* BOTTOM NAVIGATION ZONE - BUTTON NAME UPDATED */}
      <div className="w-full max-w-7xl mx-auto px-6 pt-12 pb-24 border-t border-gray-200 flex justify-center">
        <Link 
          to="/web-development"
          className="flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-indigo-950 text-white hover:bg-red-600 transition-all text-base font-semibold group shadow-lg hover:shadow-red-600/20 hover:-translate-y-0.5"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform text-lg" /> Explore More Work
        </Link>
      </div>

      {/* FULL SCREEN LIGHTBOX INTERACTIVE MODAL OVERLAY */}
      <AnimatePresence>
        {activeImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-[100] bg-neutral-950/95 backdrop-blur-sm p-4 md:p-8 flex flex-col items-center justify-start overflow-y-auto cursor-zoom-out"
          >
            <button 
              onClick={() => setActiveImage(null)}
              className="fixed top-6 right-6 z-[110] p-3 rounded-full bg-white/10 hover:bg-white/20 text-white text-xl border border-white/10 shadow-xl transition-all"
            >
              <FiX />
            </button>

            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="max-w-5xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl my-12 border border-neutral-800"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={activeImage} 
                alt="Full detailed showcase preview" 
                className="w-full h-auto block object-contain object-top"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
};

export default DemoPage;