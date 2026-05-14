"use client";

import { motion } from "framer-motion";
import {
  Smartphone,
  Network,
  Database,
  Workflow,
  Paintbrush,
} from "lucide-react";
import { fadeUp, stagger } from "./Section";

const items = [
  {
    icon: Smartphone,
    title: "Mobile app architecture",
    desc: "Structuring React Native apps that scale beyond a single feature.",
  },
  {
    icon: Network,
    title: "APIs & backend communication",
    desc: "Building reliable client/server contracts and graceful failure modes.",
  },
  {
    icon: Database,
    title: "Databases & auth flows",
    desc: "Modeling data and authentication for real product use cases.",
  },
  {
    icon: Workflow,
    title: "Product-oriented workflows",
    desc: "Shipping iteratively, with users and outcomes in mind from day one.",
  },
  {
    icon: Paintbrush,
    title: "UI/UX refinement",
    desc: "Sharpening mobile experiences until they feel inevitable.",
  },
];

export function Learning() {
  return (
    <section id="learning" className="relative">
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
            Currently Learning
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-6 text-gradient text-[34px] md:text-[52px] leading-[1.05] tracking-tightest font-semibold"
          >
            Sharpening the craft, deliberately.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((it) => (
            <motion.div
              key={it.title}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-7"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.08] via-transparent to-transparent" />
              </div>
              <div className="relative">
                <div className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-soft transition-colors group-hover:border-accent/40 group-hover:text-accent">
                  <it.icon className="size-4.5" />
                </div>
                <h3 className="mt-6 text-[16px] font-medium tracking-tight text-ink">
                  {it.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-muted">
                  {it.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
