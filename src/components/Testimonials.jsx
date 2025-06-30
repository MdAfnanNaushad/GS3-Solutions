import React from "react";
import { FaStar } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import customer1 from '../assets/customer1.png'
import customer2 from '../assets/customer2.png'
import customer3 from '../assets/customer3.png'
import customer4 from '../assets/customer4.png'
import customer5 from '../assets/customer5.png'

const testimonials = [
  {
    name: "Amit Sharma",
    image: customer1,
    rating: 5,
    text: "GSHome transformed our workflow. The team is responsive and the product is top-notch!",
    role: "Product Manager, TechCorp",
  },
  {
    name: "Priya Verma",
    image: customer2,
    rating: 4,
    text: "Excellent service and support. Our business saw real results within weeks.",
    role: "Founder, StartupX",
  },
  {
    name: "Rahul Singh",
    image: customer3,
    rating: 5,
    text: "Highly recommend GSHome for anyone looking to scale their digital presence.",
    role: "Marketing Lead, Marketify",
  },
  {
    name: "Sneha Patel",
    image: customer4,
    rating: 4,
    text: "Professional, reliable, and innovative. We love working with GSHome!",
    role: "CEO, FinEdge",
  },
];

// Helper to repeat testimonials for infinite effect
const infiniteTestimonials = [...testimonials, ...testimonials];

const sliderVariants = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 18,
        ease: "linear",
      },
    },
  },
};

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        What Our Customers Say
      </h2>
      <div className="relative w-full max-w-6xl mx-auto">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-8"
            variants={sliderVariants}
            animate="animate"
            style={{ width: "max-content" }}
          >
            {infiniteTestimonials.map((t, idx) => (
              <div
                key={idx}
                className="min-w-[340px] max-w-xs bg-white rounded-xl shadow p-6 flex flex-col items-center text-center mx-2"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-yellow-400"
                />
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-5 w-5 ${
                        i < t.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{t.text}"</p>
                <div>
                  <span className="font-semibold text-gray-900">{t.name}</span>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
