import React from "react";
import ScrollAnimation from "react-animate-on-scroll";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

interface PortfolioItemProps {
  githubLink?: string;
  projectLink?: string;
  name: string;
  description: string;
  techList: string[];
}

const ProjectCard: React.FC<PortfolioItemProps> = ({
  githubLink,
  projectLink,
  name,
  description,
  techList,
}) => {
  return (
    <ScrollAnimation animateIn="flipInX">
      <div className="project">
        <header>
          <svg
            width="50px"
            fill="#00A97F"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M0 96C0 60.7 28.7 32 64 32H196.1c19.1 0 37.4 7.6 50.9 21.1L289.9 96H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16H286.6c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7H64z" />
          </svg>

          <div className="project-links">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            )}
            {projectLink && (
              <a href={projectLink} target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            )}
          </div>
        </header>
        <div className="body">
          <h3>{name}</h3>
          <p>{description}</p>
        </div>
        <footer>
          <ul className="tech-list">
            {techList.map((tech, index: number) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </footer>
      </div>
    </ScrollAnimation>
  );
};

export default ProjectCard;
