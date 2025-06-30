import React from "react";
import GiriSir from "../assets/GiriSir.png";
import Ravi from "../assets/Ravi.png";
import Mallic from "../assets/Mallic.png";
import Kundan from "../assets/Kundan.png";

const teamMembers = [
  {
    name: "Giri Dutta",
    role: "Founder & CEO",
    image: GiriSir,
  },
  {
    name: "Ravi Yadav",
    role: "Lead Developer",
    image: Ravi,
  },
  {
    name: "Rahul Mullic",
    role: "UI/UX Designer",
    image: Mallic,
  },
  {
    name: "Kundan Kumar",
    role: "Marketing Head",
    image: Kundan,
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-amber-50 to-purple-50">
      <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-800 tracking-tight">
        Meet Our Team
      </h2>
      <p className="text-center text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
        Our talented professionals are dedicated to delivering the best
        solutions and experiences for our clients.
      </p>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-8 relative overflow-hidden"
          >
            <div className="relative mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-amber-400 shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 right-0 bg-gradient-to-tr from-yellow-400 to-purple-400 rounded-full w-6 h-6 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                <span className="block w-3 h-3 bg-white rounded-full"></span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-amber-600 transition-colors duration-300">
              {member.name}
            </h3>
            <p className="text-sm text-gray-500 font-medium mb-2">
              {member.role}
            </p>
            <div className="w-10 h-1 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full mb-2 opacity-70"></div>
            <p className="text-xs text-gray-400 italic text-center">
              Passionate about innovation and excellence.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
