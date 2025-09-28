import React from "react";
import "./App.css";
import HeroSection from "./screens/HeroSection";
import Navbar from "./components/Nav";
import FeatureSection from "./screens/FeatureSection";
import SwitchSection from "./screens/SwitchSection";
import ThreeDModelSection from "./screens/3dmodelsection";
import DetailsSections from "./screens/DetailsSections";
import Footer from "./screens/Footer";
export default function App() {
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
