import React from "react";
import "./ExperienceAccordion.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { experience } from "../../Data/Data";
import Arkhitech from "../../assets/images/Arkhitech.png"
import NGEN from "../../assets/images/NGEN.png"


function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <main className="experience-container experience-cards">
        <ExperienceCard
          experience={experience.experiences[0]}
          image={Arkhitech}
          theme={theme}
        />
        <ExperienceCard
          experience={experience.experiences[1]}
          image={NGEN}
          theme={theme}
        />
      </main>
    </div>
  );
}

export default ExperienceAccordion;
