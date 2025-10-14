import ImagingLayout from "../components/ImagingLayout";


export default function Mammography() {
  return (
    <ImagingLayout
      title="Mammography Navigation"
      links={[
        "Accreditation",
        "Quality Control",
        "Stereotactic Breast Biopsy",
        "FAQ",
        "Risk",
        "Regulations",
      ]}
      content={
        <>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Mammography</h2>
          <p className="text-gray-800 leading-relaxed mb-3">
            Mammography is a vital component in the early detection and staging of breast cancer. Radiation Services, Inc. has multiple licensed and board-certified physicists available to help you with all your mammography needs.
          </p>
          <ul className="list-disc pl-6 text-gray-800 mb-3 space-y-1">
            <li>Acceptance Testing</li>
            <li>Annual Evaluations</li>
            <li>Evaluations Following Major Repair/Upgrade</li>
            <li>Quarterly QC Evaluations</li>
            <li>Phone/Email Support</li>
            <li>FDA/ACR Guidance</li>
          </ul>
          <p className="text-gray-800 mb-3">
            We evaluate over 200 units annually including Film Screen, FFDM, CR, DBT, and SBB systems.
          </p>
          <p className="text-gray-800">
            Please <a href="/contact" className="text-blue-700 underline hover:text-blue-900">contact us</a> today to learn more about how Radiation Services, Inc. can help you.
          </p>
        </>
      }
    />
  );
}
