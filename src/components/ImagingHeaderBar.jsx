import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";

export default function ImagingHeaderBar() {
  const sections = [
    { name: "CT", link: "/ct" },
    { name: "MRI", link: "/mri" },
    { name: "Mammography", link: "/mammography" },
    { name: "Nuclear Med/PET", link: "/nuclear" },
    { name: "Radiography", link: "/radiography" },
    { name: "Shielding", link: "/shielding" },
    { name: "Radiation Safety", link: "/radiationsafety" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full bg-gradient-to-r from-[#040d26] via-[#0a1b45] to-[#122c66] py-5 px-4 shadow-lg border-b border-cyan-300/20 overflow-hidden"
      style={{
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Glow effect moving across */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
      />

      <div className="relative max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 text-center z-10">
        {sections.map((section, index) => (
          <motion.div
            key={section.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link
              to={section.link}
              className="group relative text-sm md:text-base font-medium tracking-wide text-cyan-100 hover:text-cyan-400 transition-all duration-300"
            >
              {section.name}
              <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-3/4"></span>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Subtle pulse border glow */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent"
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
