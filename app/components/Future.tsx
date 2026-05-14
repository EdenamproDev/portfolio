"use client";

import { motion } from "framer-motion";
import { HeartPulse, Accessibility, Cpu, ShieldCheck } from "lucide-react";
import { fadeUp, stagger } from "./Section";

const domains = [
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Accessibility, label: "Accessibility" },
  { icon: Cpu, label: "Operational systems" },
  { icon: ShieldCheck, label: "Defense-related tech" },
];

export function Future() {
  return (
    <section id="future" className="relative">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10 py-28 md:py-36">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="relative overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-b from-white/[0.025] to-transparent p-10 md:p-16"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-accent/15 blur-[120px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -bottom-32 h-[420px] w-[420px] rounded-full bg-accent-deep/15 blur-[120px]"
          />

          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted"
          >
            <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
            Future Interests
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="mt-8 text-gradient-accent text-[32px] md:text-[52px] leading-[1.08] tracking-tightest font-semibold max-w-4xl"
          >
            Where I want my work to matter next.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-3xl text-[18px] md:text-[22px] leading-[1.55] text-ink"
          >
            I’m interested in how AI can reshape fields such as{" "}
            <span className="text-gradient-accent font-medium">healthcare</span>,{" "}
            <span className="text-gradient-accent font-medium">accessibility</span>,{" "}
            <span className="text-gradient-accent font-medium">operational systems</span>{" "}
            and{" "}
            <span className="text-gradient-accent font-medium">
              defense-related technologies
            </span>{" "}
            through smarter automation and real-time decision support.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4"
          >
            {domains.map((d) => (
              <div
                key={d.label}
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.025] px-4 py-3.5"
              >
                <span className="grid size-8 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-accent-soft">
                  <d.icon className="size-4" />
                </span>
                <span className="text-[13.5px] font-medium tracking-tight text-ink">
                  {d.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
