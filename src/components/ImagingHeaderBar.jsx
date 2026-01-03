import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";

export default function ImagingHeaderBar() {
  const sections = [
    { name: "CT", link: "/ct" },
    { name: "Radiography", link: "/radiography" },
    { name: "Nuclear Med/PET", link: "/nuclear" },
    { name: "PNRA", link: "/pnra" },
    { name: "Shielding", link: "/shielding" },
    { name: "Radiation Safety", link: "/radiationsafety" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full py-3 px-2 md:py-5 md:px-4 shadow-lg border-b border-cyan-300/20 overflow-hidden text-lightgray"
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "rgba(0,0,64,0.6)", 
      }}
    >
      
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
      />

   
      <div className="relative max-w-7xl mx-auto z-10">
     
        <div className="hidden md:grid grid-cols-6 gap-4 text-center">
          {sections.map((section, index) => (
            <motion.div
              key={section.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Link
                to={section.link}
                className="group relative text-base font-medium tracking-wide hover:text-cyan-400 transition-all duration-300 whitespace-nowrap"
              >
                {section.name}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            </motion.div>
          ))}
        </div>

        
        <div className="grid grid-cols-3 gap-2 md:hidden text-center">
          {sections.map((section, index) => (
            <motion.div
              key={section.name}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link
                to={section.link}
                className="group relative text-[11px] sm:text-xs font-medium tracking-wide hover:text-cyan-400 transition-all duration-300 whitespace-nowrap"
              >
                {section.name}
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-3/4"></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

   
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
