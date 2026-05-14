"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

type Props = {
  to: number;
  /** ms */
  duration?: number;
  /** decimal places */
  decimals?: number;
  /** prepended to formatted number */
  prefix?: string;
  /** appended to formatted number */
  suffix?: string;
  /** thousands separator, default " " (narrow space) */
  thousandsSep?: string;
  /** decimal separator, default "." */
  decimalSep?: string;
  className?: string;
};

export function CountUp({
  to,
  duration = 1400,
  decimals = 0,
  prefix = "",
  suffix = "",
  thousandsSep = " ",
  decimalSep = ".",
  className = "",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out-expo, very Apple-like
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
      setValue(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduce]);

  const formatted = formatNumber(value, decimals, thousandsSep, decimalSep);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

function formatNumber(
  n: number,
  decimals: number,
  thousandsSep: string,
  decimalSep: string
) {
  const fixed = n.toFixed(decimals);
  const [intPart, decPart] = fixed.split(".");
  const withSep = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSep);
  return decPart ? `${withSep}${decimalSep}${decPart}` : withSep;
}
