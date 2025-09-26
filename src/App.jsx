import React from "react";
import "./App.css";
import { ThreeDModel } from "./components/3dmodel";
import { BlueSwitch } from "./components/blueswitchmodel";
import HeroSection from "./screens/HeroSection";
export default function App() {
  return (
    <>
      <HeroSection/>
      <BlueSwitch />
    </>
  );
}
