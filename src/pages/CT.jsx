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
        <>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">CT</h2>
          <p className="text-gray-800 leading-relaxed mb-3">
            The number of Computed Tomography (CT) exams performed in the United States has increased dramatically
            over the past 20 years. The increase in popularity has driven revolutionary advancements in technology
            and imaging techniques. Each new technology and imaging application imposes its own unique challenge to
            consistently obtain quality CT images.
          </p>

          <p className="text-gray-800 mb-3">
            Radiation Services, Inc.’s board-certified physicists will ensure that your facility will be in regulatory
            compliance and be creating the best possible images. Our team is trained and qualified to meet all of your
            CT needs, including:
          </p>

          <ul className="list-disc pl-6 text-gray-800 mb-3 space-y-1">
            <li>Acceptance and Annual Testing</li>
            <li>Accreditation</li>
            <li>Establishing and Maintaining a Quality Control Program</li>
            <li>Compliance with State Regulations and TJC/ACR guidelines</li>
          </ul>

          <p className="text-gray-800 mb-3">
            Our experienced team has worked extensively with all types of scanners including:
          </p>

          <ul className="list-disc pl-6 text-gray-800 mb-3 space-y-1">
            <li>GE, Philips, Siemens, Toshiba, and Hitachi CT Scanners</li>
            <li>Dental Cone Beam CT Scanners</li>
            <li>CT Simulators</li>
            <li>On-Board Imaging CBCT Systems</li>
          </ul>

          <p className="text-gray-800">
            Please{" "}
            <a
              href="/contact"
              className="text-blue-700 underline hover:text-blue-900 transition-colors duration-300"
            >
              contact us
            </a>{" "}
            today to learn more about how Radiation Services, Inc. can help you.
          </p>
        </>
      }
    />
  );
}
