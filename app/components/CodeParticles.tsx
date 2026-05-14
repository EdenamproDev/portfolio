"use client";

import { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Drifting code tokens — restrained background atmosphere.
 * Tokens float slowly with subtle Y drift + opacity breathing.
 * Opacity capped low (~6-12%) so it never competes with content.
 */
const TOKENS = [
  "const",
  "{ }",
  "=>",
  "<Hero />",
  "useEffect",
  "async",
  "// build",
  "</>",
  "props",
  "0x8B5CF6",
  "type",
  "[ ]",
  "import",
  "( )",
  "AI",
  "→",
  "0b1010",
  "&&",
  "null",
  "tsx",
];

type Particle = {
  token: string;
  x: number;
  y: number;
  delay: number;
  duration: number;
  drift: number;
  scale: number;
  opacity: number;
};

export function CodeParticles({ count = 18 }: { count?: number }) {
  const reduce = useReducedMotion();

  const particles = useMemo<Particle[]>(() => {
    // Deterministic pseudo-random so tokens don't reshuffle on hot-reload.
    const rng = mulberry32(8675309);
    return Array.from({ length: count }, (_, i) => ({
      token: TOKENS[i % TOKENS.length],
      x: rng() * 100,
      y: rng() * 100,
      delay: rng() * 6,
      duration: 14 + rng() * 12,
      drift: 18 + rng() * 28,
      scale: 0.9 + rng() * 0.6,
      opacity: 0.14 + rng() * 0.14,
    }));
  }, [count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden [mask-image:radial-gradient(ellipse_at_50%_45%,black_55%,transparent_95%)]"
    >
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute select-none font-mono text-[13px] font-medium tracking-tight text-accent-soft"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            opacity: p.opacity,
            transform: `scale(${p.scale})`,
          }}
          animate={
            reduce
              ? undefined
              : {
                  y: [0, -p.drift, 0],
                  opacity: [p.opacity, Math.min(p.opacity * 2.2, 0.5), p.opacity * 0.3],
                }
          }
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {p.token}
        </motion.span>
      ))}
    </div>
  );
}

// Tiny seeded RNG so layout is stable between SSR and hydration.
function mulberry32(seed: number) {
  let t = seed >>> 0;
  return function () {
    t = (t + 0x6d2b79f5) >>> 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}
