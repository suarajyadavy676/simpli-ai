import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  // Function to check the scroll position
  const handleScroll = () => {
    const position = window.scrollY;
    setIsFixed(position > 0); // Fixed when not at the top
  };

  // Set up event listener for scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className={`${isFixed ? 'fixed w-full top-0 left-0' : 'relative'} bg-white shadow-lg z-50`}>
      {/* navbar for large screen */}
      <div className="hidden lg:block">
        <div className="bg-black py-3 px-20 grid grid-cols-2">
          <div>
            <img src="/logo.jpg" alt="logo" className="w-48" />
          </div>
          <div className="text-white grid grid-cols-5 items-center">
            <p>Product</p>
            <p>Solutions</p>
            <p>Resources</p>
            <p>Company</p>
            <button className="bg-green-500 rounded-lg font-bold py-1">Book Demo</button>
          </div>
        </div>
      </div>

      {/* Small screen */}
      <div className="lg:hidden">
        <div className="bg-black py-2 px-3 flex justify-between items-center flex-wrap">
          <div>
            <img src="/logo.jpg" alt="logo" className="sm:w-48 w-24 text-center" />
          </div>
          <div className="text-right">
          <button className="bg-green-500 rounded-lg px-4 py-1 mx-5 text-white font-bold">Book Demo</button>
            <RxHamburgerMenu className="text-white inline font-bold text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
