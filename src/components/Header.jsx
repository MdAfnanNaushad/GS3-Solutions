import React, { useState } from "react";
import gs3Logo from "../assets/gs3Logo.avif";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["Home", "Pricing", "About", "Contact", "Careers"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  return (
    <header className="w-full bg-gradient-to-r from-yellow-100 via-white to-purple-100 shadow sticky top-0 z-50 backdrop-blur-md">
      <nav className="w-full">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-8 py-2 w-full relative">
          
          <img
            src={gs3Logo}
            alt="GS3 Logo"
            className="rounded-full shadow-lg border-4 border-amber-300 transition-transform duration-300 hover:scale-105 bg-white mb-4 sm:mb-0 z-20"
            style={{
              height: "4rem",
              width: "4rem",
              objectFit: "contain",
              display: "block",
            }}
          />

          
          <button
            className="sm:hidden absolute right-6 top-1/2 -translate-y-1/2 z-30"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg
              width="32"
              height="32"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 10h20M6 16h20M6 22h20" strokeLinecap="round" />
            </svg>
          </button>

          <ul className="hidden sm:flex flex-row items-center gap-10">
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

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="fixed left-0 right-0 top-0 bg-gradient-to-b from-yellow-100 via-white to-purple-100 shadow-lg z-40 flex flex-col items-center pt-8 pb-8"
                style={{
                  borderBottomLeftRadius: "2rem",
                  borderBottomRightRadius: "2rem",
                }}
              >
                
                <button
                  className="absolute right-6 top-6 text-2xl font-bold text-gray-700"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  &times;
                </button>
                

                <ul className="flex flex-col items-center gap-6 mt-8">
                  {navLinks.map((link, idx) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-800 font-semibold text-xl px-4 py-2 rounded hover:text-yellow-600 transition-colors"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Header;
