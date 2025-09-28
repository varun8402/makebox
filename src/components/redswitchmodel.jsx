import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Center, OrbitControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("/models/red.glb");
  const modelRef = useRef();


  return (
    <Center>
       <primitive ref={modelRef} object={scene}  scale = {30} />
    </Center>
  );
}
export const RedSwitch = () => {
  return (
    <Canvas
      style={{ width: "20vw", height: "34vh", }}
      camera={{ position: [10, 10, 10], fov: 60 }}
    >
      <ambientLight intensity={2} />
      <directionalLight position={[10,0,10]} intensity={10}/>
      <Model/>
      <OrbitControls  enableZoom={false}/>
    </Canvas>
  );
}