import {
  codingProfiles,
  hackathonsAndEvents,
  leetcode,
  sectionAnchors,
} from "../data/content.js";
import useScrollReveal from "../hooks/useScrollReveal.js";
import "./LeetCode.css";

const statTiles = [
  {
    id: "solved",
    value: leetcode.problemsSolved,
    label: "Problems Solved",
    sub: "LeetCode algorithmic challenges",
  },
  {
    id: "streak",
    value: leetcode.streakDays,
    label: "Day Problem Streak",
    sub: "Continuous daily solving in 2025",
  },
  {
    id: "badges",
    value: "3",
    label: "Consistency Badges",
    sub: "50+ day badges in 2025 & 2026",
  },
  {
    id: "hackerrank",
    value: "Silver",
    label: "HackerRank Silver",
    sub: "Problem Solving certified rank",
  },
];

function LeetCode() {
  const { ref: sectionRef, isRevealed } = useScrollReveal();

  return (
    <section
      id={sectionAnchors.leetcode}
      ref={sectionRef}
      className={`leetcode-section ${isRevealed ? "is-revealed" : "is-hidden"}`}
      aria-labelledby="leetcode-heading"
    >
      {/* Window Header Framing */}
      <div className="leetcode__window-header" aria-hidden="true">
        <div className="leetcode__window-dots">
          <span className="leetcode__dot leetcode__dot--red" />
          <span className="leetcode__dot leetcode__dot--yellow" />
          <span className="leetcode__dot leetcode__dot--green" />
        </div>
        <span className="leetcode__window-title">vikranth/leetcode.ts</span>
        <span className="leetcode__window-badge">TypeScript</span>
      </div>

      <div className="leetcode__window-body">
        {/* Section Header */}
        <header className="leetcode__header">
          <div className="leetcode__prompt-line" aria-hidden="true">
            <span className="leetcode__prompt">vikranth@portfolio:~$</span>
            <span className="leetcode__prompt-cmd">ts-node leetcode.ts</span>
          </div>
          <h2 id="leetcode-heading" className="leetcode__heading">
            <span className="leetcode__heading-prefix" aria-hidden="true">
              ##{" "}
            </span>
            LeetCode &amp; Coding Profiles
          </h2>
          <p className="leetcode__subhead">
            Algorithmic problem-solving metrics, verified platform badges, and
            technical hackathons. All stats represent active personal practice
            and participation.
          </p>
        </header>

        {/* High-level Stat Tiles */}
        <div
          className="leetcode__stat-grid"
          aria-label="Problem solving metrics overview"
        >
          {statTiles.map((tile) => (
            <div key={tile.id} className="leetcode__stat-card">
              <span className="leetcode__stat-value">{tile.value}</span>
              <span className="leetcode__stat-label">{tile.label}</span>
              <span className="leetcode__stat-sub">{tile.sub}</span>
            </div>
          ))}
        </div>

        {/* IDE-style TypeScript snippet card */}
        <div className="leetcode__code-box" aria-hidden="true">
          <div className="leetcode__code-header">
            <span className="leetcode__code-file">interface CodingMetrics</span>
            <span className="leetcode__code-lang">TS 5.4</span>
          </div>
          <pre className="leetcode__pre">
            <code>
              <span className="tok-kw">interface</span>{" "}
              <span className="tok-type">ProblemSolver</span> {"{\n"}
              {"  "}
              <span className="tok-prop">platform</span>:{" "}
              <span className="tok-str">&quot;LeetCode&quot;</span>;{"\n"}
              {"  "}
              <span className="tok-prop">problemsSolved</span>:{" "}
              <span className="tok-str">&quot;400+&quot;</span>;{" "}
              <span className="tok-comment">// separate metric</span>
              {"\n"}
              {"  "}
              <span className="tok-prop">longestStreak</span>:{" "}
              <span className="tok-str">&quot;100+ days&quot;</span>;{" "}
              <span className="tok-comment">// 2025 streak</span>
              {"\n"}
              {"  "}
              <span className="tok-prop">badges</span>: [
              <span className="tok-str">&quot;100+ Day (2025)&quot;</span>,{" "}
              <span className="tok-str">&quot;50+ Day (2025)&quot;</span>,{" "}
              <span className="tok-str">&quot;50+ Day (2026)&quot;</span>];{"\n"}
              {"}"}
            </code>
          </pre>
        </div>

        {/* Coding Profiles Grid */}
        <div className="leetcode__profiles-wrapper">
          <h3 className="leetcode__section-subtitle">
            <span className="leetcode__subtitle-icon" aria-hidden="true">
              ▶
            </span>{" "}
            Verified Competitive Coding Profiles
          </h3>

          <div className="leetcode__profiles-grid">
            {codingProfiles.map((item) => (
              <article
                key={item.id}
                className="leetcode__profile-card"
                aria-labelledby={`profile-title-${item.id}`}
              >
                <div className="leetcode__profile-header">
                  <div className="leetcode__profile-title-col">
                    <span
                      className="leetcode__profile-icon"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                    <h4
                      id={`profile-title-${item.id}`}
                      className="leetcode__profile-name"
                    >
                      {item.name}
                    </h4>
                  </div>
                  <span className="leetcode__profile-badge">{item.badge}</span>
                </div>

                <p className="leetcode__profile-stats">{item.stats}</p>
                <p className="leetcode__profile-sub">{item.sub}</p>

                {/* Platform Badges list */}
                <div className="leetcode__badges-section">
                  <span className="visually-hidden">
                    Badges earned on {item.name}:
                  </span>
                  <ul
                    className="leetcode__badges-list"
                    aria-label={`Badges earned on ${item.name}`}
                  >
                    {item.badges.map((b) => (
                      <li key={b} className="leetcode__badge-chip">
                        <span
                          className="leetcode__chip-symbol"
                          aria-hidden="true"
                        >
                          ✓
                        </span>{" "}
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Profile Link */}
                <div className="leetcode__profile-action">
                  <a
                    href={item.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="leetcode__profile-link"
                    aria-label={`Open ${item.name} profile in a new tab`}
                  >
                    <span>View {item.name} Profile</span>
                    <span className="leetcode__arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Hackathons & Technical Activities */}
        <div className="leetcode__hackathons-wrapper">
          <h3 className="leetcode__section-subtitle">
            <span className="leetcode__subtitle-icon" aria-hidden="true">
              ▶
            </span>{" "}
            Hackathons &amp; Technical Activities
          </h3>
          <p className="leetcode__hackathons-note">
            Collegiate and national developer events (participation listed,
            non-ranked).
          </p>

          <ul
            className="leetcode__hackathons-list"
            aria-label="Hackathons and technical activities"
          >
            {hackathonsAndEvents.map((event, idx) => (
              <li key={idx} className="leetcode__hackathon-item">
                <span className="leetcode__hackathon-prefix" aria-hidden="true">
                  #
                </span>
                <span className="leetcode__hackathon-name">{event}</span>
                <span className="leetcode__hackathon-tag" aria-hidden="true">
                  participant
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default LeetCode;
