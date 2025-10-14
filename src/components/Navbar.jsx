import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";

export default function Navbar() {
  return (
    <header className="shadow-lg font-[Poppins]">
      {/* === Top Bar === */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black text-white" // Jet Black background
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-2 py-1 md:px-6 md:py-2 gap-2 md:gap-0">
          <h1 className="text-[11px] sm:text-xs md:text-lg font-semibold tracking-wide whitespace-nowrap flex-shrink">
            Radiation Protection & QC Services
          </h1>
          <div className="flex gap-2 sm:gap-4 md:gap-8 flex-shrink">
            <Link
              to="/contact"
              className="hover:text-cyan-400 transition-colors duration-300 text-[11px] sm:text-xs md:text-base whitespace-nowrap"
            >
              Contact Us
            </Link>
            <Link
              to="/account"
              className="hover:text-cyan-400 transition-colors duration-300 text-[11px] sm:text-xs md:text-base whitespace-nowrap"
            >
              Your Account
            </Link>
          </div>
        </div>
      </motion.div>

      {/* === Main Navigation === */}
      <motion.nav
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-[#333333] text-white relative border-b border-cyan-400/10" // Charcoal Black background
      >
        {/* Sweeping light animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
        />

        <div className="max-w-7xl mx-auto px-2 py-2 md:px-6 relative z-10">
          <ul className="flex justify-center md:justify-start gap-2 sm:gap-4 md:gap-6 flex-shrink text-[11px] sm:text-xs md:text-base font-medium">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Our Services" },
              { to: "/ionising-radiation", label: "Ionising Radiation" },
              { to: "/about", label: "About Us" },
              { to: "/feedback", label: "Feedback" },
            ].map((item) => (
              <li key={item.to} className="flex-shrink-0">
                <Link
                  to={item.to}
                  className="group relative hover:text-cyan-400 transition-all duration-300 whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-3/4"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </header>
  );
}
