import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Center, OrbitControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/models/brown.glb");
  const modelRef = useRef();


  return (
    <Center>
       <primitive ref={modelRef} object={scene}  scale = {30} />
    </Center>
  );
}
export const BrownSwitch = () => {
  return (
    <Canvas
      style={{ width: "20vw", height: "34vh", }}
      camera={{ position: [10, 10, 10], fov: 60 }}
    >
      <ambientLight intensity={4} />
      <directionalLight position={[10,0,10]} intensity={10}/>

      <Model/>
      <OrbitControls  enableZoom={false}/>
    </Canvas>
  );
}