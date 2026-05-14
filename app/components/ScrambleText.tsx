"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

// Deterministic char swap based on (text, index) so SSR and first client
// render match — prevents hydration mismatch warnings.
function stableMask(text: string) {
  return text
    .split("")
    .map((c, i) =>
      /[A-Za-zÀ-ÿ0-9]/.test(c) ? POOL[(i * 7 + c.charCodeAt(0)) % POOL.length] : c
    )
    .join("");
}

/**
 * Resolves text from scrambled characters to its final form, char by char.
 * Triggered once when entering the viewport. Spaces and punctuation lock
 * immediately — only "real" letters scramble — so the silhouette stays
 * readable throughout and the effect feels intentional, not noisy.
 */
const POOL = "01<>{}/=+*[]();._&|#@";

export function ScrambleText({
  text,
  className,
  charDelay = 38,
  cyclesPerChar = 9,
  triggerOnce = true,
  as: As = "span",
}: {
  text: string;
  className?: string;
  charDelay?: number;
  cyclesPerChar?: number;
  triggerOnce?: boolean;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: triggerOnce, margin: "-80px" });
  const reduce = useReducedMotion();
  // Always start from the deterministic mask so SSR HTML === first client
  // HTML. After mount, useEffect either resolves to `text` (reduced motion)
  // or runs the scramble animation.
  const [display, setDisplay] = useState<string>(() => stableMask(text));

  useEffect(() => {
    if (!inView || reduce) {
      setDisplay(text);
      return;
    }
    let frame = 0;
    let cancelled = false;
    const chars = text.split("");
    const resolved = chars.map((c) => !/[A-Za-zÀ-ÿ0-9]/.test(c));

    const tick = () => {
      if (cancelled) return;
      const next = chars
        .map((c, i) => {
          if (resolved[i]) return c;
          const start = i * cyclesPerChar;
          const end = start + cyclesPerChar;
          if (frame >= end) {
            resolved[i] = true;
            return c;
          }
          if (frame >= start) {
            return POOL[Math.floor(Math.random() * POOL.length)];
          }
          return POOL[Math.floor(Math.random() * POOL.length)];
        })
        .join("");
      setDisplay(next);
      frame += 1;
      if (resolved.every(Boolean)) {
        setDisplay(text);
        return;
      }
      timer = window.setTimeout(tick, charDelay);
    };

    let timer = window.setTimeout(tick, charDelay);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [inView, text, charDelay, cyclesPerChar, reduce]);

  const Tag = As as React.ElementType;
  return (
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  );
}

