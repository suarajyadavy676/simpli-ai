import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  AccordionPanel,
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div>
      <Button ref={btnRef} colorScheme="black" onClick={onOpen}>
        <RxHamburgerMenu className="text-white inline font-bold sm:text-3xl text-2xl" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"black"}>
          <DrawerCloseButton className="text-blue-500" />
          <DrawerHeader className="text-slate-500">Menu</DrawerHeader>
          <DrawerBody className="text-white">
            {/* Product */}
            <Accordion allowToggle>
              <AccordionItem border={"none"}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="hover:text-green-600"
                    >
                      <p className="font-bold">Product</p>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="text-slate-400">
                  <p className="hover:text-green-500">
                    {" "}
                    <Link to="/simpliAssist">SimpliAssist</Link>
                  </p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            {/* Solutions */}
            <Accordion allowToggle>
              <AccordionItem border={"none"}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="hover:text-green-600"
                    >
                      <p className="font-bold">Solutions</p>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="text-slate-400">
                  <p className="hover:text-green-600">
                    <Link to="#">Collections</Link>
                  </p>
                  <p className="my-2 hover:text-green-600">
                    <Link to="#">Enterprise</Link>
                  </p>
                  <p className="hover:text-green-600">
                    <Link to="#">Call Center</Link>
                  </p>
                  <p className="mt-2 hover:text-green-600">
                    <Link to="#">Multichannel</Link>
                  </p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            {/* Resources */}
            <Accordion allowToggle>
              <AccordionItem border={"none"}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="hover:text-green-600"
                    >
                      <p className="font-bold">Resources</p>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="text-slate-400">
                  <p className="hover:text-green-600">
                    <Link to="#">Collections</Link>
                  </p>
                  <p className="my-2 hover:text-green-600">
                    <Link to="#">Enterprise</Link>
                  </p>
                  <p className="hover:text-green-600">
                    <Link to="#">Call Center</Link>
                  </p>
                  <p className="mt-2 hover:text-green-600">
                    <Link to="#">Multichannel</Link>
                  </p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            {/* Company */}
            <Accordion allowToggle>
              <AccordionItem border={"none"}>
                <h2>
                  <AccordionButton>
                    <Box
                      as="span"
                      flex="1"
                      textAlign="left"
                      className="hover:text-green-600"
                    >
                      <p className="font-bold">Company</p>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="text-slate-400">
                  <p className="hover:text-green-600">
                    <Link to="/aboutUs">About Us</Link>
                  </p>
                  <p className="my-2 hover:text-green-600">
                    <Link to="#">Newsroom</Link>
                  </p>
                  <p className="hover:text-green-600">
                    <Link to="#">Careers</Link>
                  </p>
                  <p className="mt-2 hover:text-green-600">
                    <Link to="#">Diversity</Link>
                  </p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </DrawerBody>

          <DrawerFooter>
            {/* <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button> */}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default NavDrawer;
