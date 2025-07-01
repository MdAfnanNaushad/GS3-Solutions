import React from "react";
import gs3Logo from "../assets/gs3Logo.avif";
import { motion } from "framer-motion";

const navLinks = ["Home", "Pricing", "About", "Contact", "Careers"];

const Header = () => {
  const [hovered, setHovered] = React.useState(null);

  return (
    <header className="w-full bg-gradient-to-r from-yellow-100 via-white to-purple-100 shadow sticky top-0 z-50 backdrop-blur-md">
      <nav className="w-full">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-2 w-full">
          <img
            src={gs3Logo}
            alt="GS3 Logo"
            className="rounded-full shadow-lg border-4 border-amber-300 transition-transform duration-300 hover:scale-105 bg-white mb-4 sm:mb-0"
            style={{
              height: "4rem",
              width: "4rem",
              objectFit: "contain",
              display: "block",
            }}
          />
          <ul className="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4 sm:gap-10">
            {navLinks.map((link, idx) => (
              <li
                key={link}
                className="relative"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                <a
                  href="#"
                  className="text-gray-800 font-semibold hover:text-yellow-600 transition-colors text-lg px-2 py-1 rounded duration-200 hover:scale-110"
                >
                  {link}
                  {hovered === idx && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 h-1 rounded"
                      style={{
                        bottom: -2,
                        background:
                          "linear-gradient(to right, #f59e42, #a78bfa)",
                      }}
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      exit={{ width: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
