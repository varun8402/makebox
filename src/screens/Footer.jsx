import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-[#D9D9D9] text-black py-8 px-4 sm:px-8 md:px-16 flex items-center ">
      {/* Left and Middle Group */}
      <div className="flex items-center gap-8 md:gap-12">
        {/* Logo */}
        <div>
          <img 
            src="https://res.cloudinary.com/dwdsw96fy/image/upload/v1759086405/MAKEBOX_LOGO_znnits.png" 
            alt="Makebox Logo" 
            className="h-20 md:h-40 w-auto"
          />
        </div>

        {/* Divider and Middle Section */}
        <div className="flex items-center border-l-2 border-black pl-8 md:pl-12 h-40">
          <div className="flex flex-col sm:flex-row gap-y-4 sm:gap-x-12 md:gap-x-16">
            {/* Column 1 */}
            <div className="flex flex-col space-y-3">
              <p className="text-xs font-semibold tracking-widest whitespace-nowrap">ABHIMANYU PANNU (DESIGN)</p>
              <a href="#" className="text-xs underline font-bold tracking-widest">INSTAGRAM</a>
              <a href="#" className="text-xs underline font-bold tracking-widest">BEHANCE</a>
            </div>
            {/* Column 2 */}
            <div className="flex flex-col space-y-3">
              <p className="text-xs font-semibold tracking-widest whitespace-nowrap">VARUN MARWAH (FRONT-END DEV.)</p>
              <a href="#" className="text-xs underline font-bold tracking-widest">LINKEDIN</a>
              <a href="#" className="text-xs underline font-bold tracking-widest">GITHUB</a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Company Name */}
      <div className="ml-auto">
        <p className="sm:text-5xl md:text-6xl font-semibold font-black tracking-widest whitespace-nowrap">MAKEBOX.INC</p>
      </div>
    </div>
  );
};

export default Footer;

