"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  description?: ReactNode;
  children?: ReactNode;
  className?: string;
  align?: "left" | "center";
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  align = "left",
}: Props) {
  const reduce = useReducedMotion();
  const fade = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
  };
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-7xl px-6 md:px-10 py-28 md:py-36 ${className}`}
    >
      {(eyebrow || title || description) && (
        <motion.header
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className={`mb-14 md:mb-20 max-w-3xl ${
            align === "center" ? "mx-auto text-center" : ""
          }`}
        >
          {eyebrow && (
            <motion.div variants={fade} className="mb-5">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-muted">
                <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
                {eyebrow}
              </span>
            </motion.div>
          )}
          {title && (
            <motion.h2
              variants={fade}
              className="text-gradient text-[34px] md:text-[52px] leading-[1.05] tracking-tightest font-semibold"
            >
              {title}
            </motion.h2>
          )}
          {description && (
            <motion.p
              variants={fade}
              className="mt-6 text-[17px] md:text-[19px] leading-relaxed text-ink-muted"
            >
              {description}
            </motion.p>
          )}
        </motion.header>
      )}
      {children}
    </section>
  );
}

export const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
