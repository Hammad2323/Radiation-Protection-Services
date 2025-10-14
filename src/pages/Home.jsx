import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ImagingHeaderBar from "../components/ImagingHeaderBar"; // <-- add this import

const sections = [
  { name: "CT", bg: "/pic4.jpg", image: "/CT.jpeg", link: "/ct" },
  { name: "MRI", bg: "/pic5.jpg", image: "/MRI.jpeg", link: "/mri" },
  { name: "Mammography", bg: "/pic6.jpg", image: "/Mammography.jpg", link: "/mammography" },
  { name: "Nuclear Med/PET", bg: "/pic8.jpg", image: "/Med.jpeg", link: "/nuclear" },
  { name: "Radiography", bg: "/pic9.jpg", image: "/Radiography.jpeg", link: "/radiography" },
  { name: "Shielding", bg: "/pic10.jpg", image: "/Sheilding.jpeg", link: "/shielding" },
  { name: "Radiation Safety", bg: "/pic11.jpg", image: "/Safety.jpg", link: "/radiationsafety" },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sections.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSection = sections[current];

  const handlePrev = () => setCurrent((prev) => (prev - 1 + sections.length) % sections.length);
  const handleNext = () => setCurrent((prev) => (prev + 1) % sections.length);

  return (
    <div className="min-h-screen font-body bg-[#0b1a33] text-white relative overflow-hidden">
      {/* --- Shared Imaging Header --- */}
      <ImagingHeaderBar />

      {/* --- Background Slideshow --- */}
      <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
        <div
          key={currentSection.bg}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
          style={{ backgroundImage: `url(${currentSection.bg})`, opacity: 1 }}
        ></div>
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 backdrop-blur-sm transition"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white rounded-full p-3 backdrop-blur-sm transition"
          aria-label="Next Slide"
        >
          <ChevronRight size={30} />
        </button>

        {/* --- Content Layer --- */}
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-8 md:px-16">
          <div className="max-w-lg text-left mb-10 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-yellow-400 mb-4 drop-shadow-[0_0_10px_rgba(255,255,150,0.4)]">
              {currentSection.name}
            </h1>
            <p className="text-gray-200 text-lg md:text-xl leading-relaxed mb-6 font-medium tracking-wide">
              Explore our excellence and expertise in{" "}
              <span className="text-yellow-300 font-semibold">{currentSection.name}</span> — delivering trusted
              radiation protection and QC services.
            </p>
            <Link
              to={currentSection.link}
              className="inline-block bg-yellow-400 text-black font-semibold px-8 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg text-lg"
            >
              Learn More
            </Link>
          </div>

          <div className="hidden md:block ml-28 w-[520px] h-[360px] rounded-3xl overflow-hidden shadow-2xl border border-yellow-400/40 bg-white/10 backdrop-blur-md transition-transform duration-700 hover:scale-105">
            <img
              src={currentSection.image}
              alt={currentSection.name}
              className="w-full h-full object-cover opacity-95"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
