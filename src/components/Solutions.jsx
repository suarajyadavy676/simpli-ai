import React, { useState } from 'react'
import { Menu, MenuButton, MenuList, Box } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Solutions() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };
  return (
    <div>
       <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <MenuButton as={Box} p="2" borderRadius="md" className="hover:underline hover:underline-offset-8 hover:text-green-600 hover:decoration-red-700">
                  <p>Solutions</p>
                </MenuButton>
                <MenuList bg="black" border={"black"}>
                  <div className="-my-7 py-10 px-4">
                  <p className='hover:text-green-600'><Link to="#">Collections</Link></p>
                  <p className="my-2 hover:text-green-600"><Link to="#">Enterprise</Link></p>
                  <p className='hover:text-green-600'><Link to="#">Call Center</Link></p>
                  <p className="mt-2 hover:text-green-600"><Link to="#">Multichannel</Link></p>
                  </div>
                </MenuList>
              </div>
            </Menu>
    </div>
  )
}

export default Solutions
