import ImagingLayout from "../components/ImagingLayout";


export default function MRI() {
  return (
    <ImagingLayout
      title="MRI Navigation"
      links={[
        "Accreditation",
        "Quality Control",
        "MRI Safety",
        "FAQ",
        "TJC Rules for CT, MRI, SPECT & PET effective 01 July 2015",
      ]}
      content={
        <>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">MRI</h2>
          <p className="text-gray-800 leading-relaxed mb-3">
            Magnetic Resonance Imaging (MRI) has revolutionized diagnostic imaging, providing unmatched soft tissue contrast and diagnostic accuracy. However, MRI systems require precise calibration and safety protocols to ensure both image quality and patient safety.
          </p>
          <p className="text-gray-800 mb-3">
            Our expert physicists at Radiation Services, Inc. provide complete MRI testing, safety audits, and accreditation support to ensure your systems meet all standards and regulatory compliance.
          </p>
          <p className="text-gray-800">
            Please <a href="/contact" className="text-blue-700 underline hover:text-blue-900">contact us</a> to learn more about our MRI quality and safety services.
          </p>
        </>
      }
    />
  );
}
