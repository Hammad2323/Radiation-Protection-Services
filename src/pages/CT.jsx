import ImagingLayout from "../components/ImagingLayout";

export default function CT() {
  return (
    <ImagingLayout
      title="CT Navigation"
      links={[
        "Accreditation",
        "Quality Control",
        "Major Repair",
        "Protocol Optimization",
        "FAQ",
        "TJC Rules for CT, MRI, SPECT & PET effective 01 July 2015",
        "XR-29 Compliance Validation",
        "GE",
        "Hitachi",
        "Neurologica",
        "Philips",
        "Siemens",
        "Toshiba",
      ]}
      content={
        <div className="px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-8 max-w-3xl mx-auto font-sans">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-700 mb-3 sm:mb-4 leading-snug">
            CT
          </h2>

          {/* Intro Paragraph */}
          <p className="text-gray-800 text-sm sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 tracking-wide font-light">
            The number of Computed Tomography (CT) exams performed in the United States has increased dramatically
            over the past 20 years. The increase in popularity has driven revolutionary advancements in technology
            and imaging techniques. Each new technology and imaging application imposes its own unique challenge to
            consistently obtain quality CT images.
          </p>

          {/* Services Paragraph */}
          <p className="text-gray-800 text-sm sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed tracking-wide font-light">
            Radiation Services, Inc.’s board-certified physicists will ensure that your facility will be in regulatory
            compliance and be creating the best possible images. Our team is trained and qualified to meet all of your
            CT needs, including:
          </p>

          {/* List 1 */}
          <ul className="list-disc pl-5 sm:pl-6 text-gray-800 mb-3 sm:mb-4 space-y-1 text-sm sm:text-sm md:text-base leading-relaxed font-light">
            <li>Acceptance and Annual Testing</li>
            <li>Accreditation</li>
            <li>Establishing and Maintaining a Quality Control Program</li>
            <li>Compliance with State Regulations and TJC/ACR guidelines</li>
          </ul>

          {/* Experienced Team Paragraph */}
          <p className="text-gray-800 text-sm sm:text-sm md:text-base mb-3 sm:mb-4 leading-relaxed tracking-wide font-light">
            Our experienced team has worked extensively with all types of scanners including:
          </p>

          {/* List 2 */}
          <ul className="list-disc pl-5 sm:pl-6 text-gray-800 mb-3 sm:mb-4 space-y-1 text-sm sm:text-sm md:text-base leading-relaxed font-light">
            <li>GE, Philips, Siemens, Toshiba, and Hitachi CT Scanners</li>
            <li>Dental Cone Beam CT Scanners</li>
            <li>CT Simulators</li>
            <li>On-Board Imaging CBCT Systems</li>
          </ul>

          {/* Contact Paragraph */}
          <p className="text-gray-800 text-sm sm:text-sm md:text-base leading-relaxed tracking-wide font-light">
            Please{" "}
            <a
              href="/contact"
              className="text-blue-700 underline hover:text-blue-900 font-medium transition-colors duration-300"
            >
              contact us
            </a>{" "}
            today to learn more about how Radiation Services, Inc. can help you.
          </p>
        </div>
      }
    />
  );
}
