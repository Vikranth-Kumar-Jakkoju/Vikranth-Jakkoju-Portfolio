import "./MobileBar.css";

function MobileBar({
  menuOpen,
  onToggleMenu,
  onOpenPalette,
  onToggleTerminal,
  isTerminalOpen,
}) {
  return (
    <div className="mobile-bar">
      <span className="mobile-bar__brand">vikranth/</span>
      <div className="mobile-bar__actions">
        <button
          type="button"
          className="mobile-bar__btn"
          aria-expanded={menuOpen}
          aria-controls="site-file-tree"
          onClick={onToggleMenu}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <button
          type="button"
          className="mobile-bar__btn"
          onClick={(event) => onOpenPalette(event.currentTarget)}
        >
          Commands
        </button>
        <button
          type="button"
          className={
            isTerminalOpen ? "mobile-bar__btn is-active" : "mobile-bar__btn"
          }
          aria-expanded={isTerminalOpen}
          aria-controls="developer-terminal"
          onClick={(event) => onToggleTerminal?.(event.currentTarget)}
        >
          &gt;_ Term
        </button>
      </div>
    </div>
  );
}

export default MobileBar;
