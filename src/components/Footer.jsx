import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import gs3Logo from "../assets/gs3Logo.avif";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 pt-12 pb-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-12">
        {/* Left Section: About Us & Useful Links */}
        <div className="flex flex-col flex-1">
          <div className="flex flex-col sm:flex-row gap-10 justify-between">
            {/* About Us */}
            <div className="flex-1 min-w-[180px]">
              <h1 className="text-lg font-bold mb-4 text-amber-400">
                About Us
              </h1>
              <ul className="space-y-2 text-gray-300">
                <li>Company</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Affiliations</li>
                <li>Stores</li>
              </ul>
            </div>
            {/* Useful Links */}
            <div className="flex-1 min-w-[180px]">
              <h1 className="text-lg font-bold mb-4 text-amber-400">
                Useful Links
              </h1>
              <ul className="space-y-2 text-gray-300">
                <li>Supports</li>
                <li>Refund</li>
                <li>FAQ</li>
                <li>Feedback</li>
                <li>Stories</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center my-8">
            <img
              src={gs3Logo}
              alt="GS3 Solution Logo"
              className="w-64 h-64 object-contain"
            />
          </div>
        </div>
        {/* Right Section */}
        <div className="flex-1 flex flex-col gap-8 cursor-pointer">
          <div>
            <h1 className="text-lg font-bold mb-4 text-amber-400">
              Corporate Office
            </h1>
            <div className="text-gray-300 text-sm mb-2">
              INDIA: 2/80, Opposite Indira Maidan, Near GTR Gate No 1, City:
              Kolkata, Pincode: 700074, West Bengal, India
              <br />
              WB, India
              <br />
              (+91) 8436-618-251
              <br />
              (+91) 9733 140 877, (+91) 7439 754 848
            </div>
            <div className="text-gray-300 text-sm mb-2">
              USA: 30 N Gould St Ste R Sheridan, WY 82801
            </div>
            <div className="text-gray-300 text-sm mb-2">
              <span className="font-semibold text-amber-400">
                Email address:
              </span>{" "}
              info@gs3solution.com
            </div>
          </div>
          <div>
            <h1 className="text-lg font-bold mb-4 text-amber-400">
              Subscribe to our Newsletter
            </h1>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="rounded-l px-4 py-2 text-gray-200 placeholder-gray-400 bg-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-400 to-purple-400 text-white px-5 py-2 rounded-r font-semibold hover:scale-105 transition-transform"
              >
                Submit
              </button>
            </form>
          </div>
          <div>
            <h1 className="text-lg font-bold mb-4 text-amber-400">Follow Us</h1>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target=""
                rel=""
                className="hover:text-blue-400 transition-colors"
              >
                <FaFacebookF size={28} />
              </a>
              <a
                href="https://instagram.com"
                target=""
                rel=""
                className="hover:text-pink-400 transition-colors"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://linkedin.com"
                target=""
                rel=""
                className="hover:text-blue-300 transition-colors"
              >
                <FaLinkedinIn size={28} />
              </a>
              <a
                href="https://twitter.com"
                target=""
                rel=""
                className="hover:text-sky-400 transition-colors"
              >
                <FaTwitter size={28} />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Legal & Copyright */}
      <div className="max-w-7xl mx-auto px-4 mt-10 border-t border-gray-800 pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div className="space-y-1 text-center md:text-left">
            <div>
              GS3 is a registered trademark, GS3 Solution is a Unit of Girizen
              Software Sales Service Solution Private Limited.
            </div>
            <div>
              Copyright © 2025-2026 Girizen Software Sales Service Solution
              Private Limited. All Rights Reserved.
            </div>
            <div>
              CIN: U62091WB2024PTC273294, UAM: UDYAM-WB-10-0156215(MSME-Small),
              ISO 9001:2015 Certified
            </div>
          </div>
          <div className="space-y-1 text-center md:text-right">
            <a href="#" className="hover:text-amber-400 block">
              Terms & Condition
            </a>
            <a href="#" className="hover:text-amber-400 block">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-400 block">
              Refund Policy
            </a>
          </div>
        </div>
        <div className="text-center text-xs text-gray-500 mt-4">
          Made by:{" "}
          <span className="font-semibold text-amber-400">Md Afnan Naushad</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
