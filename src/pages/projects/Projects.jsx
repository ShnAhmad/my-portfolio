import React from "react";
import Header from "../../components/header/Header.jsx";
import Footer from "../../components/footer/Footer.jsx";
import ProjectsImg from "./ProjectsImg.jsx";
import { style } from "glamor";
import "./Projects.css";
import { Fade } from "react-awesome-reveal";
import ProjectCard from "../../components/ProjectCard/ProjectCard.jsx";
import { projects, projectsHeader } from "../../Data/Data.jsx";

function Projects(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <div className="projects-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-projects">
        <Fade>
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <ProjectsImg theme={theme} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
      </div>
      <div className="repo-cards-div-main">
        {projects.data.map((repo, index) => {
          return (
            <ProjectCard key={"repo-" + index} repo={repo} theme={theme} />
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <a
        {...styles}
        className="general-btn more-projects-btn"
        href="https://github.com/ShnAhmad"
        target="_blank"
      >
        More Projects (Github)
      </a>
      <br />
      <br />
      <Footer theme={theme} />
    </div>
  );
}

export default Projects;
