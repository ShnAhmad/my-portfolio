import React from "react";
import "./Footer.css";
import { greeting } from "../../Data/Data";
import { Fade } from "react-awesome-reveal";

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.full_name}
        </p>
      </Fade>
    </div>
  );
}
