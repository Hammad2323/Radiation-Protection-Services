import ImagingLayout from "../components/ImagingLayout";

export default function CT() {
  return (
    <ImagingLayout
      title="CT Navigation"
      links={[
        "Quality Control",
        "Protocol Optimization",
    
      ]}
      content={
        <div className="px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-8 max-w-3xl mx-auto font-sans">
      
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-700 mb-3 sm:mb-4 leading-snug">
            CT
          </h2>

        
          <p className="text-gray-800 text-sm sm:text-sm md:text-base leading-relaxed mb-3 sm:mb-4 tracking-wide font-light">
            Radiation Protection and Quality Control Services are provided by-experienced Medical physicists that will ensure that your facility will be in regulatory compliance and be creating the best possible images. Our team is trained and qualified to meet all of your CT needs, including:
          </p>

  

          <ul className="list-disc pl-5 sm:pl-6 text-gray-800 mb-3 sm:mb-4 space-y-1 text-sm sm:text-sm md:text-base leading-relaxed font-light">
            <li>Acceptance and Annual Testing</li>
            <li>Daily Weekly and Monthly QCs</li>
            <li>Establishing and Maintaining a Quality Control Program</li>
            <li>Compliance with PNRA Regulations</li>
          </ul>

         
        </div>
      }
    />
  );
}
