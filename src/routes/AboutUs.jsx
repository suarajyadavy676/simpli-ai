import React from "react";
import "animate.css";

function AboutUs() {
  return (
    <>
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-center">
        <div className="py-14 text-xl md:w-[70%] w-[90%] mx-auto animate__animated animate__rollIn">
          <h1 className="text-4xl sm:text-7xl font-bold my-10">About Us</h1>
          <p>
            SimpliAI is a platform purpose built for simplifying the end-to-end
            AI adoption journey for enterprises of any size. We are building an
            Enterprise grade AI solution portfolio for 100% automating
            end-to-end workflows of select high impact enterprise use cases.
          </p>
          <p className="my-10">
            Currently, there are significant adoption challenges in AI led
            Digital Transformation at enterprises given the complexity of
            solutions, budgetary overspending, misalignment with business goals.
          </p>
          <p>
            SimpliAI will bridge this gap by creating uniquely simple, secure,
            unified solutions for AI adoption delivering enterprises measurable
            business impact and ROI from Day 1.
          </p>
        </div>
      </div>
      <div className="my-10 md:w-[80%] mx-auto w-[90%] text-justify">
        <div className="flex items-start flex-col md:flex-row md:items-center">
          <img src="/ceo.jpg" alt="ceo" className="w-40 rounded-md" />
          <div className="my-5 md:mx-10">
            <p>
              Seasoned X to 10X business builder, over the past decade as
              Country Head/Business Leader at Google, Apple, and Microsoft, he's
              built $500M+ enterprise businesses. Spearheading Microsoft India's
              AI-led Digital Transformation as CTO and later serving as Country
              Head Digital Natives, he brings a strong consultative approach
              honed from McKinsey&Company. Additionally, he advises the Airbus
              board. He holds degrees from IIT Madras [B.Tech, Electrical Engg]
              and ISB Hyderabad [MBA].
            </p>
            <div className="font-bold my-5">
              <p>Abhishek Awadhiya</p>
              <p>Founder & CEO</p>
              <p>
                <a
                  href="mailto:abhishek@simpli-ai.com"
                  className="hover:text-green-700"
                >
                  abhishek@simpli-ai.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start flex-col md:flex-row md:items-center mt-10">
          <img src="/cto.png" alt="ceo" className="w-40 rounded-md" />
          <div className="md:mx-10 my-5">
            <p>
              Technocrat by heart and a natural leader from IIT-Madras 2004
              BTech Electrical Engg batch Seasoned technology leader with 19+
              years of experience, who has consistently built high performance
              engineering teams across multiple locations, over the past has
              helped scale multiple startups from 0 to 10 and led Engineering
              Teams at various product companies with a variety of business
              domains including trading, retail e- commerce, omni channel
              fulfilment and e-learning. Worked on multiple PoCs and innovation
              in different tech stacks being it software or hardware layer.
            </p>
            <div className="font-bold my-5">
              <p>Nitin Jalan</p>
              <p>Co-Founder & Engineering / Tech Leader</p>
              <p>
                <a
                  href="mailto:nitin@simpli-ai.com"
                  className="hover:text-green-700"
                >
                  nitin@simpli-ai.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
