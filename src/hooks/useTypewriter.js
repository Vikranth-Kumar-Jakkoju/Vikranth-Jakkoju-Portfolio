import { useEffect, useState } from "react";

/**
 * Reveals `text` one character at a time for visual overlays.
 * `skip` returns the full string immediately (no animation).
 */
export function useTypewriter(
  text,
  { enabled = true, charDelayMs = 28, skip = false, onComplete } = {},
) {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (skip || !enabled) {
      return undefined;
    }

    let index = 0;
    let timerId;

    const tick = () => {
      index += 1;
      const next = text.slice(0, index);
      setTyped(next);
      if (index >= text.length) {
        onComplete?.();
        return;
      }
      timerId = window.setTimeout(tick, charDelayMs);
    };

    timerId = window.setTimeout(tick, charDelayMs);
    return () => window.clearTimeout(timerId);
  }, [text, enabled, charDelayMs, skip, onComplete]);

  if (skip) {
    return { displayed: text, done: true };
  }

  if (!enabled) {
    return { displayed: "", done: false };
  }

  const done = text.length > 0 && typed.length >= text.length;
  return { displayed: typed, done };
}

export default useTypewriter;
