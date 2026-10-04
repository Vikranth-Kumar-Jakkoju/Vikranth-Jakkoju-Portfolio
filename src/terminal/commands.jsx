import {
  certificationHighlights,
  education,
  experience,
  leetcode,
  links,
  person,
  projects,
  sectionAnchors,
  skillGroups,
  summary,
} from "../data/content.js";
import { scrollToSection } from "../hooks/scrollToSection.js";

export const commandRegistry = {
  help: {
    name: "help",
    description: "List available commands",
    execute: () => ({
      output: (
        <div className="terminal-output__help">
          <p className="terminal-output__title">Available commands:</p>
          <div className="terminal-output__grid">
            <span className="terminal-output__cmd">whoami</span>
            <span>Print biography and education summary</span>
            <span className="terminal-output__cmd">skills</span>
            <span>List technical skillset by categories</span>
            <span className="terminal-output__cmd">projects</span>
            <span>Display featured projects and stack</span>
            <span className="terminal-output__cmd">experience</span>
            <span>View experience timeline and internships</span>
            <span className="terminal-output__cmd">certs</span>
            <span>List certifications and credentials</span>
            <span className="terminal-output__cmd">leetcode</span>
            <span>Display DSA problem-solving statistics</span>
            <span className="terminal-output__cmd">resume</span>
            <span>Open or download résumé</span>
            <span className="terminal-output__cmd">contact</span>
            <span>Show reach-out email and public profiles</span>
            <span className="terminal-output__cmd">clear</span>
            <span>Clear the terminal screen</span>
            <span className="terminal-output__cmd">sudo hire-me</span>
            <span>Privileged hiring routine (easter egg)</span>
          </div>
          <p className="terminal-output__hint">
            Tip: Press Tab to autocomplete, Up/Down for command history.
          </p>
        </div>
      ),
    }),
  },
  whoami: {
    name: "whoami",
    description: "Print bio and background summary",
    execute: () => ({
      output: (
        <div className="terminal-output__whoami">
          <p className="terminal-output__highlight">{person.name}</p>
          <p className="terminal-output__sub">
            {person.title} · {person.location}
          </p>
          <p className="terminal-output__text">{summary}</p>
          <div className="terminal-output__section">
            <p className="terminal-output__heading">Education:</p>
            <p>{education.degree}</p>
            <p className="terminal-output__sub">
              {education.institution} ({education.period}) · CGPA: {education.cgpa}
            </p>
          </div>
        </div>
      ),
    }),
  },
  skills: {
    name: "skills",
    description: "List technical skills and stacks",
    execute: () => ({
      output: (
        <div className="terminal-output__skills">
          <p className="terminal-output__title">Technical Arsenal:</p>
          {skillGroups.map((group) => (
            <div key={group.id} className="terminal-output__group">
              <span className="terminal-output__accent">[{group.label}]</span>{" "}
              <span>{group.packages.join(" · ")}</span>
            </div>
          ))}
        </div>
      ),
    }),
  },
  projects: {
    name: "projects",
    description: "Show featured projects and repo links",
    execute: () => ({
      output: (
        <div className="terminal-output__projects">
          <p className="terminal-output__title">Featured Projects:</p>
          {projects.map((proj) => (
            <div key={proj.id} className="terminal-output__item">
              <div className="terminal-output__item-title">
                <span className="terminal-output__highlight">{proj.name}</span>
                <span className="terminal-output__sub"> — {proj.tagline}</span>
              </div>
              <p className="terminal-output__text">{proj.description}</p>
              <p className="terminal-output__meta">
                <span className="terminal-output__label">Stack:</span>{" "}
                {proj.stack.join(" · ")}
              </p>
              <div className="terminal-output__links">
                {proj.repoUrl && (
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-output__link"
                  >
                    [Source Code ↗]
                  </a>
                )}
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="terminal-output__link"
                  >
                    [Live Demo ↗]
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ),
    }),
  },
  experience: {
    name: "experience",
    description: "View experience timeline and internships",
    execute: () => ({
      output: (
        <div className="terminal-output__experience">
          <p className="terminal-output__title">
            Experience &amp; Internships (git log):
          </p>
          {experience.map((item) => (
            <div key={item.id} className="terminal-output__item">
              <p className="terminal-output__highlight">
                <span className="terminal-output__accent" aria-hidden="true">
                  * commit {item.decorativeHash || item.hash}
                </span>{" "}
                {item.role} @ {item.org}{" "}
                <span className="terminal-output__sub">({item.period})</span>
              </p>
              {item.certId && (
                <p className="terminal-output__meta">
                  <span className="terminal-output__label">Cert ID:</span>{" "}
                  <code>{item.certId}</code>
                </p>
              )}
              <ul className="terminal-output__list">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ),
    }),
  },
  certs: {
    name: "certs",
    description: "List certifications and credentials",
    execute: () => ({
      output: (
        <div className="terminal-output__certs">
          <p className="terminal-output__title">Certifications & Credentials:</p>
          <ul className="terminal-output__list">
            {certificationHighlights.map((cert, idx) => (
              <li key={idx}>{cert}</li>
            ))}
          </ul>
        </div>
      ),
    }),
  },
  leetcode: {
    name: "leetcode",
    description: "Display DSA and LeetCode stats",
    execute: () => ({
      output: (
        <div className="terminal-output__leetcode">
          <p className="terminal-output__title">LeetCode Problem Solving:</p>
          <div className="terminal-output__stats">
            <div>
              <span className="terminal-output__sub">Problems Solved: </span>
              <span className="terminal-output__highlight">
                {leetcode.problemsSolved}
              </span>
            </div>
            <div>
              <span className="terminal-output__sub">Longest Streak: </span>
              <span className="terminal-output__highlight">
                {leetcode.streakDays}
              </span>
            </div>
          </div>
          <p className="terminal-output__sub">{leetcode.streakNote}</p>
          <a
            href={leetcode.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-output__link"
          >
            Open LeetCode Profile ↗
          </a>
        </div>
      ),
    }),
  },
  resume: {
    name: "resume",
    description: "Open or download résumé",
    execute: () => ({
      output: (
        <div className="terminal-output__resume">
          <p className="terminal-output__warning">
            [Notice] Résumé PDF is currently being updated.
          </p>
          <p className="terminal-output__sub">
            {/* TODO: add resume.pdf to /public */}
            Target: <code>{person.resumePath}</code> (pending upload).
          </p>
          <p className="terminal-output__text">
            For inquiries or a verified copy of my CV, reach out at{" "}
            <a
              href={`mailto:${person.email}`}
              className="terminal-output__link"
            >
              {person.email}
            </a>{" "}
            or view credentials via <code>experience</code> and{" "}
            <code>certs</code>.
          </p>
          <div className="terminal-output__links">
            <a
              href={person.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-output__link"
            >
              [Direct link: {person.resumePath} ↗]
            </a>
          </div>
        </div>
      ),
    }),
  },
  contact: {
    name: "contact",
    description: "Display email and profiles",
    execute: (_args, { reducedMotion } = {}) => {
      if (typeof window !== "undefined") {
        setTimeout(() => {
          scrollToSection(`#${sectionAnchors.contact}`, reducedMotion);
        }, 100);
      }
      return {
        output: (
        <div className="terminal-output__contact">
          <p className="terminal-output__title">Contact & Profiles:</p>
          <p>
            <span className="terminal-output__sub">Email: </span>
            <a
              href={`mailto:${person.email}`}
              className="terminal-output__link"
            >
              {person.email}
            </a>
          </p>
          <div className="terminal-output__links">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-output__link"
            >
              [GitHub]
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-output__link"
            >
              [LinkedIn]
            </a>
            <a
              href={links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-output__link"
            >
              [LeetCode]
            </a>
            <a
              href={links.hackerrank}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-output__link"
            >
              [HackerRank]
            </a>
            <a
              href={links.codechef}
              target="_blank"
              rel="noopener noreferrer"
              className="terminal-output__link"
            >
              [CodeChef]
            </a>
          </div>
        </div>
      ),
    };
  },
  },
  clear: {
    name: "clear",
    description: "Clear terminal screen",
    execute: () => ({ action: "clear" }),
  },
  "sudo hire-me": {
    name: "sudo hire-me",
    description: "Privileged hiring routine (easter egg)",
    execute: (_args, { reducedMotion }) => {
      if (typeof window !== "undefined") {
        setTimeout(() => {
          scrollToSection(`#${sectionAnchors.contact}`, reducedMotion);
        }, 500);
      }
      return {
        output: (
          <div className="terminal-output__sudo">
            <p className="terminal-output__warning">
              [sudo] password for visitor: **********
            </p>
            <p className="terminal-output__accent">
              AUTHENTICATION BYPASSED. Authorization level: UNRESTRICTED.
            </p>
            <p>Executive hiring protocol initiated. Verifying credentials:</p>
            <ul className="terminal-output__list">
              <li>✓ Clean component architecture &amp; zero security leaks</li>
              <li>✓ 400+ LeetCode problems solved with 100+ day streak</li>
              <li>✓ Full-stack React + Node + AI engineering foundations</li>
            </ul>
            <p className="terminal-output__accent">
              Offer protocol ready. Scrolling to contact terminal...
            </p>
          </div>
        ),
      };
    },
  },
};

// Aliases
commandRegistry.cls = commandRegistry.clear;
commandRegistry["hire-me"] = commandRegistry["sudo hire-me"];
commandRegistry.achievements = commandRegistry.certs;
