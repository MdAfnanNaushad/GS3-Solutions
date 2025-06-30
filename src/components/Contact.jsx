import React from "react";
import ContactImg from "../assets/ContactImg.png";

const Contact = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-5xl font-bold text-center mb-6 text-gray-800">
        Contact{" "}
        <span className="bg-gradient-to-r from-yellow-500 to-purple-400 bg-clip-text text-transparent">
          Us
        </span>
      </h2>
      <p className="text-center text-gray-500 mb-10">
        Have a question or want to work with us? Fill out the form or reach us
        directly!
      </p>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
        <div className="flex-1 flex justify-center mb-8 md:mb-0">
          <img
            src={ContactImg}
            alt="Contact"
            className="w-full max-w-2xl rounded-xl shadow-lg object-cover"
          />
        </div>

        <form className="flex-1 bg-gray-50 rounded-xl shadow p-8 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-400 to-purple-400 text-white font-semibold py-3 rounded shadow hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
