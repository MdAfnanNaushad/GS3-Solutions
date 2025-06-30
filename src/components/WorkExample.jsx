import React from "react";
import Ecom from "../assets/Ecom.png";
import Blogging from "../assets/blogging.png";
import Finance from "../assets/Finance.png";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A scalable online store with payment integration and real-time inventory.",
    image: Ecom,
    link: "#",
  },
  {
    title: "Blogging Site",
    description:
      "Interactive dashboard for visualizing business KPIs and analytics.",
    image: Blogging,
    link: "#",
  },
  {
    title: "Finance App",
    description:
      "Secure and user-friendly mobile banking application for iOS and Android.",
    image: Finance,
    link: "#",
  },
];

const WorkExample = () => (
  <section className="py-16 bg-white">
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
      Featured Work
    </h2>
    <div className="max-w-6xl mx-auto border-amber-400 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      {projects.map((project) => (
        <div
          key={project.title}
          className="bg-gray-50 border-2 border-solid border-amber-400 rounded-xl shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-semibold mb-2 text-gray-900">
              {project.title}
            </h3>
            <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
            <a
              href={project.link}
              className="inline-block mt-auto text-blue-600 font-medium hover:underline"
            >
              View Project
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);
export default WorkExample;
