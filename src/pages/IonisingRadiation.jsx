import React from "react";

const IonisingRadiation = () => (
  <div className="min-h-screen bg-white text-gray-900 px-6 py-12 font-sans max-w-5xl mx-auto">
    
   
    <div className="flex items-center mb-5">
      <img
        src="/1.jpeg"
        alt="Ionising Radiation Logo"
        className="h-20 w-12 mr-4 object-contain"
      />
      <h1 className="text-4xl font-extrabold">Ionising Radiation</h1>
    </div>

    <div className="space-y-6 text-base sm:text-lg leading-relaxed">
      <p>
        Ionizing radiation is a type of energy released by atoms that travels in the form of electromagnetic waves (gamma or X-rays) or particles (neutrons, beta or alpha). The spontaneous disintegration of atoms is called radioactivity, and the excess energy emitted is a form of ionizing radiation. Unstable elements which disintegrate and emit ionizing radiation are called radionuclides.
      </p>

      <p>
        All radionuclides are uniquely identified by the type of radiation they emit, the energy of the radiation, and their half-life. The activity — used as a measure of the amount of a radionuclide present — is expressed in a unit called the becquerel (Bq): one becquerel is one disintegration per second. The half-life is the time required for the activity of a radionuclide to decrease by decay to half of its initial value. The half-life of a radioactive element is the time that it takes for one half of its atoms to disintegrate. This can range from a mere fraction of a second to millions of years (e.g. iodine-131 has a half-life of 8 days while carbon-14 has a half-life of 5730 years).
      </p>

      <h2 className="text-2xl font-semibold mt-6">Radiation sources</h2>
      <p>
        People are exposed to natural radiation sources as well as human-made sources on a daily basis. Natural radiation comes from many sources including more than 60 naturally-occurring radioactive materials found in soil, water and air. Radon, a naturally-occurring gas, emanates from rock and soil and is the main source of natural radiation. Every day, people inhale and ingest radionuclides from air, food and water.
      </p>

      <p>
        People are also exposed to natural radiation from cosmic rays, particularly at high altitude. On average, 80% of the annual dose of background radiation that a person receives is due to naturally occurring terrestrial and cosmic radiation sources. Background radiation levels vary geographically due to geological differences. Exposure in certain areas can be more than 200 times higher than the global average.
      </p>

      <p>
        Exposure to radiation also comes from human-made sources ranging from nuclear power generation to medical uses of radiation for diagnosis or treatment. Today, the most common human-made sources of ionizing radiation are medical devices, including x-ray machines and Computed Tomography (CT) scanners.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Exposure to ionizing radiation</h2>
      <p>
        People can be exposed to ionizing radiation under different circumstances, at home or in public places (public exposures), at their workplaces (occupational exposures), or in a medical setting (medical exposures). Exposure to radiation may occur through internal or external pathways.
      </p>

      <p>
        Internal exposure to ionizing radiation occurs when a radionuclide is inhaled, ingested or otherwise enters into the bloodstream (for example, by injection or through wounds). Internal exposure stops when the radionuclide is eliminated from the body, either spontaneously (such as through excreta) or as a result of a treatment.
      </p>

      <p>
        External exposure may occur when airborne radioactive material (such as dust, liquid, or aerosols) is deposited on skin or clothes. This type of radioactive material can often be removed from the body by washing. Exposure to ionizing radiation can also result from irradiation from an external source, such as medical radiation exposure from x-rays. External irradiation stops when the radiation source is shielded or when the person moves outside the radiation field.
      </p>

      <p>
        Exposure to ionizing radiation can be classified for radiation protection purposes into three exposure situations, i.e. planned, existing and emergency situations. Planned exposure situations result from the deliberate introduction and operation of radiation sources with specific purposes, as is the case with the medical use of radiation for diagnosis or treatment of patients, or the use of radiation in industry or research. Existing exposure occurs where radiation already exists and a decision on control must be taken – for example, exposure to radon in homes or workplaces or exposure to natural background radiation from the environment. Emergency exposure situations result from unexpected events requiring prompt response, such as nuclear accidents or malicious acts.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Medical use of radiation</h2>
      <p>
        Medical use of radiation accounts for 98 % of the population dose contribution from all human-made sources, and represents 20% of the total population exposure. Annually worldwide, more than 4200 million diagnostic radiology examinations are performed, 40 million nuclear medicine procedures are carried out, and 8.5 million radiotherapy treatments are given.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Health effects of ionizing radiation</h2>
      <p>
        Radiation damage to tissue and/or organs depends on the dose of radiation received, or the absorbed dose which is expressed in a unit called the gray (Gy). The potential damage from an absorbed dose depends on the type of radiation and the sensitivity of the different tissues and organs.
      </p>

      <p>
        The effective dose is used to measure ionizing radiation in terms of the potential for causing harm. The sievert (Sv) is the unit of effective dose that takes into account the type of radiation and sensitivity of tissues and organs. In addition to the amount of radiation (dose), the rate at which the dose is delivered (dose rate), described in microsieverts per hour (μSv/hour) or millisievert per year (mSv/year), is an important parameter.
      </p>

      <p>
        Beyond certain thresholds, radiation can impair the functioning of tissues and/or organs and can produce acute effects such as skin redness, hair loss, radiation burns, or acute radiation syndrome. These effects are more severe at higher doses and higher dose rates. For instance, the dose threshold for acute radiation syndrome is about 1 Sv (1000 mSv).
      </p>

      <p>
        If the radiation dose is low and/or it is delivered over a long period of time (low dose rate), the risk is substantially low because there is a greater likelihood of repairing the damage. There is still a risk of long-term effects such as cataract or cancer, however, that may appear years or even decades later. Effects of this type will not always occur, but their likelihood is proportional to the radiation dose. This risk is higher for children and adolescents as they are significantly more sensitive to radiation exposure than adults.
      </p>

      <p>
        Epidemiological studies on populations exposed to radiation, such as the survivors of the atomic bombings or radiotherapy patients, showed a significant increase of cancer risk at doses above 100 mSv. More recently, some epidemiological studies in individuals exposed to medical exposure during childhood (paediatric CT) have suggested that cancer risk may increase even at lower doses (between 50-100 mSv).
      </p>

      <p>
        Prenatal exposure to ionizing radiation may induce brain damage in foetuses following an acute dose exceeding 100 mSv between weeks 8-15 of pregnancy and 200 mSv between weeks 16-25 of pregnancy. Before week 8 or after week 25 of pregnancy human studies have not shown radiation risk to fetal brain development. Epidemiological studies indicate that the cancer risk after fetal exposure to radiation is similar to the risk after exposure in early childhood.
      </p>
    </div>
  </div>
);

export default IonisingRadiation;
