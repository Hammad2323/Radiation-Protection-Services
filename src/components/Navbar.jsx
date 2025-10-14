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
        className="bg-gradient-to-r from-[#061433] via-[#0a1f50] to-[#122c66] text-cyan-100"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2 border-b border-cyan-300/20">
          <h1 className="text-lg font-semibold tracking-wide text-cyan-300 drop-shadow-[0_0_6px_rgba(0,255,255,0.3)]">
            Radiation Protection & QC Services
          </h1>
          <div className="flex gap-8">
            <Link
              to="/contact"
              className="hover:text-cyan-400 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link
              to="/account"
              className="hover:text-cyan-400 transition-colors duration-300"
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
        className="bg-[#0b1a33] text-cyan-100 relative border-b border-cyan-400/10"
      >
        {/* Sweeping light animation */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
        />

        <div className="max-w-7xl mx-auto px-6 py-3 relative z-10">
          <ul className="flex flex-wrap gap-10 text-base font-medium justify-center md:justify-start">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Our Services" },
              { to: "/ionising-radiation", label: "Ionising Radiation" },
              { to: "/customers", label: "Our Customers" },
              { to: "/about", label: "About Us" },
              { to: "/feedback", label: "Feedback" },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="group relative hover:text-cyan-400 transition-all duration-300"
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
