import React from "react";
import "./Experience.css";
import ExperienceImg from "./ExperienceImg.jsx";
import { Fade } from "react-awesome-reveal";
import { experience } from "../../Data/Data.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Header from "../../components/header/Header.jsx";
import ExperienceAccordion from "../../components/experienceAccordion/ExperienceAccordion.jsx";

function Experience(props) {
  const theme = props.theme;
  return (
    <div className="experience-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-experience">
        <Fade>
          <div className="experience-heading-div">
            <div className="experience-heading-img-div">
              <ExperienceImg theme={theme} />
            </div>
            <div className="experience-heading-text-div">
              <h1
                className="experience-heading-text"
                style={{ color: theme.text }}
              >
                {experience.title}
              </h1>
              <h3
                className="experience-heading-sub-text"
                style={{ color: theme.text }}
              >
                {experience["subtitle"]}
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {experience["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <ExperienceAccordion theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default Experience;
