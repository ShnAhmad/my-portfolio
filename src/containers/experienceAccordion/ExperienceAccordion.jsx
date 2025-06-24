import React from "react";
import "./ExperienceAccordion.css";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { experience } from "../../Data/Data";


function ExperienceAccordion(props) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <main className="experience-container experience-cards">
        {experience.experiences.map((experience) => {
          return (
            <ExperienceCard
              experience={experience}
              theme={theme}
            />
          )
        })}
      </main>
    </div>
  );
}

export default ExperienceAccordion;
