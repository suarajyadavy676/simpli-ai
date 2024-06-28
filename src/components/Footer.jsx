import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-white bg-black pt-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
        <Link to="/"><img src="/logo.jpg" alt="logo" className="w-48 hover:w-40 mx-4 my-2" /></Link>
          <p className="w-[90%] mx-auto">
            Collection Experiences,Augmented by Conversational AI
          </p>
          <p className="mx-4 my-4">Follow Us</p>
          <span className="bg-white mx-4 p-2 rounded-full">
            <a href="https://www.linkedin.com/company/simpliai/" target="_blank">
              <FaLinkedinIn className="inline text-blue-700 text-2xl hover:text-blue-400" />
            </a>
          </span>
        </div>
        <div className="mx-4">
          <p className="my-2">Quick Links</p>
          <p>Home</p>
          <p className="hover:text-green-600"><Link to='/aboutUs'>About Us</Link></p>
          <p>Newsroom</p>
          <p>Resources</p>
          <p>Careers</p>
        </div>
        <div className="mx-4">
          <p className="my-2">Support</p>
          <p className="hover:text-green-600"><Link to="/bookDemo">Book Demo</Link></p>
          <p>Privacy Policy</p>
          <p>Disclaimer</p>
        </div>
        <div className="mx-4">
          <p className="my-2">India</p>
          <p>135 Madison Ave,</p>
          <p>7th Floor,</p>
          <p>Bangalore xxxxxx</p>
        </div>
      </div>
      <p className="text-center xl:w-[70%] mx-auto w-[90%] mt-14 pb-3">
        By continuing past this page, you agree to our Terms of Service, Cookie
        Policy, Privacy Policy and Content Policies. All trademarks are
        properties of their respective owners. 2024 © Skit™. All rights
        reserved.
      </p>
    </div>
  );
}

export default Footer;
