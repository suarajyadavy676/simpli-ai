import React, { useEffect } from "react";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

function SimpliAssist() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <h1 className="text-center my-10 text-4xl font-bold animate__animated animate__backInDown">
        Why SimpliAssist ?
      </h1>
      <div className="text-white text-justify w-[96%] md:w-[90%] xl:w-[75%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">
        <div className="bg-teal-950 p-4 rounded-lg shadow-2xl shadow-slate-400 animate__animated animate__bounceInLeft">
          <p className="font-bold text-xl mb-3 text-center">
            Full-Spectrum Automation for Unmatched Efficiency
          </p>
          <p>
            SimpliAssist introduces a new era in customer service, achieving
            100% automation for inbound call centers. It ensures immediate,
            round-the-clock service without agent intervention, guaranteeing
            efficiency and high-quality interactions.
          </p>
        </div>
        <div className="bg-teal-950 p-4 rounded-lg shadow-2xl shadow-slate-400 animate__animated animate__bounceInRight">
          <p className="font-bold text-xl mb-3 text-center">
            Flawless Integration with Your Existing Systems
          </p>
          <p>
            SimpliAssist seamlessly integrates with your cloud contact center
            and CRM systems, enhancing operations with AI-driven interactions.
            It ensures a smooth upgrade without disruption or steep learning
            curves, unlocking enhanced customer engagement
          </p>
        </div>
        <div className="bg-teal-950 p-4 rounded-lg shadow-2xl shadow-slate-400 animate__animated animate__bounceInLeft">
          <p className="font-bold text-xl mb-3 text-center">Quantifiable ROI</p>
          <p>
            SimpliAssist delivers tangible bottom-line improvements by
            automating customer service, significantly cutting operational
            costs, and boosting agent performance metrics like AHT and CSAT.
          </p>
        </div>
        <div className="bg-teal-950 p-4 rounded-lg shadow-2xl shadow-slate-400 animate__animated animate__bounceInRight">
          <p className="font-bold text-xl mb-3 text-center">
            Simple and Secure Deployment
          </p>
          <p>
            Transitioning to advanced AI customer service with SimpliAssist is
            secure and straightforward. Our deployment prioritizes ease,
            security, and compliance with industry standards, ensuring robust
            systems and protected data.
          </p>
        </div>
      </div>

      <p className="text-center text-4xl text-teal-500 font-bold mb-4 mt-20 animate__animated animate__backInDown">
        Competitive Edge{" "}
      </p>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-lg w-[96%] lg:w-[90%] mx-auto text-justify my-10"
        data-aos="flip-right"
      >
        <div>
          <p className="font-bold my-2 text-center">
            Meticulous Execution Roadmap
          </p>
          <p>
            SimpliAssist's launch, a culmination of careful planning and
            technical scrutiny, involves customer collaboration and a
            comprehensive market strategy. Its debut at Davos 2024 heralds a
            game-changing AI solution for customer service.
          </p>
        </div>
        <div>
          <p className="font-bold my-2 text-center">
            No Tech Debt, Only Progress
          </p>
          <p>
            A future-proof, fully automated solution devoid of incremental
            technical debt, unlike piecemeal AI tools. Rather than adding
            layers, we integrate sophistication, offering a streamlined route to
            digital transformation.
          </p>
        </div>
        <div>
          <p className="font-bold my-2 text-center">The Early Mover's Vision</p>
          <p>
            Be an early adopter with our pioneering solution, achieving 100%
            in-bound call automation. This groundbreaking offering positions us
            as global leaders, providing unparalleled end-to-end automation
            capabilities unmatched in the market.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SimpliAssist;
