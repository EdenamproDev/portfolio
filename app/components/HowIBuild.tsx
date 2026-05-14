"use client";

import { motion } from "framer-motion";
import { Lightbulb, Shapes, RefreshCw, Sparkles } from "lucide-react";
import { fadeUp, stagger } from "./Section";

const steps = [
  {
    icon: Lightbulb,
    label: "Ideation",
    desc: "Identify a real operational problem worth solving and frame it sharply.",
  },
  {
    icon: Shapes,
    label: "Prototyping",
    desc: "Sketch flows, build mobile prototypes, validate ideas in days, not weeks.",
  },
  {
    icon: RefreshCw,
    label: "Iteration",
    desc: "Rapid AI-assisted loops — refining UX, data models and edge cases.",
  },
  {
    icon: Sparkles,
    label: "Refinement",
    desc: "Polish the experience to feel intentional, calm and product-grade.",
  },
];

export function HowIBuild() {
  return (
    <section id="process" className="relative">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 py-28 md:py-36">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="mb-16 max-w-3xl"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted"
          >
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
            How I Build
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-6 text-gradient text-[34px] md:text-[52px] leading-[1.05] tracking-tightest font-semibold"
          >
            Product thinking, paired with AI-assisted velocity.
          </motion.h2>
          <motion.div variants={fadeUp} className="mt-6 space-y-5 max-w-2xl text-[17px] md:text-[19px] leading-relaxed text-ink-muted">
            <p>
              My workflow combines product thinking, AI-assisted development and
              rapid iteration.
            </p>
            <p>
              I usually begin by identifying a real-world operational problem,
              conceptualizing a solution and refining workflows before moving
              into prototyping and implementation.
            </p>
            <p>
              I enjoy leveraging modern AI-assisted workflows to rapidly
              prototype, iterate and build functional applications while
              continuously strengthening my technical understanding.
            </p>
          </motion.div>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="relative grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* connecting line */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-white/10 to-transparent lg:block"
          />
          {steps.map((s, i) => (
            <motion.li
              key={s.label}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-6"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.07] to-transparent" />
              </div>
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-soft transition-colors group-hover:border-accent/40 group-hover:text-accent group-hover:shadow-glow-sm">
                    <s.icon className="size-4.5" />
                  </div>
                  <span className="text-[11px] font-medium tabular-nums text-ink-dim">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-[16px] font-medium tracking-tight text-ink">
                  {s.label}
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                  {s.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
