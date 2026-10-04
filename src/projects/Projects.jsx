import { projects, sectionAnchors } from "../data/content.js";
import useScrollReveal from "../hooks/useScrollReveal.js";
import "./Projects.css";

function Projects() {
  const { ref: sectionRef, isRevealed } = useScrollReveal();

  return (
    <section
      id={sectionAnchors.projects}
      ref={sectionRef}
      className={`projects-section ${isRevealed ? "is-revealed" : "is-hidden"}`}
      aria-labelledby="projects-heading"
    >
      {/* Window Header */}
      <div className="projects__window-header" aria-hidden="true">
        <div className="projects__window-dots">
          <span className="projects__dot projects__dot--red" />
          <span className="projects__dot projects__dot--yellow" />
          <span className="projects__dot projects__dot--green" />
        </div>
        <span className="projects__window-title">vikranth/projects/</span>
        <span className="projects__window-badge">4 repos</span>
      </div>

      <div className="projects__window-body">
        {/* Section Header */}
        <header className="projects__header">
          <div className="projects__prompt-line" aria-hidden="true">
            <span className="projects__prompt">vikranth@portfolio:~$</span>
            <span className="projects__prompt-cmd">ls -la projects/</span>
          </div>
          <h2 id="projects-heading" className="projects__heading">
            <span className="projects__heading-prefix" aria-hidden="true">
              ##{" "}
            </span>
            Featured Projects
          </h2>
          <p className="projects__subhead">
            Open-source repositories and applications built with MERN, React,
            Java OOP, and responsive web technologies.
          </p>
        </header>

        {/* Project Cards Grid (Single-col mobile, 2-col wide screens) */}
        <div className="projects__grid">
          {projects.map((project) => {
            const repoDisplay =
              project.repoFullName ||
              project.repoUrl?.replace("https://github.com/", "") ||
              `Vikranth-Kumar-Jakkoju/${project.name}`;

            return (
              <article
                key={project.id}
                className="project-card"
                aria-labelledby={`project-title-${project.id}`}
              >
                {/* Repo Card Header: Folder icon + Repo as owner/name + Public badge */}
                <div className="project-card__header">
                  <span className="project-card__icon" aria-hidden="true">
                    📁
                  </span>
                  <h3
                    id={`project-title-${project.id}`}
                    className="project-card__title"
                  >
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__repo-link"
                      aria-label={`${project.name} repository: ${repoDisplay} (opens in a new tab)`}
                    >
                      {repoDisplay}
                    </a>
                  </h3>
                  <span className="project-card__visibility" aria-hidden="true">
                    Public
                  </span>
                </div>

                {/* Subtitle / Tagline */}
                {project.tagline && (
                  <p className="project-card__tagline">{project.tagline}</p>
                )}

                {/* Description */}
                <p className="project-card__description">
                  {project.description}
                </p>

                {/* Semantic Tech Stack List */}
                <div className="project-card__tags-section">
                  <span className="visually-hidden">Technologies used:</span>
                  <ul
                    className="project-card__tags"
                    aria-label={`Technologies used in ${project.name}`}
                  >
                    {project.stack.map((tech) => (
                      <li key={tech} className="project-card__tag">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Links: Source code and optional verified Live Demo */}
                <div className="project-card__actions">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__action-btn project-card__action-btn--primary"
                    aria-label={`${project.name} source on GitHub (opens in a new tab)`}
                  >
                    <span className="project-card__btn-icon" aria-hidden="true">
                      &lt;/&gt;
                    </span>
                    <span>Source Code</span>
                    <span className="project-card__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-card__action-btn project-card__action-btn--accent"
                      aria-label={`${project.name} live demo (opens in a new tab)`}
                    >
                      <span
                        className="project-card__btn-icon"
                        aria-hidden="true"
                      >
                        ●
                      </span>
                      <span>Live Demo</span>
                      <span className="project-card__arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
