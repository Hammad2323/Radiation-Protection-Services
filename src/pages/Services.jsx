// src/pages/Services.jsx
import {
  FaUserShield,
  FaTools,
  FaChalkboardTeacher,
  FaShieldAlt,
  FaBalanceScale,
  FaIdBadge,
  FaClinicMedical,
} from "react-icons/fa";

const servicesData = [
  {
    icon: <FaUserShield />,
    title: "PNRA Consultation",
    description: `Registration And Renewal:
We assist in registering your organization and X-ray machines or radiation generator sources.

License Acquisition:
We help obtain the PNRA “License to Conduct Regulated Activities” valid for three years.`,
  },
  {
    icon: <FaTools />,
    title: "QUALITY CONTROL TEST SERVICES",
    description:
      "Testing new radiation generation equipment and routine QC tests to ensure conformance with manufacturer’s specifications. Tests are performed by an expert medical physicist for all kinds of X-ray equipment.",
  },
  {
    icon: <FaChalkboardTeacher />,
    title: "Radiation Safety Officer (RPO) Training",
    description:
      "Radiation safety training provides up-to-date information about radiation protection designed according to the requirements of FANR. Delivered for individuals, clinics, or hospitals.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Structure Shielding Calculations (Safety Assessment)",
    description:
      "Comprehensive safety assessment and shielding calculations performed by a competent medical physicist and radiation protection expert to ensure occupational and public safety.",
  },
  {
    icon: <FaBalanceScale />,
    title: "CALIBRATION",
    description:
      "Ensures medical equipment is accurate and calibrated to industry standards. Our technicians perform tests and adjustments for optimal functioning.",
  },
  {
    icon: <FaIdBadge />,
    title: "TLD / Dosimeter Services",
    description:
      "High-quality Thermoluminescent Dosimeter (TLD) and dosimetry services for reliable radiation monitoring and safety compliance for healthcare facilities.",
  },
  {
    icon: <FaClinicMedical />,
    title: "X-ray Room Lead Lining",
    description:
      "Compliance with regulatory standards for radiation safety. Protection against radiation exposure for staff and patients. Includes wall/ceiling/floor shielding and lead-lined doors/windows.",
  },
];

export default function Services() {
  return (
    <div className="bg-secondary min-h-screen text-gray-900">
      {/* Top Section */}
      <div className="bg-gradient-to-r from-blue-700 via-gray-500 to-blue-600 text-white py-16 shadow-md">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl font-extrabold">
            Services We Provide
          </h1>
          <p className="mt-3 text-sm md:text-base text-gray-200">
            Professional radiation protection services, consulting, training and
            shielding solutions.
          </p>
        </div>
      </div>

      {/* Grid of Services */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 py-12">
        {/* First 6 cards in grid (2 per row) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {servicesData.slice(0, 6).map((svc, idx) => (
            <article
              key={idx}
              className="bg-white rounded-lg border border-gray-200 shadow hover:shadow-xl p-6 flex flex-col text-center transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex justify-center">
                <div className="bg-blue-50 p-4 rounded-full inline-flex items-center justify-center text-blue-600 text-3xl">
                  {svc.icon}
                </div>
              </div>
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mt-4">
                {svc.title}
              </h2>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                {svc.description}
              </p>
            </article>
          ))}
        </div>

        {/* Last single card centered */}
        <div className="mt-10 flex justify-center">
          <article className="bg-white rounded-lg border border-gray-200 shadow hover:shadow-xl p-6 w-full sm:w-1/2 md:w-1/3 text-center transition-transform duration-200 hover:-translate-y-1">
            <div className="flex justify-center">
              <div className="bg-blue-50 p-4 rounded-full inline-flex items-center justify-center text-blue-600 text-3xl">
                {servicesData[6].icon}
              </div>
            </div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-900 mt-4">
              {servicesData[6].title}
            </h2>
            <p className="mt-3 text-sm text-gray-700 leading-relaxed whitespace-pre-line">
              {servicesData[6].description}
            </p>
          </article>
        </div>
      </main>
    </div>
  );
}
