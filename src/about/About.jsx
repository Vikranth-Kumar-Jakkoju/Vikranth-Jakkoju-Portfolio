import {
  education,
  experience,
  leetcode,
  person,
  sectionAnchors,
} from "../data/content.js";
import useScrollReveal from "../hooks/useScrollReveal.js";
import "./About.css";

const statTiles = [
  {
    id: "cgpa",
    value: education.cgpa,
    label: "B.E. IT CGPA",
    sub: `${education.institution.split("(")[0].trim()} (${education.period})`,
  },
  {
    id: "leetcode-problems",
    value: leetcode.problemsSolved,
    label: "LeetCode Problems",
    sub: "DSA & algorithmic problem solving",
  },
  {
    id: "leetcode-streak",
    value: leetcode.streakDays,
    label: "Day Problem Streak",
    sub: leetcode.streakNote,
  },
  {
    id: "programs",
    value: `${experience.length}`,
    label: "Industrial Programs",
    sub: "ServiceNow & Pegasystems (AICTE)",
  },
];

function About() {
  const { ref: sectionRef, isRevealed } = useScrollReveal();

  return (
    <section
      id={sectionAnchors.about}
      ref={sectionRef}
      className={`about-section ${isRevealed ? "is-revealed" : "is-hidden"}`}
      aria-labelledby="about-heading"
    >
      {/* Terminal window header framing */}
      <div className="about__window-header" aria-hidden="true">
        <div className="about__window-dots">
          <span className="about__dot about__dot--red" />
          <span className="about__dot about__dot--yellow" />
          <span className="about__dot about__dot--green" />
        </div>
        <span className="about__window-title">vikranth/README.md</span>
        <span className="about__window-badge">UTF-8</span>
      </div>

      <div className="about__window-body">
        <div className="about__hero-meta">
          <p className="about__prompt-line" aria-hidden="true">
            <span className="about__prompt">$</span>
            <span className="about__cmd">cat README.md</span>
          </p>
          <div className="about__header-row">
            <h2 id="about-heading" className="about__heading">
              # About {person.name}
            </h2>
            <span className="about__location">
              <span aria-hidden="true">📍</span> {person.location}
            </span>
          </div>
        </div>

        {/* Main Content: Bio + Avatar */}
        <div className="about__layout">
          <div className="about__bio">
            <p className="about__paragraph">
              I’m a full-stack developer based in Hyderabad who ships with React,
              Node.js, Express, and MongoDB—and I’m equally comfortable in Java
              or Python when the engineering problem calls for it. I care about
              responsive, keyboard-accessible UIs, clean system boundaries, and
              maintainable code.
            </p>

            <p className="about__paragraph">
              Currently pursuing my B.E. in Information Technology at Chaitanya
              Bharathi Institute of Technology (CBIT), Hyderabad (
              <strong>CGPA: {education.cgpa}</strong>, {education.period}), I
              balance core CS fundamentals—OOP, DBMS, Operating Systems, and
              Computer Networks—with continued problem-solving practice:{" "}
              <strong>400+ LeetCode problems solved</strong> and an honest{" "}
              <strong>100+ day streak</strong> in 2025.
            </p>

            <p className="about__paragraph">
              Beyond standard web apps, I train in Generative and Agentic AI
              workflows, explore cloud architectures, and experiment with
              enterprise automation on ServiceNow and Pega—alongside whatever new
              framework promises to revolutionize frontend development this week.
            </p>
          </div>

          {/* Profile photo slot */}
          <div className="about__avatar-card">
            {person.photo ? (
              <img
                src={person.photo}
                alt={`Photo of ${person.name}`}
                className="about__avatar-img"
              />
            ) : (
              <div
                className="about__avatar-placeholder"
                role="img"
                aria-label={`Profile placeholder for ${person.name} (TODO: add profile photo to /public)`}
              >
                <div className="about__avatar-terminal">
                  <span className="about__avatar-prompt" aria-hidden="true">
                    &gt; whoami --avatar
                  </span>
                  <div className="about__avatar-icon" aria-hidden="true">
                    👨‍💻
                  </div>
                  <span className="about__avatar-todo">
                    // TODO: add photo to /public
                  </span>
                  <span className="about__avatar-name">{person.name}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Stat Tiles */}
        <div className="about__stats-grid" aria-label="Key highlights">
          {statTiles.map((tile) => (
            <div key={tile.id} className="about__stat-card">
              <span className="about__stat-value">{tile.value}</span>
              <span className="about__stat-label">{tile.label}</span>
              <span className="about__stat-sub">{tile.sub}</span>
            </div>
          ))}
        </div>

        {/* Folded-in Education Sub-panel */}
        <div className="about__education-panel" id="AboutEducation">
          <div className="about__education-header">
            <span className="about__education-marker" aria-hidden="true">
              ##
            </span>
            <h3 className="about__education-title">Education & Coursework</h3>
          </div>

          <div className="about__education-list">
            <div className="about__edu-item">
              <div className="about__edu-top">
                <span className="about__edu-degree">{education.degree}</span>
                <span className="about__edu-period">{education.period}</span>
              </div>
              <p className="about__edu-school">{education.institution}</p>
              <p className="about__edu-score">
                <span className="about__edu-badge">
                  CGPA: {education.cgpa} / 10.0
                </span>
              </p>
              <div className="about__coursework">
                <span className="about__coursework-title">Coursework: </span>
                <span className="about__coursework-list">
                  {education.coursework.join(" · ")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
