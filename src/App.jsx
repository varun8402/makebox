import React, { useState, useEffect } from "react";
import "./App.css";
import HeroSection from "./screens/HeroSection";
import Navbar from "./components/Nav";
import FeatureSection from "./screens/FeatureSection";
import SwitchSection from "./screens/SwitchSection";
import ThreeDModelSection from "./screens/3dmodelsection";
import DetailsSections from "./screens/DetailsSections";
import Footer from "./screens/Footer";
import Loader from "./components/Loader";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000); 
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  useEffect(() => {
    
    if (!loading) {
      AOS.init({
        duration: 500,
        once: false, 
        mirror: true
      });
    }
  }, [loading]); 
  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <HeroSection/>
      <FeatureSection />
      <SwitchSection />
      <ThreeDModelSection/>
      <DetailsSections/>
      <Footer />
    </>
  );
}