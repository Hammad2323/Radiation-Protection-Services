import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";

export default function Navbar() {
  return (
    <>
   
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-black text-white"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center px-4 py-6 sm:px-6 sm:py-8 md:px-6 md:py-10 gap-4">
          <div className="flex items-center gap-4 sm:gap-5">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-full object-cover shadow-md"
            />
            <h1 className="text-lg sm:text-2xl md:text-4xl font-semibold tracking-wide whitespace-nowrap flex-shrink">
              Radiation Protection & QC Services
            </h1>
          </div>
        </div>
      </motion.div>

    
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="
          bg-[#222831] text-white
          sticky top-0 z-50
          border-b border-cyan-400/20
        "
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
        />

        <div className="max-w-7xl mx-auto px-3 py-4 md:px-6 md:py-5 relative z-10">
          <ul className="flex justify-between md:justify-between flex-nowrap gap-2 sm:gap-4 md:gap-6 text-[12px] sm:text-sm md:text-base font-[Poppins] font-medium tracking-wide">
            {[
              { to: "/", label: "Home" },
              { to: "/services", label: "Our Services" },
              { to: "/ionising-radiation", label: "Ionising Radiation" },
              { to: "/feedback", label: "Feedback" },
              { to: "/contact", label: "Contact" },
            ].map((item) => (
              <li key={item.to} className="flex-shrink-0">
                <Link
                  to={item.to}
                  className="group relative whitespace-nowrap font-[Poppins] font-semibold text-white transition-all duration-300 ease-in-out hover:text-cyan-400 hover:tracking-wide"
                >
                  {item.label}
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-500 ease-in-out group-hover:w-3/4" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </>
  );
}
