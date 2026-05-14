"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "./Section";

const paragraphs = [
  "I’m fascinated by how AI is transforming the way we build, solve and interact with technology.",
  "What started as a way to bridge the gap between highly theoretical studies and real-world creation quickly became a genuine passion for building products with practical impact.",
  "Through AI-assisted workflows, I began designing and developing mobile applications focused on solving operational problems in real environments.",
  "Today, I see technology — and especially AI — as more than a productivity tool. I believe it has the potential to reshape fields like healthcare, accessibility and human assistance in ways we are only beginning to imagine.",
  "I want to be part of the people building that future.",
];

export function About() {
  return (
    <section id="about" className="relative">
      <div className="mx-auto w-full max-w-5xl px-6 md:px-10 py-28 md:py-40">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted"
          >
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
            About
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-6 text-gradient text-[36px] md:text-[56px] leading-[1.05] tracking-tightest font-semibold"
          >
            A product mind shaped by curiosity for AI.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="grid grid-cols-1 gap-8 md:gap-10 md:grid-cols-[1fr_auto]"
        >
          <div className="space-y-7">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                variants={fadeUp}
                className={`max-w-[60ch] text-[18px] md:text-[20px] leading-[1.65] ${
                  i === paragraphs.length - 1
                    ? "text-gradient font-medium"
                    : "text-ink-muted"
                }`}
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* side meta */}
          <motion.aside
            variants={fadeUp}
            className="hidden md:flex w-[220px] flex-col gap-6 self-start pt-2"
          >
            {[
              ["Focus", "Product · Mobile"],
              ["Methods", "AI-assisted workflows"],
              ["Vision", "Healthcare · Accessibility"],
            ].map(([k, v]) => (
              <div key={k} className="border-l border-white/8 pl-4">
                <p className="text-[10px] uppercase tracking-[0.18em] text-ink-dim">
                  {k}
                </p>
                <p className="mt-1.5 text-[13px] text-ink">{v}</p>
              </div>
            ))}
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
