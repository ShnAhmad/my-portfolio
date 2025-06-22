import React from "react";
import "./DegreeCard.css";
import { Fade, Flip } from "react-awesome-reveal";

function DegreeCard(props) {
  const degree = props.degree;
  const theme = props.theme;
  return (
    <div className="degree-card">
      <Flip duration={2000}>
        <div className="card-img">
          <img
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              transform: "scale(0.9)",
            }}
            src={degree.logo}
            alt={degree.alt_name}
          />
        </div>
      </Flip>
      <Fade>
        <div
          className="card-body"
          style={{
            width: degree.logo_path ? "90%" : "100%",
            backgroundColor: theme.themeColor,
          }}
        >
          <div
            className="body-header"
            style={{ backgroundColor: theme.accentColor }}
          >
            <div className="body-header-title">
              <span className="card-title" style={{ color: theme.ternaryText }}>
                {degree.title}
              </span>
              <span
                className="card-subtitle"
                style={{ color: theme.ternaryText }}
              >
                {degree.subtitle}
              </span>
            </div>
            <div className="body-header-duration">
              <span className="duration" style={{ color: theme.ternaryText }}>
                {degree.duration}
              </span>
            </div>
          </div>
          <div className="body-content">
            {degree.descriptions.map((sentence, index) => {
              return (
                <p
                  key={"degree-" + index}
                  className="content-list"
                  style={{ color: theme.text }}
                >
                  {sentence}
                </p>
              );
            })}
            {degree.website_link && (
              <a
                href={degree.website_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="visit-btn"
                  style={{ backgroundColor: theme.accentColor }}
                >
                  <p className="btn" style={{ color: theme.ternaryText }}>
                    Visit Website
                  </p>
                </div>
              </a>
            )}
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default DegreeCard;
