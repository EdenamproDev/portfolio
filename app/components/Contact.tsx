"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github } from "lucide-react";
import { fadeUp, stagger } from "./Section";
import { ScrambleText } from "./ScrambleText";
import { Dissolve } from "./Dissolve";

export function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 pt-28 pb-16 md:pt-40 md:pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1.2fr_1fr]"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted"
            >
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
              Contact
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="relative mt-8 text-gradient-accent text-[44px] md:text-[80px] leading-[0.98] tracking-tightest font-semibold"
            >
              <ScrambleText text="Let’s build" cyclesPerChar={6} />
              <br />
              <ScrambleText text="something real." cyclesPerChar={6} />
              <Dissolve count={22} align="right" size={3.5} />
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-[17px] md:text-[19px] leading-relaxed text-ink-muted"
            >
              Open to product-oriented internships, mobile engineering roles and
              early-stage collaborations where AI and operations intersect.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} className="space-y-3">
            <ContactLink
              icon={Mail}
              label="Email"
              value="edenam56@gmail.com"
              href="mailto:edenam56@gmail.com"
            />
            <ContactLink
              icon={Github}
              label="GitHub"
              value="github.com/EdenamproDev"
              href="https://github.com/EdenamproDev"
            />
          </motion.div>
        </motion.div>

        {/* footer rule */}
        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-8 text-[12px] text-ink-dim md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Eden Amzallag. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-accent/80 shadow-[0_0_10px_rgba(139,92,246,0.6)]" />
            Designed & built with intent.
          </span>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.02] px-5 py-4 transition-colors hover:border-white/15 hover:bg-white/[0.04]"
    >
      <div className="flex items-center gap-3.5">
        <span className="grid size-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-accent-soft transition-colors group-hover:border-accent/40 group-hover:text-accent">
          <Icon className="size-4" />
        </span>
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-ink-dim">
            {label}
          </p>
          <p className="mt-0.5 text-[15px] font-medium tracking-tight text-ink">
            {value}
          </p>
        </div>
      </div>
      <ArrowUpRight className="size-4 text-ink-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
    </a>
  );
}
