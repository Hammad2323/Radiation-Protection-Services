import ImagingLayout from "../components/ImagingLayout";


export default function RadiationSafety() {
  return (
    <ImagingLayout
      title="Radiation Safety Navigation"
      links={[
        "Radiation Safety Training for Fluoroscopy Operators",
        "ACR Endorses AAPM Patient Shielding Policy",
        "AAPM Patient Shielding in Radiology Policy",
        "Personnel Protection during Fluoroscopic Procedures",
        "IAEA Webinar: Patient Radiation Management in Interventional Fluoroscopy",
      ]}
      content={
        <>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Radiation Safety</h2>
          <p className="text-gray-800 leading-relaxed mb-3">
            (Detailed text content can be added here later.) Radiation Services, Inc. offers comprehensive radiation safety consultation, personnel protection guidance, and training for radiology professionals.
          </p>
          <p className="text-gray-800">
            Please <a href="/contact" className="text-blue-700 underline hover:text-blue-900">contact us</a> to learn more about our safety training and compliance support.
          </p>
        </>
      }
    />
  );
}
