"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#badgy", label: "Badgy" },
  { href: "#process", label: "Process" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 0.65]);
  const blur = useTransform(scrollY, [0, 80], [0, 14]);
  const border = useTransform(scrollY, [0, 80], [0, 0.08]);

  return (
    <motion.header
      style={{
        backdropFilter: useTransform(blur, (v) => `blur(${v}px) saturate(140%)`),
        WebkitBackdropFilter: useTransform(blur, (v) => `blur(${v}px) saturate(140%)`),
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <motion.div
        style={{
          backgroundColor: useTransform(bgOpacity, (v) => `rgba(11,11,15,${v})`),
          borderBottomColor: useTransform(border, (v) => `rgba(255,255,255,${v})`),
        }}
        className="border-b"
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 md:px-10">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="grid size-7 place-items-center rounded-md bg-gradient-to-br from-accent/90 to-accent-deep shadow-glow-sm">
              <span className="text-[12px] font-semibold tracking-tight text-white">
                E
              </span>
            </span>
            <span className="text-[14px] font-medium tracking-tight text-ink">
              Eden Amzallag
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-ink-muted transition-colors hover:bg-white/[0.04] hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="group relative inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[13px] font-medium text-ink transition-colors hover:bg-white/[0.07]"
          >
            Get in touch
            <span className="text-ink-muted transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
