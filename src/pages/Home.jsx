import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImagingHeaderBar from "../components/ImagingHeaderBar";
import Services from "./Services";

const sections = [
  { name: "CT", bg: "/pic4.jpg", image: "/CT.jpeg", link: "/ct" },
  { name: "Radiography", bg: "/pic9.jpg", image: "/Radiography.jpeg", link: "/radiography" },
   { name: "Nuclear Med/PET", bg: "/pic8.jpg", image: "/Med.jpeg", link: "/nuclear" },
  { name: "PNRA", bg: "/pic7.jpg", image: "/pnra.jpg", link: "/pnra" },
  { name: "Shielding", bg: "/pic10.jpg", image: "/Sheilding.jpeg", link: "/shielding" },
  { name: "Radiation Safety", bg: "/pic11.jpg", image: "/Safety.jpg", link: "/radiationsafety" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sections.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const currentSection = sections[current];
  const handlePrev = () => setCurrent((prev) => (prev - 1 + sections.length) % sections.length);
  const handleNext = () => setCurrent((prev) => (prev + 1) % sections.length);

  return (
    <div className="min-h-screen font-body bg-gradient-to-br from-[#0a1323] to-[#1a253b] text-white overflow-hidden">
      {/* === 3D Curved QLED Frame (Header + Slideshow Inside) === */}
      <div className="relative w-full max-w-[98%] mx-auto mt-6 sm:mt-8">
        
        {/* Outer 3D Curved Metallic Frame */}
        <div className="p-[8px] sm:p-[10px] rounded-[32px] bg-gradient-to-b from-[#444b55] via-[#2c313a] to-[#0c0f14] shadow-[0_0_35px_rgba(0,0,0,0.9),inset_0_2px_5px_rgba(255,255,255,0.1)] relative overflow-hidden">

          {/* Subtle 3D Glow Outline */}
          <div className="absolute inset-0 rounded-[32px] pointer-events-none bg-gradient-to-br from-white/10 via-transparent to-white/5 blur-[3px]"></div>

          {/* Inner Curved Display Area */}
          <div className="relative rounded-[26px] overflow-hidden border border-[#1d2633]/80 shadow-[inset_0_8px_20px_rgba(255,255,255,0.07),inset_0_-10px_20px_rgba(0,0,0,0.4)] bg-[#0c1627]">
            
            {/* Glass Reflection Across Top */}
            <div className="absolute top-0 left-0 w-full h-[60px] bg-gradient-to-b from-white/15 via-white/5 to-transparent z-30 pointer-events-none rounded-t-[26px]"></div>

            {/* Inner soft curved highlight (mid display) */}
            <div className="absolute inset-x-0 top-1/3 h-[50%] bg-gradient-to-b from-transparent via-white/5 to-transparent blur-[40px]"></div>

            {/* Imaging Header (attached) */}
            <div className="relative z-20 border-b border-[#2a3648]/50 bg-gradient-to-r from-[#101a2b] via-[#13233c] to-[#101a2b] shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              <ImagingHeaderBar />
            </div>

            {/* === Slideshow Area === */}
            <div className="relative w-full h-[75vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
              {/* Background */}
              <div
                key={currentSection.bg}
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                style={{ backgroundImage: `url(${currentSection.bg})`, opacity: 1 }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>

              {/* Arrows */}
              <button
                onClick={handlePrev}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/15 hover:bg-white/25 text-white rounded-full p-2 sm:p-3 backdrop-blur-sm transition"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={30} />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/15 hover:bg-white/25 text-white rounded-full p-2 sm:p-3 backdrop-blur-sm transition"
                aria-label="Next Slide"
              >
                <ChevronRight size={30} />
              </button>

              {/* --- Content --- */}
              <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-16 text-center md:text-left">
                <div className="max-w-full md:max-w-lg mb-6 md:mb-0">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-heading font-extrabold text-[#aee7ff] mb-3 sm:mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                    {currentSection.name}
                  </h1>
                  <p className="text-gray-200 text-sm sm:text-base md:text-xl leading-relaxed mb-4 sm:mb-6 font-normal tracking-wide">
                    Discover excellence in{" "}
                    <span className="text-[#7bdff2] font-semibold">{currentSection.name}</span> — advanced QC
                    and radiation protection services you can trust.
                  </p>
                  <Link
                    to={currentSection.link}
                    className="inline-block bg-[#7bdff2] text-[#0b1a33] font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-[#aee7ff] transition-all duration-300 shadow-md text-sm sm:text-lg"
                  >
                    Learn More
                  </Link>
                </div>

                {/* Image */}
                <div className="w-full sm:w-[400px] md:w-[500px] h-[220px] sm:h-[300px] md:h-[350px] rounded-2xl overflow-hidden shadow-2xl border border-[#1e2a3d]/60 bg-white/10 backdrop-blur-md transition-transform duration-700 hover:scale-105">
                  <img
                    src={currentSection.image}
                    alt={currentSection.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Bottom glow for realism */}
            <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-white/10 to-transparent rounded-b-[26px] pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* === Services Below === */}
      <div className="mt-20">
        <Services />
      </div>
    </div>
  );
}
