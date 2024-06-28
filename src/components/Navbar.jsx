import React, { useEffect, useState } from "react";
import NavDrawer from "./NavDrawer";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuList, Box } from "@chakra-ui/react";

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  // Function to check the scroll position
  const handleScroll = () => {
    const position = window.scrollY;
    setIsFixed(position > 0); // Fixed when not at the top
  };

  // Set up event listener for scrolling
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div
      className={`${
        isFixed ? "fixed w-full top-0 left-0" : "relative"
      } bg-white shadow-lg z-50`}
    >
      {/* navbar for large screen */}
      <div className="hidden lg:block">
        <div className="bg-black py-4 px-5 grid grid-cols-2">
          <div>
            <Link to="/">
              {" "}
              <img src="/logo.jpg" alt="logo" className="w-48 hover:w-40" />
            </Link>
          </div>
          <div className="text-white grid grid-cols-5 gap-3 items-center">
            <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <MenuButton as={Box} p="2" borderRadius="md" className="hover:underline hover:underline-offset-8 hover:text-green-600 hover:decoration-red-700">
                  <p>Product</p>
                </MenuButton>
                <MenuList bg="black" border={"black"}>
                  <div className="-my-7 py-10 px-2">
                  <p className="hover:text-green-600"> <Link to='/simpliAssist'>SimpliAssist</Link></p>
                  </div>
                </MenuList>
              </div>
            </Menu>
            <p className="hover:underline">Solutions</p>
            <p>Resources</p>
            <p>Company</p>
            <button className="bg-green-500 rounded-lg font-bold py-1 hover:text-blue-900">
              <Link to="/BookDemo">Book Demo</Link>
            </button>
          </div>
        </div>
      </div>

      {/* Small screen */}
      <div className="lg:hidden">
        <div className="bg-black py-4 px-3 flex justify-between items-center flex-wrap">
          <div>
            <Link to="/">
              <img
                src="/logo.jpg"
                alt="logo"
                className="sm:w-44 hover:w-40 w-24 text-center"
              />
            </Link>
          </div>
          <div className="text-right flex">
            <button className="bg-green-500 rounded-lg sm:px-4 px-2 py-1 sm:mx-5 text-white font-bold hover:text-blue-900">
              <Link to="/bookDemo">Book Demo</Link>
            </button>
            <NavDrawer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
