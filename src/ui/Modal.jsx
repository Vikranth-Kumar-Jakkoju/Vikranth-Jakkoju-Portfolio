import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const FOCUSABLE_SELECTORS =
  'a[href], button:not([disabled]):not([tabindex="-1"]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function Modal({ isOpen, onClose, title, triggerRef, children }) {
  const dialogRef = useRef(null);
  const titleId = useId();
  const openerRef = useRef(null);

  // Capture opener element when opened
  useEffect(() => {
    if (isOpen) {
      openerRef.current = triggerRef?.current || document.activeElement;
    }
  }, [isOpen, triggerRef]);

  // Lock body scroll while open
  useEffect(() => {
    if (!isOpen) return undefined;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // Focus management, focus trap, and Escape handler
  useEffect(() => {
    if (!isOpen) {
      const opener = openerRef.current;
      if (
        opener &&
        document.contains(opener) &&
        typeof opener.focus === "function"
      ) {
        opener.focus();
      } else {
        const h1 = document.querySelector("h1");
        if (h1) {
          if (!h1.hasAttribute("tabindex")) h1.setAttribute("tabindex", "-1");
          h1.focus();
        }
      }
      return undefined;
    }

    const dialogEl = dialogRef.current;
    if (!dialogEl) return undefined;

    // Move focus into modal
    const focusables = dialogEl.querySelectorAll(FOCUSABLE_SELECTORS);
    if (focusables.length > 0) {
      focusables[0].focus();
    } else {
      dialogEl.focus();
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key === "Tab") {
        const currentFocusables = Array.from(
          dialogEl.querySelectorAll(FOCUSABLE_SELECTORS),
        );
        if (currentFocusables.length === 0) {
          event.preventDefault();
          return;
        }

        const first = currentFocusables[0];
        const last = currentFocusables[currentFocusables.length - 1];

        if (event.shiftKey) {
          if (
            document.activeElement === first ||
            document.activeElement === dialogEl
          ) {
            event.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div
      className="modal-backdrop"
      onClick={handleBackdropClick}
      data-testid="modal-backdrop"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
        className="modal-container"
      >
        <div className="modal-header">
          <h3 id={titleId} className="modal-title">
            {title}
          </h3>
          <button
            type="button"
            className="modal-close-btn"
            aria-label="Close dialog"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );

  return typeof document !== "undefined"
    ? createPortal(modalContent, document.body)
    : modalContent;
}

export default Modal;
