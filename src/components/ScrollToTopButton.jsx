import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-slate-400 text-black rounded-full shadow-md hover:bg-blue-300 transition duration-300 ease-in-out opacity-50"
        >
         <MdKeyboardDoubleArrowUp className='text-2xl hover:text-black'/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
