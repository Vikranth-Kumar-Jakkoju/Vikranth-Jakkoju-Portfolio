import SkipLink from "./SkipLink.jsx";

function AppShell({ children }) {
  return (
    <div className="app-shell">
      <SkipLink />
      <aside
        className="app-shell__nav-slot"
        aria-label="Site navigation"
        aria-hidden="true"
      >
        <p className="app-shell__nav-placeholder">nav — coming in step 3</p>
      </aside>
      <div className="app-shell__main">
        <main id="main-content" className="app-shell__content" tabIndex={-1}>
          {children}
        </main>
      </div>
    </div>
  );
}

export default AppShell;
