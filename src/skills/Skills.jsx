import { sectionAnchors, skillGroups } from "../data/content.js";
import useScrollReveal from "../hooks/useScrollReveal.js";
import "./Skills.css";

function parseSkillPackage(pkg) {
  // Check for credentials in parentheses e.g. (Associate Certified), (NPTEL), (ServiceNow)
  const match = pkg.match(/^(.*?)\s*\((.*?)\)$/);
  if (match) {
    const rawName = match[1];
    const tag = match[2];
    if (
      tag.toLowerCase().includes("certified") ||
      tag === "NPTEL" ||
      tag === "ServiceNow"
    ) {
      return {
        name: rawName,
        credential: tag.includes("Certified") ? tag : `${tag} Certified`,
        isCredential: true,
      };
    }
    return {
      name: pkg,
      credential: null,
      isCredential: false,
    };
  }

  if (pkg === "Oracle Cloud AI Foundations") {
    return {
      name: "Oracle Cloud AI",
      credential: "Foundations Associate",
      isCredential: true,
    };
  }

  return {
    name: pkg,
    credential: null,
    isCredential: false,
  };
}

function Skills() {
  const { ref: sectionRef, isRevealed } = useScrollReveal();

  return (
    <section
      id={sectionAnchors.skills}
      ref={sectionRef}
      className={`skills-section ${isRevealed ? "is-revealed" : "is-hidden"}`}
      aria-labelledby="skills-heading"
    >
      {/* Window Header */}
      <div className="skills__window-header" aria-hidden="true">
        <div className="skills__window-dots">
          <span className="skills__dot skills__dot--red" />
          <span className="skills__dot skills__dot--yellow" />
          <span className="skills__dot skills__dot--green" />
        </div>
        <span className="skills__window-title">vikranth/package.json</span>
        <span className="skills__window-badge">JSON</span>
      </div>

      <div className="skills__window-body">
        <div className="skills__meta">
          <p className="skills__prompt-line" aria-hidden="true">
            <span className="skills__prompt">$</span>
            <span className="skills__cmd">cat package.json</span>
          </p>
          <div className="skills__header-row">
            <h2 id="skills-heading" className="skills__heading">
              # Technical Arsenal
            </h2>
            <span className="skills__tagline" aria-hidden="true">
              // package.json dependencies
            </span>
          </div>
        </div>

        {/* Screen-reader-only accessible overview */}
        <p className="visually-hidden">
          Technical skills and credentials organized into six dependency groups:
          Core CS, Languages, Full stack, Databases and BI, AI, Cloud and
          Automation, and Developer Tools.
        </p>

        {/* Code Editor Container */}
        <div className="skills__code-container">
          {/* Decorative JSON preamble */}
          <div className="skills__json-preamble" aria-hidden="true">
            <div className="skills__line">
              <span className="skills__punct">&#123;</span>
            </div>
            <div className="skills__line skills__indent-1">
              <span className="skills__key">"name"</span>
              <span className="skills__punct">: </span>
              <span className="skills__val">"@vikranth/portfolio"</span>
              <span className="skills__punct">,</span>
            </div>
            <div className="skills__line skills__indent-1">
              <span className="skills__key">"private"</span>
              <span className="skills__punct">: </span>
              <span className="skills__bool">true</span>
              <span className="skills__punct">,</span>
            </div>
            <div className="skills__line skills__indent-1">
              <span className="skills__key">"scripts"</span>
              <span className="skills__punct">: &#123; </span>
              <span className="skills__key">"build"</span>
              <span className="skills__punct">: </span>
              <span className="skills__val">"ship-clean-code"</span>
              <span className="skills__punct">, </span>
              <span className="skills__key">"learn"</span>
              <span className="skills__punct">: </span>
              <span className="skills__val">"continuous"</span>
              <span className="skills__punct"> &#125;,</span>
            </div>
          </div>

          {/* Semantic Skill Groups */}
          <div className="skills__groups">
            {skillGroups.map((group, groupIdx) => {
              const isLastGroup = groupIdx === skillGroups.length - 1;
              const jsonKey = `${group.id}Dependencies`;

              return (
                <div key={group.id} className="skills__group">
                  <h3 className="skills__group-heading">
                    <span className="visually-hidden">
                      {group.label} skills
                    </span>
                    <span
                      aria-hidden="true"
                      className="skills__line skills__indent-1"
                    >
                      <span className="skills__key">"{jsonKey}"</span>
                      <span className="skills__punct">: &#123;</span>
                      <span className="skills__comment">
                        {" "}
                        // {group.label}
                      </span>
                    </span>
                  </h3>

                  <ul
                    className="skills__group-list"
                    aria-label={`${group.label} skills`}
                  >
                    {group.packages.map((pkgStr, pkgIdx) => {
                      const { name, credential, isCredential } =
                        parseSkillPackage(pkgStr);
                      const isLastPkg = pkgIdx === group.packages.length - 1;

                      return (
                        <li key={pkgStr} className="skills__item">
                          <span className="visually-hidden">
                            {name}
                            {isCredential
                              ? `, Credential: ${credential}`
                              : ""}
                          </span>

                          <span
                            aria-hidden="true"
                            className="skills__line skills__indent-2"
                          >
                            <span className="skills__pkg-name">"{name}"</span>
                            <span className="skills__punct">: </span>
                            <span
                              className={
                                isCredential
                                  ? "skills__pkg-val skills__pkg-val--credential"
                                  : "skills__pkg-val"
                              }
                            >
                              "{isCredential ? credential : "active"}"
                            </span>
                            {isCredential && (
                              <span className="skills__badge">
                                Credential
                              </span>
                            )}
                            {!isLastPkg && (
                              <span className="skills__punct">,</span>
                            )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <div
                    aria-hidden="true"
                    className="skills__line skills__indent-1"
                  >
                    <span className="skills__punct">
                      &#125;{!isLastGroup && ","}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Decorative JSON closer */}
          <div className="skills__json-closer" aria-hidden="true">
            <div className="skills__line">
              <span className="skills__punct">&#125;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
