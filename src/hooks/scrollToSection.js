/**
 * Smooth-scrolls to a hash unless the user prefers reduced motion.
 */
export function scrollToSection(hash, reducedMotion) {
  const id = String(hash || "").replace(/^#/, "");
  if (!id) return;
  const element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({
    behavior: reducedMotion ? "auto" : "smooth",
    block: "start",
  });
}

export default scrollToSection;
