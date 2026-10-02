import { useEffect, useRef, useState } from "react";
import { sectionAnchors, sections } from "./data/content.js";
import AppShell from "./layout/AppShell.jsx";
import Hero from "./hero/Hero.jsx";
import MainSection from "./MainSection.jsx";
import SidebarNav from "./nav/SidebarNav.jsx";
import MobileBar from "./nav/MobileBar.jsx";
import CommandPalette from "./nav/CommandPalette.jsx";
import Terminal from "./terminal/Terminal.jsx";
import useCommandPalette from "./hooks/useCommandPalette.js";
import useTerminal from "./hooks/useTerminal.js";
import useScrollSpy from "./hooks/useScrollSpy.js";
import usePrefersReducedMotion from "./hooks/usePrefersReducedMotion.js";

const spyIds = sections.map((section) => sectionAnchors[section.id]);

function shortcutLabel() {
  if (typeof navigator === "undefined") return "Ctrl+K";
  return /Mac|iPhone|iPad/.test(navigator.platform) ? "⌘K" : "Ctrl+K";
}

function terminalShortcutLabel() {
  if (typeof navigator === "undefined") return "Ctrl+`";
  return /Mac|iPhone|iPad/.test(navigator.platform) ? "⌘`" : "Ctrl+`";
}

function App() {
  const palette = useCommandPalette();
  const reducedMotion = usePrefersReducedMotion();
  const terminal = useTerminal({ reducedMotion });
  const paletteTriggerRef = useRef(null);
  const terminalTriggerRef = useRef(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const activeDomId = useScrollSpy(spyIds);

  const openPalette = (trigger) => {
    if (trigger) paletteTriggerRef.current = trigger;
    palette.open();
  };

  const toggleTerminal = (trigger) => {
    if (trigger) terminalTriggerRef.current = trigger;
    terminal.toggle();
  };

  useEffect(() => {
    if (!mobileNavOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMobileNavOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileNavOpen]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (
        (event.ctrlKey || event.metaKey) &&
        (event.key === "`" || event.key === "~" || event.code === "Backquote")
      ) {
        event.preventDefault();
        terminalTriggerRef.current = document.activeElement;
        terminal.toggle();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [terminal]);

  return (
    <AppShell
      mobileBar={
        <MobileBar
          menuOpen={mobileNavOpen}
          onToggleMenu={() => setMobileNavOpen((open) => !open)}
          onOpenPalette={openPalette}
          onToggleTerminal={toggleTerminal}
          isTerminalOpen={terminal.isOpen}
        />
      }
      navOpen={mobileNavOpen}
      onCloseNav={() => setMobileNavOpen(false)}
      nav={
        <SidebarNav
          activeDomId={activeDomId}
          onNavigate={() => setMobileNavOpen(false)}
          onOpenPalette={openPalette}
          shortcutLabel={shortcutLabel()}
          onToggleTerminal={toggleTerminal}
          isTerminalOpen={terminal.isOpen}
          terminalShortcutLabel={terminalShortcutLabel()}
        />
      }
    >
      <Hero />
      <MainSection />
      <CommandPalette
        isOpen={palette.isOpen}
        onClose={palette.close}
        triggerRef={paletteTriggerRef}
      />
      {!terminal.isOpen && (
        <button
          type="button"
          className="terminal-dock-btn"
          aria-expanded={false}
          aria-controls="developer-terminal"
          onClick={(event) => toggleTerminal(event.currentTarget)}
        >
          <span className="terminal-dock-btn__icon" aria-hidden="true">
            &gt;_
          </span>
          <span className="terminal-dock-btn__label">Terminal</span>
          <kbd className="terminal-dock-btn__kbd">
            {terminalShortcutLabel()}
          </kbd>
        </button>
      )}
      <Terminal
        isOpen={terminal.isOpen}
        onClose={terminal.close}
        triggerRef={terminalTriggerRef}
        entries={terminal.entries}
        setEntries={terminal.setEntries}
        onExecuteCommand={terminal.executeCommand}
        onAutocomplete={terminal.getAutocomplete}
        onNavigateHistory={terminal.navigateHistory}
        onResetHistoryNav={terminal.resetHistoryNav}
        onClear={terminal.clear}
        shortcutLabel={terminalShortcutLabel()}
      />
    </AppShell>
  );
}

export default App;
