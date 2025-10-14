import ImagingLayout from "../components/ImagingLayout";

export default function NuclearMed() {
  return (
    <ImagingLayout
      title="Nuclear Med/PET Navigation"
      links={[
        "Accreditation",
        "Quality Control",
        "Protocol Optimization",
        "FAQ",
      ]}
      content={
        <div className="px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-8 max-w-3xl mx-auto font-sans">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-700 mb-3 sm:mb-4 leading-snug">
            Nuclear Med / PET
          </h2>

          <p className="text-gray-800 text-sm sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 tracking-wide font-light">
            Nuclear Medicine and PET imaging require strict QA and safety measures. Our team ensures compliance and
            high-quality imaging for accurate diagnostics.
          </p>

          <ul className="list-disc pl-5 sm:pl-6 text-gray-800 mb-3 sm:mb-4 space-y-1 text-sm sm:text-sm md:text-base leading-relaxed font-light">
            <li>Acceptance & Annual Testing</li>
            <li>Protocol Optimization</li>
            <li>Regulatory Compliance</li>
          </ul>

          <p className="text-gray-800 text-sm sm:text-sm md:text-base leading-relaxed tracking-wide font-light">
            Please{" "}
            <a
              href="/contact"
              className="text-blue-700 underline hover:text-blue-900 font-medium transition-colors duration-300"
            >
              contact us
            </a>{" "}
            for Nuclear Med/PET services.
          </p>
        </div>
      }
    />
  );
}
