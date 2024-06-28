import React, { useState, useEffect } from 'react';
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
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
    <div className="fixed bottom-1/2 right-4">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-slate-400 text-red-700 rounded-full shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
        >
         <MdKeyboardDoubleArrowUp className='text-2xl'/>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
