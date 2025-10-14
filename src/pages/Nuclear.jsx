import ImagingLayout from "../components/ImagingLayout";

export default function Nuclear() {
  return (
    <ImagingLayout
      title="Nuclear Medicine / PET Navigation"
      links={[
        "Accreditation",
        "Nuclear Medicine Performance Tests",
        "FAQ",
        "TJC Rules for CT, MRI, SPECT & PET effective 01 July 2015",
      ]}
      content={
        <>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Nuclear Medicine / PET</h2>
          <p className="text-gray-800 leading-relaxed mb-3">
            Radiation Services can assist you with a wide range of Nuclear Medicine and PET services for all of your accreditation, hot lab, and regulatory needs.
          </p>
          <ul className="list-disc pl-6 text-gray-800 mb-3 space-y-1">
            <li>Accreditation testing of Planar, SPECT & PET cameras</li>
            <li>Hot Lab services</li>
            <li>Regulatory support services</li>
            <li>Email and phone support</li>
          </ul>
          <p className="text-gray-800">
            Please <a href="/contact" className="text-blue-700 underline hover:text-blue-900">contact us</a> today to learn more about how Radiation Services, Inc. can help you.
          </p>
        </>
      }
    />
  );
}
