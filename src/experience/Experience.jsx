import { experience, sectionAnchors } from "../data/content.js";
import useScrollReveal from "../hooks/useScrollReveal.js";
import "./Experience.css";

function Experience() {
  const { ref: sectionRef, isRevealed } = useScrollReveal();

  return (
    <section
      id={sectionAnchors.experience}
      ref={sectionRef}
      className={`experience-section ${isRevealed ? "is-revealed" : "is-hidden"}`}
      aria-labelledby="experience-heading"
    >
      {/* Window Header */}
      <div className="experience__window-header" aria-hidden="true">
        <div className="experience__window-dots">
          <span className="experience__dot experience__dot--red" />
          <span className="experience__dot experience__dot--yellow" />
          <span className="experience__dot experience__dot--green" />
        </div>
        <span className="experience__window-title">vikranth/experience.log</span>
        <span className="experience__window-badge">git:main</span>
      </div>

      <div className="experience__window-body">
        {/* Section Header */}
        <header className="experience__header">
          <div className="experience__prompt-line" aria-hidden="true">
            <span className="experience__prompt">vikranth@portfolio:~$</span>
            <span className="experience__prompt-cmd">
              git log --graph --decorate experience.log
            </span>
          </div>
          <h2 id="experience-heading" className="experience__heading">
            <span className="experience__heading-prefix" aria-hidden="true">
              ##{" "}
            </span>
            Experience &amp; Internships
          </h2>
          <p className="experience__subhead">
            Practical industry training and virtual internships focused on
            low-code workflow automation, ServiceNow administration, and
            enterprise process design.
          </p>
        </header>

        {/* Git Log Timeline: semantic ordered list for chronological timeline */}
        <ol className="experience__timeline" aria-label="Experience timeline">
          {experience.map((item, index) => {
            const isLatest = index === 0;
            const isLast = index === experience.length - 1;

            return (
              <li key={item.id} className="experience__commit">
                {/* Visual Git Graph Spine (decorative, aria-hidden) */}
                <div className="experience__graph" aria-hidden="true">
                  <span
                    className={`experience__graph-dot ${
                      isLatest ? "experience__graph-dot--latest" : ""
                    }`}
                  />
                  {!isLast && <span className="experience__graph-line" />}
                </div>

                {/* Commit Entry Content */}
                <article className="experience__card">
                  {/* Decorative Git Commit Header Line */}
                  <div className="experience__commit-meta">
                    <span
                      className="experience__commit-hash"
                      aria-hidden="true"
                    >
                      * commit {item.decorativeHash || item.hash}
                    </span>
                    {item.tags && item.tags.length > 0 && (
                      <div
                        className="experience__tags"
                        aria-label="Program credentials"
                      >
                        {item.tags.map((tag) => (
                          <span key={tag} className="experience__tag-chip">
                            tag: {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Role and Organization */}
                  <div className="experience__role-row">
                    <h3 className="experience__role">{item.role}</h3>
                    <span className="experience__org">
                      <span
                        className="experience__org-at"
                        aria-hidden="true"
                      >
                        @{" "}
                      </span>
                      {item.org}
                    </span>
                  </div>

                  {/* Date and Certificate ID */}
                  <div className="experience__meta-row">
                    <div className="experience__date-wrapper">
                      <span
                        className="experience__meta-label"
                        aria-hidden="true"
                      >
                        Date:{" "}
                      </span>
                      <time
                        dateTime={item.dateTime}
                        className="experience__time"
                      >
                        {item.period}
                      </time>
                    </div>

                    {item.certId && (
                      <div className="experience__cert-wrapper">
                        <span
                          className="experience__meta-label"
                          aria-hidden="true"
                        >
                          Cert ID:{" "}
                        </span>
                        <code className="experience__cert-code">
                          {item.certId}
                        </code>
                      </div>
                    )}
                  </div>

                  {/* Bullet points from resume */}
                  <ul className="experience__bullets">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="experience__bullet">
                        <span
                          className="experience__bullet-prompt"
                          aria-hidden="true"
                        >
                          &gt;{" "}
                        </span>
                        <span className="experience__bullet-text">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
