import React from "react";

const IonisingRadiation = () => (
  <div className="min-h-screen bg-white text-gray-900 px-4 sm:px-6 py-8 sm:py-12 font-sans max-w-5xl mx-auto">

  
    <div className="flex items-center gap-3 mb-4 whitespace-nowrap">
      <img
        src="/1.jpeg"
        alt="Ionising Radiation Logo"
        className="h-12 w-8 sm:h-20 sm:w-12 object-contain"
      />
      <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight">
        Ionising Radiation
      </h1>
    </div>


    <div className="space-y-4 sm:space-y-6 text-sm sm:text-lg leading-relaxed">
      <p>
        Ionizing radiation is a type of energy released by atoms that travels in the form of electromagnetic waves (gamma or X-rays) or particles (neutrons, beta or alpha). The spontaneous disintegration of atoms is called radioactivity, and the excess energy emitted is a form of ionizing radiation. Unstable elements which disintegrate and emit ionizing radiation are called radionuclides.
      </p>

      <p>
        All radionuclides are uniquely identified by the type of radiation they emit, the energy of the radiation, and their half-life. The activity — used as a measure of the amount of a radionuclide present — is expressed in a unit called the becquerel (Bq): one becquerel is one disintegration per second.
      </p>

      <h2 className="text-lg sm:text-2xl font-semibold mt-6">
        Radiation sources
      </h2>

      <p>
        People are exposed to natural radiation sources as well as human-made sources on a daily basis. Natural radiation comes from many sources including more than 60 naturally-occurring radioactive materials found in soil, water and air.
      </p>

      <p>
        People are also exposed to natural radiation from cosmic rays, particularly at high altitude. Background radiation levels vary geographically due to geological differences.
      </p>

      <p>
        Exposure to radiation also comes from human-made sources ranging from nuclear power generation to medical uses of radiation for diagnosis or treatment.
      </p>

      <h2 className="text-lg sm:text-2xl font-semibold mt-6">
        Exposure to ionizing radiation
      </h2>

      <p>
        People can be exposed to ionizing radiation under different circumstances, at home, at workplaces, or in medical settings.
      </p>

      <p>
        Internal exposure occurs when a radionuclide is inhaled, ingested or enters the bloodstream.
      </p>

      <p>
        External exposure may occur when radioactive material is deposited on skin or clothes or from an external source such as X-rays.
      </p>

      <h2 className="text-lg sm:text-2xl font-semibold mt-6">
        Medical use of radiation
      </h2>

      <p>
        Medical use of radiation accounts for 98% of the population dose contribution from all human-made sources.
      </p>

      <h2 className="text-lg sm:text-2xl font-semibold mt-6">
        Health effects of ionizing radiation
      </h2>

      <p>
        Radiation damage depends on the absorbed dose measured in gray (Gy).
      </p>

      <p>
        The effective dose is measured in sieverts (Sv) and accounts for radiation type and tissue sensitivity.
      </p>

      <p>
        High doses can cause acute effects, while low doses may increase long-term cancer risk.
      </p>

      <p>
        Children are more sensitive to radiation exposure than adults.
      </p>

      <p>
        Prenatal exposure can increase cancer risk similar to early childhood exposure.
      </p>
    </div>
  </div>
);

export default IonisingRadiation;
