import React from "react";
import "./Skills.css";
import SkillSection from "./SkillSection.jsx";

import { Fade } from "react-awesome-reveal";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade>
          <h1 className="skills-header" style={{ color: theme.text }}>
            Here's what I do
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
    </div>
  );
}
