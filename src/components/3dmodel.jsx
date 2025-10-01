import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Center, OrbitControls } from "@react-three/drei";
import gsap from "gsap";

function Model(props) {
  const { scene } = useGLTF("/models/deck-optimized.glb");
  const modelRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerWidth) * 2 - 1;

      gsap.to(modelRef.current.rotation, {
        y: x * 0.6,  
        x: y * 0.3,
        duration: 1.2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Center>
       <primitive ref={modelRef} object={scene}  scale = {2.6} />
    </Center>
  );
}
export const ThreeDModel = () => {
  return (
    <Canvas
      style={{ width: "100vw", height: "100vh", background: "black" }}
      camera={{ position: [40, 10, -10], fov: 60 }}
    >
      
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 0, 10]} />
      <directionalLight position={[30, 70, 10]} />
      <Model data-aos="fade-in"/>
      
    </Canvas>
  );
}