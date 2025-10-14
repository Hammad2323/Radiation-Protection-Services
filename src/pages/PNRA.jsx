import ImagingLayout from "../components/ImagingLayout";

export default function PNRA() {
  return (
    <ImagingLayout
      title="PNRA Navigation"
      links={[
        "Accreditation",
        "Quality Control",
        "Major Repair",
        "Protocol Optimization",
        "FAQ",
      ]}
      content={
        <div className="px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-8 max-w-3xl mx-auto font-sans">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-700 mb-3 sm:mb-4 leading-snug">
            PNRA
          </h2>

          <p className="text-gray-800 text-sm sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 tracking-wide font-light">
            Pakistan Nuclear Regulatory Authority (PNRA) compliance and inspection services to ensure radiation safety
            standards in your facility.
          </p>

          <ul className="list-disc pl-5 sm:pl-6 text-gray-800 mb-3 sm:mb-4 space-y-1 text-sm sm:text-sm md:text-base leading-relaxed font-light">
            <li>Compliance Inspections</li>
            <li>Documentation & Accreditation</li>
            <li>Staff Training & QA</li>
          </ul>

          <p className="text-gray-800 text-sm sm:text-sm md:text-base leading-relaxed tracking-wide font-light">
            Please{" "}
            <a
              href="/contact"
              className="text-blue-700 underline hover:text-blue-900 font-medium transition-colors duration-300"
            >
              contact us
            </a>{" "}
            for assistance regarding PNRA compliance.
          </p>
        </div>
      }
    />
  );
}
