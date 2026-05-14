"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./Section";

const stack = [
  { name: "React Native", group: "Mobile" },
  { name: "Expo", group: "Mobile" },
  { name: "Supabase", group: "Backend" },
  { name: "APIs", group: "Backend" },
  { name: "GitHub", group: "Tooling" },
  { name: "VS Code", group: "Tooling" },
  { name: "AI-assisted workflows", group: "Method" },
];

export function Stack() {
  return (
    <section id="stack" className="relative">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 py-28 md:py-36">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mb-14 max-w-3xl"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted"
          >
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
            Tech Stack
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-6 text-gradient text-[34px] md:text-[52px] leading-[1.05] tracking-tightest font-semibold"
          >
            The tools I reach for, every day.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/[0.04] sm:grid-cols-3 lg:grid-cols-4"
        >
          {stack.map((s, i) => (
            <motion.div
              key={s.name}
              variants={fadeUp}
              className="group relative bg-bg p-6"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.06] to-transparent" />
              </div>
              <div className="relative">
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-dim">
                  {s.group}
                </span>
                <p className="mt-3 text-[17px] font-medium tracking-tight text-ink">
                  {s.name}
                </p>
                <span className="absolute right-0 top-0 text-[10px] tabular-nums text-ink-dim/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          ))}
          {/* filler to keep grid clean on large */}
          <div className="hidden bg-bg p-6 lg:block">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-dim">
              And more
            </span>
            <p className="mt-3 text-[15px] text-ink-muted">
              Always learning, always shipping.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
