import React from "react";
import "animate.css";

function HomeBody() {
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
        <div className="font-semibold">
          <p className="my-5">Ready to Elevate Your Customer Service?</p>
          <p>
            Discover how SimpliAssist can transform your call center operations
            and drive your business forward
          </p>
          <button className="bg-green-800 text-white my-5 py-1 px-4 rounded-md">
            Learn More
          </button>
        </div>
        <div>
          <div>
            <p className="font-bold">
              100% Automation of In-Bound Call Operations
            </p>
            <p className="font-light">
              SimpliAssist redefines customer service efficiency by automating
              inbound call center operations entirely.
            </p>
          </div>
          <div className="my-9">
            <p className="font-bold">Seamless Integration and deployment</p>
            <p className="font-light">
              Our platform flawlessly integrates with your existing CRM systems
              and prioritize simplicity and security in the deployment of our
              AI-led solutions.
            </p>
          </div>
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
  );
}

export default HomeBody;
