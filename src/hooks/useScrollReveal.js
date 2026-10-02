import { useEffect, useRef, useState } from "react";
import usePrefersReducedMotion from "./usePrefersReducedMotion.js";

/**
 * Lightweight scroll-reveal hook using IntersectionObserver.
 * - Instantly visible if prefers-reduced-motion is requested.
 * - Instantly visible if IntersectionObserver is not supported.
 * - Content remains visible if JS animation fails to execute.
 */
export function useScrollReveal(options = {}) {
  const reducedMotion = usePrefersReducedMotion();
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (reducedMotion) return undefined;

    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return undefined;
    }

    const node = elementRef.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasIntersected(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? "0px 0px -40px 0px",
      },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion, options.threshold, options.rootMargin]);

  const isRevealed =
    reducedMotion ||
    hasIntersected ||
    (typeof window !== "undefined" && !("IntersectionObserver" in window));

  return { ref: elementRef, isRevealed };
}

export default useScrollReveal;
