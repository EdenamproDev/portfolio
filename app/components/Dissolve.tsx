"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * A small cloud of pixel-shards rising near a typography element on first
 * appear, then dissolving. Intentionally minimal — a hint of "code falling
 * apart" without becoming a particle showcase.
 *
 * Place inside a relative parent and it overlays without affecting layout.
 */
export function Dissolve({
  count = 22,
  align = "right",
  size = 4,
}: {
  count?: number;
  align?: "left" | "right" | "center";
  size?: number;
}) {
  const reduce = useReducedMotion();

  const shards = useMemo(() => {
    const rng = mulberry(20260513);
    return Array.from({ length: count }, () => ({
      x: rng() * 100 - 50,
      y: rng() * 40,
      delay: rng() * 0.8,
      dx: (rng() - 0.5) * 50,
      dy: -(30 + rng() * 60),
      size: size * (0.6 + rng() * 0.9),
      duration: 1.8 + rng() * 2.0,
    }));
  }, [count, size]);

  if (reduce) return null;

  const anchor =
    align === "right"
      ? "right-2 top-1"
      : align === "left"
      ? "left-2 top-1"
      : "left-1/2 -translate-x-1/2 top-1";

  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute ${anchor} block size-1`}
    >
      {shards.map((s, i) => (
        <motion.span
          key={i}
          className="absolute block rounded-[1px] bg-accent-soft shadow-[0_0_8px_rgba(167,139,250,0.6)]"
          style={{
            width: s.size,
            height: s.size,
            left: s.x,
            top: s.y,
          }}
          initial={{ opacity: 0, x: 0, y: 0 }}
          whileInView={{
            opacity: [0, 1, 0],
            x: s.dx,
            y: s.dy,
          }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            ease: [0.16, 1, 0.3, 1],
          }}
        />
      ))}
    </span>
  );
}

function mulberry(seed: number) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
