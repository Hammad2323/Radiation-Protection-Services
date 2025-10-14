import ImagingLayout from "../components/ImagingLayout";

export default function MRI() {
  return (
    <ImagingLayout
      title="MRI Navigation"
      links={[
        "Accreditation",
        "Quality Control",
        "Major Repair",
        "Protocol Optimization",
        "FAQ",
        "TJC Rules for CT, MRI, SPECT & PET effective 01 July 2015",
        "XR-29 Compliance Validation",
        "GE",
        "Philips",
        "Siemens",
        "Hitachi",
      ]}
      content={
        <div className="px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-8 max-w-3xl mx-auto font-sans">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-700 mb-3 sm:mb-4 leading-snug">
            MRI
          </h2>

          <p className="text-gray-800 text-sm sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 tracking-wide font-light">
            Magnetic Resonance Imaging (MRI) is a powerful diagnostic tool used for imaging soft tissues. Our experts
            ensure that all MRI systems are compliant with quality standards and provide accurate, reliable imaging.
          </p>

          <p className="text-gray-800 text-sm sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed tracking-wide font-light">
            Our team provides:
          </p>

          <ul className="list-disc pl-5 sm:pl-6 text-gray-800 mb-3 sm:mb-4 space-y-1 text-sm sm:text-sm md:text-base leading-relaxed font-light">
            <li>Acceptance and Annual Testing</li>
            <li>Accreditation Support</li>
            <li>Quality Control Program Establishment</li>
            <li>Protocol Optimization</li>
          </ul>

          <p className="text-gray-800 text-sm sm:text-sm md:text-base leading-relaxed tracking-wide font-light">
            Please{" "}
            <a
              href="/contact"
              className="text-blue-700 underline hover:text-blue-900 font-medium transition-colors duration-300"
            >
              contact us
            </a>{" "}
            for assistance or questions regarding MRI systems.
          </p>
        </div>
      }
    />
  );
}
