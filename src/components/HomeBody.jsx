import React, { useEffect } from "react";
import { PiImagesThin } from "react-icons/pi";
import { TbBulb } from "react-icons/tb";
import { TbWorld } from "react-icons/tb";
import "animate.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomeBody() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <div>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="lg:w-1/2 mx-auto text-lg text-center py-20 text-white animate__animated animate__backInDown ">
          <h1 className="text-4xl md:text-7xl font-bold py-10">SimpliAssist</h1>
          <p className="font-bold text-2xl mb-8">
            World's Simplest Solution For 100% Automation of Contact Center
          </p>
          <p className="font-semibold">
            Deliver consistent, high quality customer experience while
            integrating seamlessly with any enterprise environment. Reliable,
            secure, cost effective CX automation solution like never-before
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 my-24 gap-10 w-[80%] mx-auto text-xl items-center">
        <div className="font-semibold" data-aos="flip-left">
          <p className="my-5">Ready to Elevate Your Customer Service?</p>
          <p>
            Discover how SimpliAssist can transform your call center operations
            and drive your business forward
          </p>
          <button className="bg-green-800 text-white my-5 py-1 px-4 rounded-md">
            Learn More
          </button>
        </div>
        <div data-aos="flip-right" className="animate__bounceInRight">
          <div className="flex items-center">
            <span className="mr-3 bg-green-800 p-2 rounded-full">
              <TbWorld className="text-white font-bold text-2xl" />
            </span>
            <div>
              <p className="font-bold">
                100% Automation of In-Bound Call Operations
              </p>
              <p className="font-light">
                SimpliAssist redefines customer service efficiency by automating
                inbound call center operations entirely.
              </p>
            </div>
          </div>
          <div className="my-9 flex items-center">
            <span className="mr-3 bg-green-800 p-2 rounded-full">
              <TbBulb className="text-white font-bold text-2xl" />
            </span>
            <div>
              <p className="font-bold">Seamless Integration and deployment</p>
              <p className="font-light">
                Our platform flawlessly integrates with your existing CRM
                systems and prioritize simplicity and security in the deployment
                of our AI-led solutions.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-3 bg-green-800 p-2 rounded-full">
              <PiImagesThin className="text-white font-bold text-2xl" />
            </span>
            <div>
              <p className="font-bold">ROI-Driven Approach</p>
              <p className="font-light">
                Every aspect of SimpliAssist is designed to deliver measurable
                business impact - from improving customer satisfaction to
                significantly enhancing operational efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default HomeBody;
