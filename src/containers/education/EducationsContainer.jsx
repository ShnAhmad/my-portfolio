import React from "react";
import "./Educations.css";
import { Fade } from "react-awesome-reveal";
import { degrees } from "../../Data/Data.jsx";
import DegreeCard from "../../components/degreeCard/DegreeCard.jsx";

function EducationsContainer(props) {
  const theme = props.theme;

  return (
    <div className="main" id="educations">
      <div className="educations-header-div">
        <Fade>
          <h1 className="educations-header" style={{ color: theme.text }}>
            Qualifications
          </h1>
        </Fade>
      </div>
      <div className="educations-body-div">
        {degrees.degrees.map((degree, index) => {
          return (
            <DegreeCard key={"degree-" + index} degree={degree} theme={theme} />
          );
        })}
      </div>
    </div>
  );
}

export default EducationsContainer;
