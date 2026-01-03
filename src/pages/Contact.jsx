// src/pages/Contact.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";

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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleCheckboxChange = (option) => {
    setSelectedServices((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      alert("Please select at least one service.");
      return;
    }

    // Prepare template parameters for EmailJS
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      services: selectedServices.join(", "), // will appear as comma-separated in email
      message: formData.message,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_himvm0b", // replace with your EmailJS service ID
        "template_7f9tede", // replace with your EmailJS template ID
        templateParams,
        "_SyqWxXqF8NFqTYFE" // replace with your EmailJS public key
      )
      .then(
        (response) => {
          alert("Your inquiry has been sent successfully!");
          // Reset form
          setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
          setSelectedServices([]);
        },
        (error) => {
          console.error(error);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  const socials = [
    { icon: <FaEnvelope size={22} />, link: "mailto:rad.protect.qc@email.com", color: "text-cyan-400" },
    { icon: <FaWhatsapp size={22} />, link: "https://wa.me/923009519881", color: "text-green-500" },
    { icon: <FaFacebookF size={22} />, link: "https://www.facebook.com/profile.php?id=61582009409975", color: "text-blue-600" },
    { icon: <FaLinkedinIn size={22} />, link: "https://www.linkedin.com/in/radiation-protection-051738389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", color: "text-blue-400" },
  ];

  return (
    <div className="bg-secondary min-h-screen text-gray-900 font-sans">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-blue-700">
          Contact Us
        </h1>

        {/* Form */}
        <form className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 space-y-8" onSubmit={handleSubmit}>
          {/* Basic Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-semibold mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
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
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
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
                name="email"
                value={formData.email}
                onChange={handleChange}
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
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl px-5 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
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
              name="message"
              value={formData.message}
              onChange={handleChange}
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

        {/* Social Links */}
        <div className="mt-12 flex justify-center gap-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-transform duration-300 hover:scale-110 ${social.color}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
