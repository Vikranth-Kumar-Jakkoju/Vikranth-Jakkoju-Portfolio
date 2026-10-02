import "./MobileBar.css";

function MobileBar({ menuOpen, onToggleMenu, onOpenPalette }) {
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
      </div>
    </div>
  );
}

export default MobileBar;
