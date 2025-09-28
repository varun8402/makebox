import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Center, OrbitControls } from "@react-three/drei";
import gsap from "gsap";

function Model(props) {
  const { scene } = useGLTF("/models/deck-optimized2.glb");
  const modelRef = useRef();

  return (
    <Center>
       <primitive ref={modelRef} object={scene}  scale = {2.5} />
    </Center>
  );
}
export const ThreeDModel2 = () => {
  return (
    <Canvas
      style={{ width: "30vw", height: "60vh" }}
      camera={{ position: [40, 10, -10], fov: 60 }}
    >
      
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 0, 10]} intensity={1.5}/>
      <directionalLight position={[30, 70, 10]} intensity={1.5}/>
      <Model />
      <OrbitControls  enableZoom={false}/>
      
    </Canvas>
  );
}