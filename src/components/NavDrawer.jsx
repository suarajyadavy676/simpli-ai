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
        <RxHamburgerMenu className="text-white inline font-bold text-3xl" />
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
                    <Box as="span" flex="1" textAlign="left">
                      <p className="font-bold">Product</p>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="text-slate-400">
                  <p> <Link to="/simpliAssist">SimpliAssist</Link></p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            {/* Solutions */}
            <Accordion allowToggle>
              <AccordionItem border={"none"}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <p className="font-bold">Solutions</p>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="text-slate-400">
                  <p>Collections</p>
                  <p className="my-2">Enterprise</p>
                  <p>Call Center</p>
                  <p className="mt-2">Multichanne</p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            {/* Resources */}
            <Accordion allowToggle>
              <AccordionItem border={"none"}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <p className="font-bold">Resources</p>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="text-slate-400">
                  <p>Collections</p>
                  <p className="my-2">Enterprise</p>
                  <p>Call Center</p>
                  <p className="mt-2">Multichanne</p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            {/* Company */}
            <Accordion allowToggle>
              <AccordionItem border={"none"}>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <p className="font-bold">Company</p>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} className="text-slate-400">
                  <p>About Us</p>
                  <p className="my-2">Newsroom</p>
                  <p>Careers</p>
                  <p className="mt-2">Diversity</p>
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
