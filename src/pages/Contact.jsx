// src/pages/Contact.jsx
import React, { useState } from "react";

const serviceOptions = [
  "PNRA Consultation",
  "QUALITY CONTROL TEST SERVICES",
  "Radiation Safety Officer (RPO) Training",
  "Structure Shielding Calculations (Safety Assessment)",
  "CALIBRATION",
  "TLD / Dosimeter Services",
  "X-ray Room Lead Lining",
];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState([]);

  const handleCheckboxChange = (option) => {
    setSelectedServices((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="bg-secondary min-h-screen text-gray-900 font-sans">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-blue-700">
          Contact Us
        </h1>

        {/* Form */}
        <form className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 space-y-8">
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-semibold mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-semibold mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-xl px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Facility Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Inquiry Options */}
          <div>
            <label className="block text-sm font-semibold mb-4">
              Your inquiries about: <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {serviceOptions.map((option) => (
                <label
                  key={option}
                  className="flex items-center space-x-3 bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg"
                >
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold mb-2">
              Message (optional)
            </label>
            <textarea
              rows="5"
              className="w-full border border-gray-300 rounded-xl px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Kindly describe your inquiry here..."
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-2xl hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
