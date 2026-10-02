import { useEffect, useRef, useState } from "react";
import { sectionAnchors, sections } from "./data/content.js";
import AppShell from "./layout/AppShell.jsx";
import Hero from "./hero/Hero.jsx";
import MainSection from "./MainSection.jsx";
import SidebarNav from "./nav/SidebarNav.jsx";
import MobileBar from "./nav/MobileBar.jsx";
import CommandPalette from "./nav/CommandPalette.jsx";
import useCommandPalette from "./hooks/useCommandPalette.js";
import useScrollSpy from "./hooks/useScrollSpy.js";

const spyIds = sections.map((section) => sectionAnchors[section.id]);

function shortcutLabel() {
  if (typeof navigator === "undefined") return "Ctrl+K";
  return /Mac|iPhone|iPad/.test(navigator.platform) ? "⌘K" : "Ctrl+K";
}

function App() {
  const palette = useCommandPalette();
  const triggerRef = useRef(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const activeDomId = useScrollSpy(spyIds);

  const openPalette = (trigger) => {
    if (trigger) triggerRef.current = trigger;
    palette.open();
  };

  useEffect(() => {
    if (!mobileNavOpen) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setMobileNavOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileNavOpen]);

  return (
    <AppShell
      mobileBar={
        <MobileBar
          menuOpen={mobileNavOpen}
          onToggleMenu={() => setMobileNavOpen((open) => !open)}
          onOpenPalette={openPalette}
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
        />
      }
    >
      <Hero />
      <MainSection />
      <CommandPalette
        isOpen={palette.isOpen}
        onClose={palette.close}
        triggerRef={triggerRef}
      />
    </AppShell>
  );
}

export default App;
