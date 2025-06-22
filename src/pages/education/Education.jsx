import React from "react";
import EducationImg from "./EducationImg";
import "./EducationComponent.css";
import EducationsContainer from "../../containers/education/EducationsContainer";
import Header from "../../components/header/Header";
import { Fade } from "react-awesome-reveal";
import Footer from "../../components/footer/Footer";
import CertificationsContainer from "../../containers/certifications/CertificationsContainer";

function Education(props) {
  const theme = props.theme;
  return (
    <div className="education-main">
      <Header theme={props.theme} setTheme={props.setTheme} />
      <div className="basic-education">
        <Fade>
          <div className="heading-div">
            <div className="heading-img-div">
              <EducationImg theme={theme} />
            </div>
            <div className="heading-text-div">
              <h1 className="heading-text" style={{ color: theme.text }}>
                Education
              </h1>
              <h3 className="heading-sub-text" style={{ color: theme.text }}>
                Qualifications and Certifications
              </h3>
              <p
                className="experience-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                I actively participate in tech-related activities. Below are
                some of my qualifications and major certifications.
              </p>
            </div>
          </div>
        </Fade>
        <EducationsContainer theme={theme} />
        <CertificationsContainer theme={theme} />
      </div>
      <Footer theme={theme} />
    </div>
  );
}

export default Education;
