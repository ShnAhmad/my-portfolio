import React, { Fragment } from "react";
import { Tooltip, TooltipWrapper } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import "./SoftwareSkill.css";
import { Icon } from "@iconify/react/dist/iconify.js";

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo, index) => {
            let tooltipId = logo.skillName.trim() + index
            return (
              <Fragment key={logo.skillName}>
                <li className="software-skill-inline" name={logo.skillName}>
                  <Icon
                    icon={logo.fontAwesomeClassname}
                    data-tooltip-id={tooltipId}
                    data-tooltip-content={logo.skillName}
                    style={logo.style}
                  />
                </li>
                <Tooltip
                  id={tooltipId}
                  style={{ fontSize: "16px" }}
                  variant={props.theme.name === "dark" ? "light" : "dark"}
                />
              </Fragment>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;
