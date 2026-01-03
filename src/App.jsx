import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import footer

// === Main Pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import IonisingRadiation from "./pages/IonisingRadiation";
import Customers from "./pages/Customers";
import About from "./pages/About";
import Feedback from "./pages/Feedback";
import Products from "./pages/Products";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

// === Imaging & Radiation Pages
import CT from "./pages/CT";
import MRI from "./pages/MRI";
import Mammography from "./pages/Mammography";
import PNRA from "./pages/PNRA";
import Nuclear from "./pages/Nuclear";
import Radiography from "./pages/Radiography";
import Shielding from "./pages/Shielding";
import RadiationSafety from "./pages/RadiationSafety";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div className="bg-[#f7f9fc] text-gray-800 min-h-screen flex flex-col">
      <Navbar />
      <ScrollToTop />
      
      <main className="flex-grow">
        <Routes>
          {/* === Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/ionising-radiation" element={<IonisingRadiation />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/products" element={<Products />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />

          {/* === Imaging & Radiation Pages */}
          <Route path="/ct" element={<CT />} />
          <Route path="/mri" element={<MRI />} />
          <Route path="/mammography" element={<Mammography />} />
          <Route path="/pnra" element={<PNRA />} />
          <Route path="/nuclear" element={<Nuclear />} />
          <Route path="/radiography" element={<Radiography />} />
          <Route path="/shielding" element={<Shielding />} />
          <Route path="/radiationsafety" element={<RadiationSafety />} />
        </Routes>
      </main>

      {/* Footer always visible at the bottom */}
      <Footer />
    </div>
  );
}

export default App;
