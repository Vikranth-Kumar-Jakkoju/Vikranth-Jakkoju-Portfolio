import { useEffect, useState } from "react";

/**
 * Highlights the section with the strongest intersection near the top of the viewport.
 * `ids` are current DOM ids (see sectionAnchors).
 */
export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0] ?? "");
  const key = ids.join(",");

  useEffect(() => {
    const list = key.split(",").filter(Boolean);
    const elements = list
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const ratios = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          ratios.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        });

        let bestId = list[0];
        let bestRatio = 0;
        list.forEach((id) => {
          const ratio = ratios.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        if (bestRatio > 0) {
          setActiveId(bestId);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [key]);

  return activeId;
}

export default useScrollSpy;
