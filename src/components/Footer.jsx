import React from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socials = [
   {
  icon: <FaEnvelope size={20} />,
  link: "mailto:rad.protect.qc@email.com",
  color: "text-cyan-400",
},

    {
      icon: <FaWhatsapp size={20} />,
      link: "https://wa.me/923009519881",
      color: "text-green-500",
    },
    {
      icon: <FaFacebookF size={20} />,
      link: "https://www.facebook.com/profile.php?id=61582009409975",
      color: "text-blue-600",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      link: "https://www.linkedin.com/in/radiation-protection-051738389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "text-blue-400",
    },
  ];

  return (
    <footer className="bg-[#222831] text-white relative border-t border-cyan-400/20 overflow-hidden">
      
    
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">

       
        <div className="flex gap-5">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-transform duration-300 hover:scale-110 ${social.color}`}
              whileHover={{ scale: 1.15 }}
              aria-label={`Link to ${social.link}`}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

        
        <div className="flex flex-col items-center sm:items-end gap-1">
          <span
            className="
              text-base sm:text-lg font-medium tracking-wide
              text-cyan-300
            "
          >
            Developer | Hammad Azeem
          </span>
          <span
            className="
              text-sm sm:text-base text-gray-300
              tracking-wide
            "
          >
            &copy; 2026 Radiation Protection — All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
