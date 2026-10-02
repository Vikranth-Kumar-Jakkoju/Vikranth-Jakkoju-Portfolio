import { useCallback, useEffect, useRef, useState } from "react";
import { hero, person } from "../data/content.js";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import useTypewriter from "../hooks/useTypewriter.js";
import "./Hero.css";

const BOOT_STORAGE_KEY = "vikranth-portfolio-boot-played";
/** Boot overlay + typewriter share this cap so the intro stays brief. */
const INTRO_BUDGET_MS = 2400;
const BOOT_LINE_MS = 360;

function readBootPlayed() {
  try {
    return sessionStorage.getItem(BOOT_STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markBootPlayed() {
  try {
    sessionStorage.setItem(BOOT_STORAGE_KEY, "1");
  } catch {
    /* private mode / blocked storage */
  }
}

function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const skipIntro = reducedMotion || readBootPlayed();

  const [introDone, setIntroDone] = useState(skipIntro);
  const [bootLineIndex, setBootLineIndex] = useState(
    skipIntro ? hero.bootLines.length : 0,
  );
  const introDoneRef = useRef(introDone);

  const completeIntro = useCallback(() => {
    if (introDoneRef.current) return;
    introDoneRef.current = true;
    setIntroDone(true);
    setBootLineIndex(hero.bootLines.length);
    markBootPlayed();
  }, []);

  const showBoot =
    !skipIntro && !introDone && bootLineIndex < hero.bootLines.length;
  const typewriterOn = !skipIntro && !introDone && !showBoot;

  const { displayed: nameVisual, done: nameDone } = useTypewriter(person.name, {
    enabled: typewriterOn,
    charDelayMs: 22,
    skip: skipIntro || introDone,
  });

  const { displayed: roleVisual, done: roleDone } = useTypewriter(person.title, {
    enabled: typewriterOn && nameDone,
    charDelayMs: 16,
    skip: skipIntro || introDone,
    onComplete: completeIntro,
  });

  const showVisualTypewriter = typewriterOn && !(nameDone && roleDone);

  useEffect(() => {
    if (skipIntro || introDone) return undefined;

    const lineId = window.setInterval(() => {
      setBootLineIndex((prev) => {
        if (prev >= hero.bootLines.length - 1) {
          window.clearInterval(lineId);
          return hero.bootLines.length;
        }
        return prev + 1;
      });
    }, BOOT_LINE_MS);

    const capId = window.setTimeout(completeIntro, INTRO_BUDGET_MS);

    return () => {
      window.clearInterval(lineId);
      window.clearTimeout(capId);
    };
  }, [skipIntro, introDone, completeIntro]);

  useEffect(() => {
    if (introDone || skipIntro) return undefined;

    const onKeyDown = (event) => {
      // Keep Tab so keyboard users can reach the Skip control.
      if (event.key === "Tab") return;
      completeIntro();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [introDone, skipIntro, completeIntro]);

  return (
    <section
      id="hero"
      className="hero"
      aria-label="Introduction"
      onClick={skipIntro || introDone ? undefined : completeIntro}
    >
      {showBoot && (
        <div className="hero__boot">
          <button type="button" className="hero__skip" onClick={completeIntro}>
            Skip
          </button>
          <div
            className="hero__boot-lines"
            aria-hidden="true"
            onClick={completeIntro}
          >
            {hero.bootLines.map((line, index) => (
              <p
                key={line}
                className={
                  index <= bootLineIndex
                    ? "hero__boot-line hero__boot-line--visible"
                    : "hero__boot-line"
                }
              >
                {index <= bootLineIndex ? line : "\u00a0"}
              </p>
            ))}
            <p className="hero__boot-hint">Click, tap Skip, or press a key</p>
          </div>
        </div>
      )}

      <div className="hero__panel">
        <p className="hero__eyebrow">
          <span className="hero__prompt">$</span>
          <span className="hero__path">whoami</span>
        </p>

        <div className="hero__title-wrap">
          <h1
            className={
              showVisualTypewriter
                ? "hero__title hero__title--typing"
                : "hero__title"
            }
          >
            <span className="hero__name">{person.name}</span>
            <span className="hero__role">{person.title}</span>
          </h1>

          {showVisualTypewriter && (
            <div className="hero__title-visual" aria-hidden="true">
              <span className="hero__name-visual">
                {nameVisual}
                {!nameDone && <span className="hero__cursor">▌</span>}
              </span>
              <span className="hero__role-visual">
                {nameDone ? roleVisual : "\u00a0"}
                {nameDone && !roleDone && (
                  <span className="hero__cursor">▌</span>
                )}
              </span>
            </div>
          )}
        </div>

        <p className="hero__tagline">{hero.tagline}</p>

        <div
          className={
            introDone || skipIntro
              ? "hero__actions hero__actions--visible"
              : "hero__actions"
          }
        >
          <a className="hero__cta hero__cta--primary" href={hero.primaryCta.href}>
            {hero.primaryCta.label}
          </a>
          <a
            className="hero__cta hero__cta--secondary"
            href={hero.secondaryCta.href}
            title="TODO: add resume.pdf to /public"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
