import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { paletteItems } from "../data/content.js";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion.js";
import { scrollToSection } from "../hooks/scrollToSection.js";
import "./CommandPalette.css";

const FOCUSABLE =
  'a[href], button:not([disabled]):not([tabindex="-1"]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

function matchesQuery(item, query) {
  const haystack = `${item.label} ${item.hint} ${item.group}`.toLowerCase();
  return haystack.includes(query.trim().toLowerCase());
}

function CommandPalette({ isOpen, onClose, triggerRef }) {
  const reducedMotion = usePrefersReducedMotion();
  const labelId = useId();
  const inputRef = useRef(null);
  const dialogRef = useRef(null);
  const activeOptionRef = useRef(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    if (isOpen && activeOptionRef.current) {
      activeOptionRef.current.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex, isOpen]);

  const filtered = useMemo(
    () => paletteItems.filter((item) => matchesQuery(item, query)),
    [query],
  );

  const groups = useMemo(() => {
    const order = [];
    const map = new Map();
    filtered.forEach((item) => {
      if (!map.has(item.group)) {
        map.set(item.group, []);
        order.push(item.group);
      }
      map.get(item.group).push(item);
    });
    return order.map((name) => ({ name, items: map.get(name) }));
  }, [filtered]);

  const activate = useCallback(
    (item) => {
      if (item.id === "link-resume") {
        // TODO: add resume.pdf to /public
        setNotice({
          title: "Résumé PDF is being updated",
          message:
            "File /resume.pdf is pending upload. You can reach out directly via email.",
          href: item.href,
        });
        return;
      }
      setNotice(null);
      onClose();
      if (item.external) {
        window.open(item.href, "_blank", "noopener,noreferrer");
        return;
      }
      if (item.href.startsWith("#")) {
        scrollToSection(item.href, reducedMotion);
        return;
      }
      window.location.assign(item.href);
    },
    [onClose, reducedMotion],
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    const returnTarget =
      triggerRef?.current ||
      (document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusId = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(focusId);
      document.body.style.overflow = previousOverflow;
      returnTarget?.focus?.();
    };
  }, [isOpen, triggerRef]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((index) =>
          filtered.length === 0 ? 0 : (index + 1) % filtered.length,
        );
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((index) =>
          filtered.length === 0
            ? 0
            : (index - 1 + filtered.length) % filtered.length,
        );
        return;
      }

      if (event.key === "Enter") {
        event.preventDefault();
        const item = filtered[activeIndex];
        if (item) activate(item);
        return;
      }

      if (event.key !== "Tab") return;
      const dialog = dialogRef.current;
      if (!dialog) return;
      const nodes = [...dialog.querySelectorAll(FOCUSABLE)];
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, filtered, activeIndex, onClose, activate]);

  if (!isOpen) return null;

  let runningIndex = -1;

  return (
    <div className="palette">
      <button
        type="button"
        className="palette__backdrop"
        aria-label="Close command palette"
        tabIndex={-1}
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        className="palette__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelId}
      >
        <h2 id={labelId} className="palette__title">
          Command palette
        </h2>
        <input
          ref={inputRef}
          className="palette__input"
          type="text"
          role="combobox"
          aria-expanded="true"
          aria-autocomplete="list"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setActiveIndex(0);
            if (notice) setNotice(null);
          }}
          placeholder="Jump to a section or open a link…"
          aria-label="Filter commands"
          aria-controls="palette-results"
          autoComplete="off"
        />
        {notice && (
          <div className="palette__notice" role="status" aria-live="polite">
            <div className="palette__notice-content">
              <strong>{notice.title}: </strong>
              <span>{notice.message}</span>
            </div>
            <div className="palette__notice-actions">
              <a
                href={notice.href}
                target="_blank"
                rel="noopener noreferrer"
                className="palette__notice-link"
              >
                Try direct link ↗
              </a>
              <button
                type="button"
                className="palette__notice-dismiss"
                onClick={() => setNotice(null)}
              >
                Dismiss
              </button>
            </div>
          </div>
        )}
        <ul id="palette-results" className="palette__results" role="listbox">
          {filtered.length === 0 && (
            <li className="palette__empty">No matches.</li>
          )}
          {groups.map((group) => (
            <li key={group.name} className="palette__group">
              <p className="palette__group-label">{group.name}</p>
              <ul>
                {group.items.map((item) => {
                  runningIndex += 1;
                  const index = runningIndex;
                  const isActive = index === activeIndex;
                  return (
                    <li key={item.id} role="none">
                      <button
                        ref={isActive ? activeOptionRef : undefined}
                        type="button"
                        role="option"
                        tabIndex={-1}
                        aria-selected={isActive}
                        className={
                          isActive
                            ? "palette__option is-active"
                            : "palette__option"
                        }
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => activate(item)}
                      >
                        <span>{item.label}</span>
                        <span className="palette__hint">{item.hint}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CommandPalette;
