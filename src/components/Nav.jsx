const Navbar = () => {
  return (
    <nav className="text-white text-xl flex justify-between items-center absolute w-full z-20 top-3 px-4">
      
      
      <img 
        src="https://res.cloudinary.com/dwdsw96fy/image/upload/v1758908786/makebox_vh6axv.png" 
        className="h-12" 
        alt="Makebox Logo"
      />

      <ul className="flex gap-8 pointer-events-auto">
        
        <li className="btn ">
          About
        </li>
        <li className="btn">
          Contact
        </li>
        
      </ul>
    </nav>
  );
}

export default Navbar;