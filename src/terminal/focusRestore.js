/**
 * Restores focus after terminal closes.
 * Priority:
 * 1. Opener element (if still mounted and visible)
 * 2. Visible terminal toggle in current layout (dock button, sidebar, mobile bar)
 * 3. Mobile menu button (on mobile)
 * 4. Main <h1> (with tabindex="-1")
 * Never lets focus fall to <body>.
 */
export function restoreTerminalFocus(triggerEl) {
  if (triggerEl && document.contains(triggerEl)) {
    const style = window.getComputedStyle(triggerEl);
    if (style.display !== "none" && style.visibility !== "hidden") {
      triggerEl.focus();
      if (document.activeElement === triggerEl) return;
    }
  }

  // 1. Any visible terminal toggle button
  const dockBtn = document.querySelector(".terminal-dock-btn:not(.is-hidden)");
  if (
    dockBtn &&
    window.getComputedStyle(dockBtn).display !== "none" &&
    window.getComputedStyle(dockBtn).visibility !== "hidden"
  ) {
    dockBtn.focus();
    if (document.activeElement === dockBtn) return;
  }

  const sidebarTermBtn = document.querySelector(
    ".file-tree__action-btn:last-child",
  );
  if (
    sidebarTermBtn &&
    window.getComputedStyle(sidebarTermBtn).display !== "none"
  ) {
    sidebarTermBtn.focus();
    if (document.activeElement === sidebarTermBtn) return;
  }

  const mobileTermBtn = document.querySelector(
    ".mobile-bar__actions button:last-child",
  );
  if (
    mobileTermBtn &&
    window.getComputedStyle(mobileTermBtn).display !== "none"
  ) {
    mobileTermBtn.focus();
    if (document.activeElement === mobileTermBtn) return;
  }

  // 2. Mobile menu button
  const mobileMenuBtn = document.querySelector(".mobile-bar__btn");
  if (
    mobileMenuBtn &&
    window.getComputedStyle(mobileMenuBtn).display !== "none"
  ) {
    mobileMenuBtn.focus();
    if (document.activeElement === mobileMenuBtn) return;
  }

  // 3. Main <h1>
  const h1 = document.querySelector("h1");
  if (h1) {
    if (!h1.hasAttribute("tabindex")) {
      h1.setAttribute("tabindex", "-1");
    }
    h1.focus();
  }
}

export default restoreTerminalFocus;
