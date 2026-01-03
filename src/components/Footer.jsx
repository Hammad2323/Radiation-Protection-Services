import React from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const socials = [
    {
      icon: <FaEnvelope size={18} />,
      link: "mailto:rad.protect.qc@email.com",
      color: "text-cyan-400",
    },
    {
      icon: <FaWhatsapp size={18} />,
      link: "https://wa.me/923009519881",
      color: "text-green-500",
    },
    {
      icon: <FaFacebookF size={18} />,
      link: "https://www.facebook.com/profile.php?id=61582009409975",
      color: "text-blue-600",
    },
    {
      icon: <FaLinkedinIn size={18} />,
      link: "https://www.linkedin.com/in/radiation-protection-051738389",
      color: "text-blue-400",
    },
  ];

  return (
    <footer className="bg-[#222831] text-white border-t border-cyan-400/20 relative overflow-hidden">
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      />

      <div
        className="
          relative z-10 max-w-7xl mx-auto
          px-6 py-6
          flex flex-col sm:flex-row
          items-center sm:items-center
          justify-center sm:justify-between
          gap-4
          text-center sm:text-right
        "
      >
        
        <div className="flex gap-5">
          {socials.map((social, index) => (
            <motion.a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`${social.color} transition-transform duration-300`}
              whileHover={{ scale: 1.12 }}
              aria-label="Social link"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>

      
        <div className="flex flex-col items-center sm:items-end gap-1 max-w-full">
          <span
            className="
              text-sm sm:text-base
              font-medium tracking-wide
              text-cyan-300
            "
          >
            Developer | Hammad Azeem
          </span>

          <span
            className="
              text-xs sm:text-sm
              text-gray-300
              tracking-wide
              leading-relaxed
              break-words
            "
          >
            © 2026 Radiation Protection — All rights reserved
          </span>
        </div>
      </div>
    </footer>
  );
}
