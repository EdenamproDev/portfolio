"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Download } from "lucide-react";
import { PhoneBadgy } from "./PhoneBadgy";
import { fadeUp, stagger } from "./Section";
import { CodeParticles } from "./CodeParticles";
import { ScrambleText } from "./ScrambleText";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  // Apple-style parallax: phone drifts up + scales down a touch as you scroll past
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const phoneScale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const phoneOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.4]);
  // Headline drifts slightly slower for cinematic depth
  const textY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32"
    >
      {/* Background atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.25]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 50% 30%, black 30%, transparent 75%)",
          }}
        />
        {/* purple blobs — slow drift for atmospheric depth */}
        <div className="drift-slow absolute right-[-10%] top-[-10%] h-[620px] w-[620px] rounded-full bg-accent/25 blur-[140px]" />
        <div
          className="drift-slow absolute left-[-15%] top-[20%] h-[460px] w-[460px] rounded-full bg-accent-deep/20 blur-[140px]"
          style={{ animationDelay: "-7s" }}
        />
        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
      </div>

      {/* Drifting code tokens — atmosphere layer */}
      <CodeParticles count={20} />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{ y: textY }}
          className="relative"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
              <span className="relative flex size-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-accent/60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-accent" />
              </span>
              <ScrambleText text="AI-Assisted Product Builder" />
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="mt-7 text-[44px] leading-[1.04] tracking-tightest font-semibold md:text-[68px]"
          >
            <span className="text-gradient">Building modern mobile </span>
            <span className="text-gradient-accent">products</span>
            <span className="text-gradient"> for real-world operations.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-[17px] leading-relaxed text-ink-muted md:text-[19px]"
          >
            Computer Science student exploring the intersection of product
            thinking, mobile development and modern AI workflows.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
            <motion.a
              href="#badgy"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="btn-shine group relative inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-[14px] font-medium tracking-tight text-black shadow-[0_8px_30px_-12px_rgba(255,255,255,0.5)]"
            >
              View Projects
              <ArrowRight className="size-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0.5" />
            </motion.a>
            <motion.a
              href="/cv.pdf"
              download="Eden-Amzallag-CV.pdf"
              whileHover={{ y: -2, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 py-3 text-[14px] font-medium tracking-tight text-ink transition-colors hover:border-accent/30 hover:bg-white/[0.07]"
            >
              <Download className="size-4 text-ink-muted transition-colors group-hover:text-ink" />
              Download CV
            </motion.a>
          </motion.div>

          {/* mini meta row */}
          <motion.div
            variants={fadeUp}
            className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12px] text-ink-dim"
          >
            <span className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-ink-dim" />
              CS Student
            </span>
            <span className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-ink-dim" />
              React Native · Expo · Supabase
            </span>
            <span className="flex items-center gap-2">
              <span className="size-1 rounded-full bg-ink-dim" />
              Available for product internships
            </span>
          </motion.div>
        </motion.div>

        {/* Right: phone (scroll-linked parallax) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          style={{ y: phoneY, scale: phoneScale, opacity: phoneOpacity }}
          className="relative flex items-center justify-center lg:justify-end will-change-transform"
        >
          <PhoneBadgy variant="home" />
        </motion.div>
      </div>
    </section>
  );
}
