import React from 'react';
import Lottie from 'lottie-react';
import loaderAnimation from '../../public/assets/animations/loader.json'; // Adjust the path as necessary
const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black">
    <div className ="w-40 h-40">
    <Lottie animationData={loaderAnimation} loop={true} />
    </div>
  </div>
  );
};

export default Loader;