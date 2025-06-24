import React from "react";
import "./ExperienceCard.css";
import { Fade } from "react-awesome-reveal";

function ExperienceCard({ experience, theme }) {
  return (
    <Fade>
      <div className="experience-card-col experience-card-gap">
        <div
          className="experience-card experience-card-1"
          style={{ backgroundColor: experience.color }}
        >
          <div className="experience-company-logo">
            <img
              src={experience.logo}
              className="featured-image"
            />
          </div>
          <article
            className="experience-card-body"
            style={{
              backgroundColor: theme.themeColor,
              color: theme.oppositeThemeColor,
            }}
          >
            <header>
              <div className="title">
                <h3>{experience.title}</h3>
              </div>
              <p className="meta">
                <span className="pre-heading">{experience.company}</span>
                <br />
                <span className="author">{experience.location}</span>
                <br />
                <span className="author">{experience.duration}</span>
              </p>
              <ol
                className="experience-card-description"
                dangerouslySetInnerHTML={{
                  __html: experience.description,
                }}
              ></ol>
            </header>
          </article>
        </div>
      </div>
    </Fade>
  );
}

export default ExperienceCard;
