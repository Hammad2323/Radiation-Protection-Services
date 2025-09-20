// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="bg-white shadow">
      {/* --- Top Bar --- */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2 border-b border-gray-300">
        <h1 className="text-lg font-bold">Radiation Protection Services</h1>
        <div className="flex gap-8">  {/* gap between contact/account */}
          <Link to="/contact" className="text-blue-600 hover:underline">
            Contact Us
          </Link>
          <Link to="/account" className="text-blue-600 hover:underline">
            Your Account
          </Link>
        </div>
      </div>

      {/* --- Nav Bar --- */}
      <nav className="max-w-7xl mx-auto px-6 py-3">
        <ul className="flex gap-10 text-base font-medium justify-center md:justify-start">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline">
              Our Services
            </Link>
          </li>
          <li>
            <Link to="/ionising-radiation" className="hover:underline">
              Ionising Radiation
            </Link>
          </li>
          <li>
            <Link to="/customers" className="hover:underline">
              Our Customers
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/glossary" className="hover:underline">
              Glossary
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
