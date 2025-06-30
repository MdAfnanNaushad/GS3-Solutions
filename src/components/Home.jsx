import React from "react";
import team from "../assets/team.png";
import Testimonials from "./Testimonials";
import TechStacks from "./TechStacks";
import Team from "./Team";
import Contact from "./Contact";

import WorkExample from "./WorkExample";
import { ServicesGrid } from "./ServicesCard";
const Home = () => {
  return (
    <>
      <section className="relative flex items-center justify-center max-w-9xl mx-auto px-8 py-20 min-h-[80vh] ">
        <img
          src={team}
          alt="Team background"
          className="absolute w-full h-full object-cover opacity-80 -z-10 rounded-xl"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 w-full h-full bg-black/60 rounded-xl -z-10"
          aria-hidden="true"
        ></div>
        <div className="z-20 max-w-2xl text-center mx-auto">
          <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-lg">
            Welcome to GS3 Solutions
          </h1>
          <p className="text-xl text-white mb-8 drop-shadow font-bold">
            Empowering your team with seamless collaboration and smart
            solutions. Discover how we can help you grow and succeed.
          </p>
          <a
            href="#"
            className="inline-block px-8 py-3 bg-gradient-to-r from-yellow-400 to-purple-400 text-white font-semibold rounded shadow hover:scale-105 transition-transform border-amber-400 border-2 border-solid"
          >
            Get Started
          </a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Services Provided
        </h1>
        <ServicesGrid />
        <WorkExample />
        <Testimonials />
        <TechStacks />
        <Team />
        <Contact />
      </section>
    </>
  );
};

export default Home;
