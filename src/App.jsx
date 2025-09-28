import React from "react";
import "./App.css";
import { ThreeDModel } from "./components/3dmodel";
import { BlueSwitch } from "./components/blueswitchmodel";
import HeroSection from "./screens/HeroSection";
import Navbar from "./components/Nav";
import FeatureSection from "./screens/FeatureSection";
import SwitchSection from "./screens/SwitchSection";
import ThreeDModelSection from "./screens/3dmodelsection";
export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <FeatureSection />
      <SwitchSection />
      <ThreeDModelSection/>
    </>
  );
}
