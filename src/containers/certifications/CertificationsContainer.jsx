import React from "react";
import "./Certifications.css";
import { certifications } from "../../Data/Data";
import { Fade } from "react-awesome-reveal";
import CertificationCard from "../../components/certificationCard/CertificationCard";

function CertificationsContainer(props) {
  const theme = props.theme;
  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade>
          <h1 className="certs-header" style={{ color: theme.text }}>
            Certifications
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {certifications.certifications.map((cert, index) => {
          return (
            <CertificationCard
              key={"cert-" + index}
              certificate={cert}
              theme={theme}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CertificationsContainer;
