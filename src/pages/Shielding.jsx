import ImagingLayout from "../components/ImagingLayout";


export default function Shielding() {
  return (
    <ImagingLayout
      title="Shielding Navigation"
      links={[
        "Radiation Shielding Requirements",
        "Lead-Lined Barriers",
        "Window & Door Shielding",
        "Blueprint & Room Design",
        "Regulatory References",
      ]}
      content={
        <>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Shielding</h2>
          <p className="text-gray-800 leading-relaxed mb-3">
            Radiation Services Inc. offers assistance to facilities constructing or modifying diagnostic imaging rooms using ionizing radiation. Our physicists generate precise shielding design plans using regulatory and NCRP guidance.
          </p>
          <p className="text-gray-800">
            Please <a href="/contact" className="text-blue-700 underline hover:text-blue-900">contact us</a> today to learn more about how Radiation Services, Inc. can help you.
          </p>
        </>
      }
    />
  );
}
