import { sectionAnchors, sections } from "../data/content.js";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import { scrollToSection } from "../hooks/scrollToSection.js";
import "./SidebarNav.css";

function SidebarNav({
  activeDomId,
  onNavigate,
  onOpenPalette,
  shortcutLabel,
  onToggleTerminal,
  isTerminalOpen,
  terminalShortcutLabel,
}) {
  const reducedMotion = usePrefersReducedMotion();

  const onSectionClick = (event, href) => {
    event.preventDefault();
    scrollToSection(href, reducedMotion);
    onNavigate?.();
  };

  return (
    <div className="file-tree">
      <p className="file-tree__root">
        <span className="file-tree__chevron" aria-hidden="true">
          ▾
        </span>
        vikranth/
      </p>
      <nav className="file-tree__nav" aria-label="Page sections">
        <ul className="file-tree__list">
          {sections.map((section) => {
            const href = `#${sectionAnchors[section.id]}`;
            const isActive = sectionAnchors[section.id] === activeDomId;
            return (
              <li key={section.id}>
                <a
                  className={
                    isActive ? "file-tree__link is-active" : "file-tree__link"
                  }
                  href={href}
                  onClick={(event) => onSectionClick(event, href)}
                >
                  <span className="file-tree__icon" aria-hidden="true">
                    {section.file.endsWith("/") ? "📁" : "📄"}
                  </span>
                  <span className="file-tree__name">{section.file}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="file-tree__actions">
        <button
          type="button"
          className="file-tree__action-btn"
          onClick={(event) => onOpenPalette(event.currentTarget)}
        >
          <span>Command palette</span>
          <kbd>{shortcutLabel}</kbd>
        </button>
        <button
          type="button"
          className={
            isTerminalOpen
              ? "file-tree__action-btn is-active"
              : "file-tree__action-btn"
          }
          aria-expanded={isTerminalOpen}
          aria-controls="developer-terminal"
          onClick={(event) => onToggleTerminal?.(event.currentTarget)}
        >
          <span>&gt;_ Terminal</span>
          <kbd>{terminalShortcutLabel}</kbd>
        </button>
      </div>
    </div>
  );
}

export default SidebarNav;
