import ImagingLayout from "../components/ImagingLayout";


export default function Radiography() {
  return (
    <ImagingLayout
      title="Radiography / Fluoroscopy Navigation"
      links={[
        "Apron Testing",
        "Surgery Centers",
        "Radiography – Fluoroscopy FAQ",
        "TJC Rules for Fluoroscopy (and CT) effective 01 January 2019",
      ]}
      content={
        <>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Radiography / Fluoroscopy</h2>
          <p className="text-gray-800 leading-relaxed mb-3">
            Radiation Services, Inc. offers medical physics services for Radiographic / Fluoroscopic equipment to ensure proper performance and regulatory compliance.
          </p>
          <p className="text-gray-800 mb-3">
            We also provide integrity testing of personal protective devices and full equipment evaluations to meet The Joint Commission (TJC) requirements.
          </p>
          <p className="text-gray-800">
            Please <a href="/contact" className="text-blue-700 underline hover:text-blue-900">contact us</a> today to learn more about how Radiation Services, Inc. can help you.
          </p>
        </>
      }
    />
  );
}
