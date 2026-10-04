import { useCallback, useEffect, useRef, useState } from "react";
import {
  contact,
  links,
  person,
  sectionAnchors,
} from "../data/content.js";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import useScrollReveal from "../hooks/useScrollReveal.js";
import { scrollToSection } from "../hooks/scrollToSection.js";
import "./Contact.css";

export function Contact() {
  const { ref: sectionRef, isRevealed } = useScrollReveal();
  const reducedMotion = usePrefersReducedMotion();

  const [copyStatus, setCopyStatus] = useState("");
  const [isCopied, setIsCopied] = useState(false);
  const copyTimeoutRef = useRef(null);

  const handleCopyEmail = useCallback(async () => {
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }

    let success = false;
    try {
      if (
        typeof navigator !== "undefined" &&
        navigator.clipboard &&
        typeof navigator.clipboard.writeText === "function"
      ) {
        await navigator.clipboard.writeText(person.email);
        success = true;
      } else if (typeof document !== "undefined") {
        const textarea = document.createElement("textarea");
        textarea.value = person.email;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        success = document.execCommand("copy");
        document.body.removeChild(textarea);
      }
    } catch {
      success = false;
    }

    if (success) {
      setIsCopied(true);
      setCopyStatus("Copied to clipboard!");
      copyTimeoutRef.current = setTimeout(() => {
        setIsCopied(false);
        setCopyStatus("");
      }, 2500);
    } else {
      setIsCopied(false);
      setCopyStatus("Copy failed, select the address manually");
      copyTimeoutRef.current = setTimeout(() => {
        setCopyStatus("");
      }, 4000);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const handleBackToTop = (event) => {
    event.preventDefault();
    scrollToSection("#hero", reducedMotion);
  };

  return (
    <>
      <section
        id={sectionAnchors.contact}
        ref={sectionRef}
        className={`contact-section ${isRevealed ? "is-revealed" : "is-hidden"}`}
        aria-labelledby="contact-heading"
      >
        {/* Window Header */}
        <div className="contact__window-header" aria-hidden="true">
          <div className="contact__window-dots">
            <span className="contact__dot contact__dot--red" />
            <span className="contact__dot contact__dot--yellow" />
            <span className="contact__dot contact__dot--green" />
          </div>
          <span className="contact__window-title">vikranth/contact.sh</span>
          <span className="contact__window-badge">bash</span>
        </div>

        <div className="contact__window-body">
          {/* Section Header */}
          <header className="contact__header">
            <div className="contact__prompt-line" aria-hidden="true">
              <span className="contact__prompt">vikranth@portfolio:~$</span>
              <span className="contact__prompt-cmd">
                ./contact.sh --connect
              </span>
            </div>
            <h2 id="contact-heading" className="contact__heading">
              <span className="contact__heading-prefix" aria-hidden="true">
                ##{" "}
              </span>
              Get in Touch
            </h2>
            <p className="contact__subhead">
              Got an engineering opportunity, a project idea, or a question
              about this portfolio? My inbox does not filter out interesting
              work. Reach out directly or grab my résumé below.
            </p>
          </header>

          {/* Decorative Terminal Environment Snippet (Aria-Hidden) */}
          <div
            className="contact__code-block"
            aria-hidden="true"
          >
            <div className="contact__code-line">
              <span className="contact__code-comment">
                #!/usr/bin/env bash
              </span>
            </div>
            <div className="contact__code-line">
              <span className="contact__code-comment">
                # Direct endpoint registry &amp; availability
              </span>
            </div>
            <div className="contact__code-line">
              <span className="contact__code-var">TARGET_LOCATION</span>
              <span className="contact__code-punct">=</span>
              <span className="contact__code-str">
                &quot;Hyderabad, Telangana&quot;
              </span>
            </div>
            <div className="contact__code-line">
              <span className="contact__code-var">STATUS</span>
              <span className="contact__code-punct">=</span>
              <span className="contact__code-str">
                &quot;Open to internships &amp; full-time roles&quot;
              </span>
            </div>
            <div className="contact__code-line">
              <span className="contact__code-var">PRIMARY_CONTACT</span>
              <span className="contact__code-punct">=</span>
              <span className="contact__code-str">
                &quot;{person.email}&quot;
              </span>
            </div>
          </div>

          {/* Primary Email Channel */}
          <div className="contact__primary-card">
            <div className="contact__primary-header">
              <span className="contact__primary-icon" aria-hidden="true">
                ✉
              </span>
              <h3 className="contact__primary-title">Primary Communication Channel</h3>
            </div>
            <div className="contact__email-row">
              <a
                href={`mailto:${person.email}`}
                className="contact__email-link"
                aria-label={`Send email to ${person.email} (opens your default email client)`}
              >
                {person.email}
              </a>
              <div className="contact__copy-wrap">
                <button
                  type="button"
                  className={`contact__copy-btn ${isCopied ? "is-copied" : ""}`}
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                >
                  <span className="contact__copy-icon" aria-hidden="true">
                    {isCopied ? "✓" : "📋"}
                  </span>
                  <span>{isCopied ? "Copied!" : "Copy email"}</span>
                </button>
                <span
                  className="contact__copy-status"
                  aria-live="polite"
                  role="status"
                >
                  {copyStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles & Developer Presence Grid */}
          <div className="contact__grid">
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              aria-label="Visit Vikranth's GitHub profile (opens in a new tab)"
            >
              <div className="contact-card__head">
                <span className="contact-card__icon" aria-hidden="true">
                  ⌥
                </span>
                <span className="contact-card__network">GitHub</span>
                <span className="contact-card__arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <span className="contact-card__handle">
                @Vikranth-Kumar-Jakkoju
              </span>
              <p className="contact-card__desc">
                Source code, repositories, and CI/CD automated deployments
              </p>
            </a>

            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              aria-label="Connect with Vikranth on LinkedIn (opens in a new tab)"
            >
              <div className="contact-card__head">
                <span className="contact-card__icon" aria-hidden="true">
                  ◈
                </span>
                <span className="contact-card__network">LinkedIn</span>
                <span className="contact-card__arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <span className="contact-card__handle">
                vikranth-kumar-jakkoju
              </span>
              <p className="contact-card__desc">
                Professional connections, experience updates, and network
              </p>
            </a>

            <a
              href={links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-card"
              aria-label="View Vikranth's LeetCode profile (opens in a new tab)"
            >
              <div className="contact-card__head">
                <span className="contact-card__icon" aria-hidden="true">
                  ⚡
                </span>
                <span className="contact-card__network">LeetCode</span>
                <span className="contact-card__arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <span className="contact-card__handle">
                Vikranth_Kumar_Jakkoju
              </span>
              <p className="contact-card__desc">
                400+ algorithmic solutions, badges, and active daily streaks
              </p>
            </a>
          </div>

          {/* Details Row: Location & Résumé Download */}
          <div className="contact__details-row">
            <div className="contact-detail-box">
              <div className="contact-detail-box__head">
                <span className="contact-detail-box__icon" aria-hidden="true">
                  📍
                </span>
                <h3 className="contact-detail-box__title">Location</h3>
              </div>
              <p className="contact-detail-box__value">
                {contact.location}
              </p>
              <p className="contact-detail-box__sub">
                Open to on-site roles and remote engineering opportunities.
              </p>
            </div>

            <div className="contact-detail-box">
              <div className="contact-detail-box__head">
                <span className="contact-detail-box__icon" aria-hidden="true">
                  📄
                </span>
                <h3 className="contact-detail-box__title">Résumé</h3>
              </div>
              <a
                href={person.resumePath || "/resume.pdf"}
                download="Vikranth_Jakkoju_Resume.pdf"
                className="contact__resume-btn"
                aria-label="Download résumé as PDF (opens download prompt)"
              >
                <span>Download résumé (PDF)</span>
                <span aria-hidden="true">↓</span>
              </a>
              <p className="contact-detail-box__sub contact-detail-box__sub--muted">
                [Note: Résumé PDF upload pending. Verified credentials can also be
                reviewed in Experience and Certifications.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessible Footer Landmark */}
      <footer className="site-footer" aria-label="Site footer">
        <div className="site-footer__inner">
          <p className="site-footer__copy">
            &copy; {new Date().getFullYear()} Vikranth Kumar Jakkoju. All rights reserved.
          </p>
          <a
            href="#hero"
            className="site-footer__top-link"
            onClick={handleBackToTop}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </footer>
    </>
  );
}

export default Contact;
