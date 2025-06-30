import React from "react";
import Web from "../assets/Web.png";
import Mobile from "../assets/Mobile.png";
import Digital from "../assets/Digital.png";
import Bulkmsg from "../assets/Bulkmsg.png";
import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

// ServiceCard expects a single service prop
const ServiceCard = ({ service }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="relative bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Gradient overlay (bottom to top) */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: hovered ? "100%" : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute left-0 bottom-0 w-full rounded-xl pointer-events-none"
        style={{
          background: "linear-gradient(to top, #fbbf24, #a78bfa)",
          zIndex: 1,
          opacity: 0.8,
        }}
      />
      <motion.img
        src={service.image}
        alt={service.name}
        initial={{ height: 0, opacity: 0 }}
        animate={
          hovered ? { height: "100%", opacity: 1 } : { height: 0, opacity: 0 }
        }
        transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
        className="absolute left-0 top-0 w-full object-cover rounded-xl pointer-events-none text-amber-50"
        style={{ zIndex: 2 }}
      />

      <div className="relative z-10">
        <service.icon className="h-12 w-12 text-yellow-500 mb-4" />
        <h2 className="text-xl font-semibold mb-2 text-gray-900">
          {service.name}
        </h2>
        <p className="text-gray-600">{service.description}</p>
      </div>
    </div>
  );
};

// Export a ServicesGrid component that maps over all services
const services = [
  {
    name: "Mobile Development",
    description:
      "Custom mobile apps for Android and iOS to grow your business.",
    icon: DevicePhoneMobileIcon,
    image: Mobile,
  },
  {
    name: "Web Development",
    description: "Modern, responsive websites and web applications.",
    icon: GlobeAltIcon,
    image: Web,
  },
  {
    name: "Digital Marketing",
    description:
      "SEO, social media, and digital campaigns to boost your reach.",
    icon: ChartBarIcon,
    image: Digital,
  },
  {
    name: "Bulk SMS",
    description: "Reliable bulk SMS solutions for instant communication.",
    icon: ChatBubbleLeftRightIcon,
    image: Bulkmsg,
  },
];

export const ServicesGrid = () => (
  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
    {services.map((service) => (
      <ServiceCard key={service.name} service={service} />
    ))}
  </div>
);

export default ServiceCard;