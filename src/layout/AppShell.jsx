import SkipLink from "./SkipLink.jsx";

function AppShell({ mobileBar, nav, navOpen, onCloseNav, children }) {
  return (
    <div className="app-shell">
      <div className="app-shell__nav-column">
        {mobileBar}
        {navOpen && (
          <button
            type="button"
            className="nav-backdrop is-open"
            aria-label="Close menu"
            onClick={onCloseNav}
          />
        )}
        <aside
          id="site-file-tree"
          className={
            navOpen ? "app-shell__nav-slot is-open" : "app-shell__nav-slot"
          }
          aria-label="Site navigation"
        >
          {nav}
        </aside>
      </div>
      <div className="app-shell__main">
        <SkipLink />
        <main id="main-content" className="app-shell__content" tabIndex={-1}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default AppShell;
