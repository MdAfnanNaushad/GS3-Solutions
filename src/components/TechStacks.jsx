import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiVite } from "react-icons/si";

const techStack = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Vite", icon: <SiVite className="text-violet-500" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
  { name: "AWS", icon: <FaAws className="text-orange-400" /> },
  { name: "Python", icon: <FaPython className="text-blue-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
];

const TechStacks = () => (
  <section className="py-16 bg-white">
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
      Technologies We Use
    </h2>
    <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
      {techStack.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center text-center group transition-transform"
        >
          <div className="text-7xl mb-2 transition-transform duration-300 group-hover:scale-125 group-hover:drop-shadow-gold">
            {tech.icon}
          </div>
          <span className="text-gray-700 font-medium mt-1 group-hover:text-amber-400 transition-colors duration-300">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default TechStacks;
