import React, { useState } from 'react'
import { Menu, MenuButton, MenuList, Box } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

function Product() {
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
                  <p>Product</p>
                </MenuButton>
                <MenuList bg="black" border={"black"}>
                  <div className="-my-7 py-10 px-2">
                  <p className="hover:text-green-600"> <Link to='/simpliAssist'>SimpliAssist</Link></p>
                  </div>
                </MenuList>
              </div>
            </Menu>
    </div>
  )
}

export default Product
