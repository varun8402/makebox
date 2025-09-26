import { ThreeDModel } from "../components/3dmodel"; // Assuming this component contains your <Canvas>

const HeroSection = () => {
  return (

    <div className="relative h-screen w-screen overflow-hidden">

      <div className="absolute inset-0 z-0">
        <ThreeDModel />
      </div>


      <div className="relative z-10 h-full w-full flex justify-center items-center pointer-events-none bg-black/50 flex-col  ">
        <h1 className="text-white text-[128px]/25 font-bold  overflow-hidden opacity-80 ">
          MAKEBOX
        </h1>
        <p className="text-white overflow-hidden font-thin opacity-80 text-[45px]/20">flow, focus, and freedom</p>
      </div>

    </div>
  );
}

export default HeroSection;