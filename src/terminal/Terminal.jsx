import { useEffect, useRef, useState } from "react";
import "./Terminal.css";

function Terminal({
  isOpen,
  onClose,
  triggerRef,
  entries,
  setEntries,
  onExecuteCommand,
  onAutocomplete,
  onNavigateHistory,
  onResetHistoryNav,
  onClear,
  shortcutLabel,
}) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  // Return focus to trigger when closing
  useEffect(() => {
    if (!isOpen) return undefined;

    const returnTarget =
      triggerRef?.current ||
      (document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null);

    const animId = window.requestAnimationFrame(() => {
      inputRef.current?.focus();
    });

    return () => {
      window.cancelAnimationFrame(animId);
      returnTarget?.focus?.();
    };
  }, [isOpen, triggerRef]);

  // Auto-scroll output to bottom
  useEffect(() => {
    if (!isOpen || !outputRef.current) return;
    outputRef.current.scrollTop = outputRef.current.scrollHeight;
  }, [entries, isOpen]);

  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      event.preventDefault();
      onClose();
      return;
    }

    if (event.key === "Enter") {
      event.preventDefault();
      const trimmed = input.trim();
      if (!trimmed) return;
      onExecuteCommand(trimmed);
      setInput("");
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      const prev = onNavigateHistory("up", input);
      setInput(prev);
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      const next = onNavigateHistory("down", input);
      setInput(next);
      return;
    }

    if (event.key === "Tab") {
      // If input is empty, allow natural tab navigation (do not trap focus)
      if (!input.trim()) return;

      event.preventDefault();
      const auto = onAutocomplete(input);
      if (auto) {
        if (auto.matches.length === 1) {
          setInput(auto.match + " ");
        } else if (auto.matches.length > 1) {
          if (auto.match.length > input.trim().length) {
            setInput(auto.match);
          } else {
            // Already at common prefix: print matching commands in log
            setEntries((prev) =>
              [
                ...prev,
                {
                  id: `tab-${Date.now()}-${Math.random()}`,
                  type: "system",
                  content: `Matching commands: ${auto.matches.join("   ")}`,
                },
              ].slice(-50),
            );
          }
        }
      }
      return;
    }

    // Ctrl+L to clear screen (standard terminal shortcut)
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "l") {
      event.preventDefault();
      onClear();
    }
  };

  if (!isOpen) return null;

  return (
    <section
      id="developer-terminal"
      className="terminal-panel"
      role="region"
      aria-labelledby="terminal-title"
    >
      <div className="terminal-panel__header">
        <div className="terminal-panel__title-wrap">
          <span className="terminal-panel__badge" aria-hidden="true">
            &gt;_
          </span>
          <h2 id="terminal-title" className="terminal-panel__title">
            vikranth@portfolio: ~ (terminal)
          </h2>
        </div>
        <div className="terminal-panel__actions">
          <kbd className="terminal-panel__kbd" aria-hidden="true">
            {shortcutLabel}
          </kbd>
          <button
            type="button"
            className="terminal-panel__btn"
            onClick={onClear}
            title="Clear terminal (Ctrl+L)"
            aria-label="Clear terminal"
          >
            Clear
          </button>
          <button
            type="button"
            className="terminal-panel__btn terminal-panel__btn--close"
            onClick={onClose}
            title="Close terminal (Esc)"
            aria-label="Close terminal"
          >
            ✕
          </button>
        </div>
      </div>

      <div
        ref={outputRef}
        className="terminal-panel__body"
        role="log"
        aria-live="polite"
        aria-atomic="false"
      >
        {entries.map((entry) => (
          <div
            key={entry.id}
            className={`terminal-panel__line terminal-panel__line--${entry.type}`}
          >
            {entry.type === "input" && (
              <p className="terminal-panel__echo">
                <span className="terminal-panel__prompt" aria-hidden="true">
                  $
                </span>
                <span className="terminal-panel__cmd-text">{entry.command}</span>
              </p>
            )}
            {entry.type === "system" && (
              <p className="terminal-panel__system-msg">{entry.content}</p>
            )}
            {entry.type === "error" && (
              <p className="terminal-panel__error-msg">{entry.content}</p>
            )}
            {entry.type === "output" && (
              <div className="terminal-panel__output-content">
                {entry.content}
              </div>
            )}
          </div>
        ))}
      </div>

      <form
        className="terminal-panel__form"
        onSubmit={(event) => event.preventDefault()}
      >
        <label htmlFor="terminal-command-input" className="visually-hidden">
          Terminal command input
        </label>
        <span className="terminal-panel__prompt" aria-hidden="true">
          $
        </span>
        <div className="terminal-panel__input-wrap">
          <input
            id="terminal-command-input"
            ref={inputRef}
            className="terminal-panel__input"
            type="text"
            maxLength={100}
            value={input}
            onChange={(event) => {
              setInput(event.target.value);
              onResetHistoryNav();
            }}
            onKeyDown={onKeyDown}
            placeholder="Type 'help' for commands…"
            autoComplete="off"
            spellCheck="false"
            autoCapitalize="off"
          />
          <span className="terminal-panel__cursor" aria-hidden="true">
            ▌
          </span>
        </div>
      </form>
    </section>
  );
}

export default Terminal;
