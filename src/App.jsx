import React from "react";
import { useEffect } from "react";
import "./App.css";
import HeroSection from "./screens/HeroSection";
import Navbar from "./components/Nav";
import FeatureSection from "./screens/FeatureSection";
import SwitchSection from "./screens/SwitchSection";
import ThreeDModelSection from "./screens/3dmodelsection";
import DetailsSections from "./screens/DetailsSections";
import Footer from "./screens/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: false,
      mirror: true
    });
  }, []);
  return (
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
