import React, { Fragment } from "react";
import { Tooltip } from "react-tooltip";
import "./ProjectLanguages.css";
import { Icon } from "@iconify/react";

function ProjectLanguages(props) {
  return (
    <div className="software-skills-main-div">
      <ul className="dev-icons-languages">
        {props.logos.map((logo, index) => {
          const tooltipId = logo.name.trim() + index;
          return (
            <div key={logo.name}>
              <li className="software-skill-inline-languages">
                <Icon
                  icon={logo.iconifyClass}
                  data-tooltip-id={tooltipId}
                  data-tooltip-content={logo.name}
                  style={{ fontSize: "24px", cursor: "pointer" }}
                />
              </li>
              <Tooltip
                id={tooltipId}
                style={{ fontSize: "16px" }}
                variant={props.theme.name === "dark" ? "light" : "dark"}
              />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ProjectLanguages;
