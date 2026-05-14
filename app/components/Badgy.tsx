"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Activity,
  CalendarClock,
  Megaphone,
  UserCheck,
  BarChart3,
  Bell,
  LayoutDashboard,
} from "lucide-react";
import {
  Users as UsersNav,
  Calendar as CalNav,
  CheckSquare,
  AlertTriangle,
  Megaphone as MegaphoneNav,
  BarChart3 as BarNav,
  MapPin as MapNav,
} from "lucide-react";
import { PhoneBadgy } from "./PhoneBadgy";
import { fadeUp, stagger } from "./Section";
import { ScrambleText } from "./ScrambleText";
import { Dissolve } from "./Dissolve";

const features = [
  {
    icon: MapPin,
    title: "GPS-based check-in",
    desc: "Geofenced check-in & check-out with real-time location validation.",
  },
  {
    icon: Activity,
    title: "Real-time activity",
    desc: "Live view of who is active, where, and for how long across sites.",
  },
  {
    icon: CalendarClock,
    title: "Smart scheduling",
    desc: "Shift planning and task allocation built for distributed teams.",
  },
  {
    icon: Megaphone,
    title: "Multi-site announcements",
    desc: "Push critical information instantly to specific sites or teams.",
  },
  {
    icon: UserCheck,
    title: "Attendance & absence",
    desc: "Track presence patterns, absences and justifications in one place.",
  },
  {
    icon: BarChart3,
    title: "Live statistics",
    desc: "Operational metrics surfaced in a clean, decision-ready dashboard.",
  },
  {
    icon: Bell,
    title: "Instant notifications",
    desc: "Contextual alerts for managers and field employees in real time.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin web dashboard",
    desc: "A companion control center designed for operations managers.",
  },
];

export function Badgy() {
  return (
    <section id="badgy" className="relative">
      {/* atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-32 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/12 blur-[140px]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-6 md:px-10 py-28 md:py-40">
        {/* header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-120px" }}
          variants={stagger}
          className="mb-20 md:mb-28 max-w-3xl"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-accent-soft">
              Featured Project
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-ink-dim">
              2025 → present
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="relative mt-6 inline-block text-gradient-accent text-[40px] md:text-[64px] leading-[1.04] tracking-tightest font-semibold"
          >
            <ScrambleText text="Badgy" cyclesPerChar={10} charDelay={28} />
            <Dissolve count={18} align="right" size={3} />
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-[18px] md:text-[21px] leading-relaxed text-ink-muted"
          >
            Badgy is an AI-assisted workforce management platform designed to
            modernize employee supervision, attendance tracking and operational
            coordination.
          </motion.p>
        </motion.div>

        {/* Problem / Solution split */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8"
        >
          <motion.div
            variants={fadeUp}
            className="surface-card p-8 md:p-10 relative overflow-hidden"
          >
            <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-dim">
              <span className="size-1.5 rounded-full bg-rose-400/80" />
              The Problem
            </div>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-ink">
              Traditional employee badge systems often lack flexibility,
              real-time visibility and operational coordination features,
              especially across multiple work sites.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="surface-card p-8 md:p-10 relative overflow-hidden"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/20 blur-3xl"
            />
            <div className="mb-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-dim">
              <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_rgba(139,92,246,0.8)]" />
              The Solution
            </div>
            <p className="text-[17px] md:text-[19px] leading-relaxed text-ink">
              Badgy transforms attendance tracking into a modern mobile
              experience combining geolocation validation, live workforce
              monitoring and operational management tools.
            </p>
          </motion.div>
        </motion.div>

        {/* Product showcase */}
        <div className="relative mt-24 md:mt-32 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1 overflow-hidden"
          >
            <div className="origin-top-left scale-[0.7] sm:scale-[0.85] md:scale-[0.95] lg:scale-100 -mr-[30%] sm:-mr-[15%] md:-mr-[5%] lg:mr-0 -mb-[35%] sm:-mb-[18%] md:-mb-[5%] lg:mb-0">
              <AdminDashboardPreview />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="order-1 lg:order-2"
          >
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-dim">
              Product surface
            </span>
            <h3 className="mt-4 text-gradient text-[28px] md:text-[40px] leading-[1.1] tracking-tightest font-semibold">
              One mobile app for the field. One dashboard for operations.
            </h3>
            <p className="mt-5 max-w-xl text-[16px] md:text-[18px] leading-relaxed text-ink-muted">
              The mobile experience focuses on speed and clarity for employees
              on the ground. The web dashboard gives managers a calm,
              decision-ready view of the entire operation in real time.
            </p>
            <ul className="mt-8 space-y-3 text-[15px] text-ink-muted">
              {[
                "Designed for daily field use, not occasional admin work",
                "Information density tuned for ops leaders, not engineers",
                "Built end-to-end with AI-assisted iteration",
              ].map((l) => (
                <li key={l} className="flex items-start gap-2.5">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="mt-28 md:mt-36">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="mb-12 max-w-2xl"
          >
            <motion.span
              variants={fadeUp}
              className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink-dim"
            >
              What it does
            </motion.span>
            <motion.h3
              variants={fadeUp}
              className="mt-4 text-gradient text-[28px] md:text-[40px] leading-[1.1] tracking-tightest font-semibold"
            >
              Designed around how operations actually run.
            </motion.h3>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((f) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-bg p-6 md:p-7"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.07] to-transparent" />
                </div>
                <div className="relative">
                  <div className="mb-5 grid size-9 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-accent-soft transition-colors group-hover:border-accent/40 group-hover:text-accent">
                    <f.icon className="size-4" />
                  </div>
                  <h4 className="text-[15px] font-medium tracking-tight text-ink">
                    {f.title}
                  </h4>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-ink-muted">
                    {f.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Geolocation spotlight */}
        <div className="mt-28 md:mt-36">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden rounded-[28px] border border-white/8 bg-gradient-to-b from-white/[0.03] to-transparent p-8 md:p-14"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 -right-20 h-[420px] w-[420px] rounded-full bg-accent-deep/20 blur-[120px]"
            />

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-accent-soft">
                  Feature Spotlight
                </span>
                <h3 className="mt-6 text-gradient-accent text-[30px] md:text-[44px] leading-[1.08] tracking-tightest font-semibold">
                  Precise geolocation validation.
                </h3>
                <p className="mt-5 max-w-xl text-[16px] md:text-[18px] leading-relaxed text-ink-muted">
                  One of the main challenges behind Badgy was ensuring accurate
                  employee location validation in dense urban environments.
                </p>
                <p className="mt-4 max-w-xl text-[16px] md:text-[18px] leading-relaxed text-ink-muted">
                  The system was designed to leverage detailed mapping and
                  real-time geolocation logic to improve attendance reliability
                  and reduce inaccurate check-ins.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
                  {[
                    ["~5m", "Accuracy target"],
                    ["Geo-fenced", "Per worksite"],
                    ["Real-time", "Validation"],
                  ].map(([v, k]) => (
                    <div key={k} className="rounded-xl border border-white/8 bg-white/[0.02] p-3">
                      <p className="text-[16px] font-semibold tracking-tight text-ink">
                        {v}
                      </p>
                      <p className="mt-0.5 text-[11px] uppercase tracking-wider text-ink-dim">
                        {k}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <MapSpotlight />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────
   Faithful reproduction of apps/admin (Badgy dashboard)
   - Sidebar w-60, Logo + "Badgy" + "ADMIN"
   - Real nav items in French (Activité, Opérateurs, Agenda…)
   - Violet active state with ring-1 ring-violet-500/30
   - Light theme (bg-gray-50, white sidebar)
   - Statistics page: monthly hours, weekly chart, employee list
   ──────────────────────────────────────────────────────────── */
function AdminDashboardPreview() {
  type NavItem = {
    label: string;
    icon: typeof BarNav;
    active: boolean;
    badge?: number;
  };
  const navItems: NavItem[] = [
    { label: "Activité", icon: BarNav, active: true },
    { label: "Opérateurs", icon: UsersNav, active: false },
    { label: "Agenda", icon: CalNav, active: false },
    { label: "Tâches", icon: CheckSquare, active: false },
    { label: "Sites", icon: MapNav, active: false },
    { label: "Incidents", icon: AlertTriangle, active: false, badge: 2 },
    { label: "Annonces", icon: MegaphoneNav, active: false },
  ];

  return (
    <div className="relative">
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] bg-accent/15 blur-3xl"
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0e0e16] shadow-[0_30px_120px_-30px_rgba(139,92,246,0.45)]">
        {/* mac chrome */}
        <div className="flex items-center gap-2 border-b border-white/5 bg-[#15151f] px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="size-2.5 rounded-full bg-white/10" />
          <span className="ml-3 text-[11px] text-ink-dim">
            badgy.app / activité
          </span>
        </div>

        {/* Real Badgy admin shell — light theme */}
        <div className="grid grid-cols-[180px_1fr] bg-gray-50 text-[#2D3436]">
          {/* Sidebar */}
          <aside className="border-r border-gray-200 bg-white px-3 py-4">
            {/* Logo block */}
            <div className="mb-4 flex items-center gap-2 px-2 pb-3 border-b border-gray-100">
              <div
                className="grid size-7 place-items-center rounded-lg shadow-[0_4px_14px_-4px_rgba(139,92,246,0.6)]"
                style={{
                  background:
                    "linear-gradient(135deg, #6C5CE7 0%, #A78BFA 100%)",
                }}
              >
                <span className="text-[12px] font-extrabold text-white">B</span>
              </div>
              <div className="leading-none">
                <p className="text-[13px] font-bold text-gray-900">Badgy</p>
                <p className="mt-0.5 text-[8px] font-bold uppercase tracking-wider text-gray-400">
                  Admin
                </p>
              </div>
            </div>

            <p className="px-2 py-1.5 text-[8px] font-bold uppercase tracking-wider text-gray-400">
              Application
            </p>
            <ul className="mt-1 space-y-0.5">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <div
                      className={
                        item.active
                          ? "flex items-center gap-2 rounded-lg bg-gradient-to-r from-violet-500/15 to-violet-500/5 px-2.5 py-1.5 text-[12px] font-semibold text-violet-700 ring-1 ring-violet-500/30 shadow-[0_4px_14px_-6px_rgba(139,92,246,0.4)]"
                          : "flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[12px] font-medium text-gray-600 hover:bg-gray-50"
                      }
                    >
                      <Icon
                        className={
                          item.active
                            ? "size-3.5 text-violet-600"
                            : "size-3.5 text-gray-400"
                        }
                      />
                      <span>{item.label}</span>
                      {item.badge !== undefined && (
                        <span className="ml-auto rounded-full bg-rose-500 px-1.5 py-px text-[8px] font-bold text-white">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </aside>

          {/* Main */}
          <div className="p-5">
            {/* page header */}
            <div className="flex items-end justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Activité · mai 2026
                </p>
                <h3 className="mt-1 text-[17px] font-bold tracking-tight text-gray-900">
                  Vue d&apos;ensemble
                </h3>
              </div>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[9px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
                +12% vs avril
              </span>
            </div>

            {/* KPI tiles */}
            <div className="mt-4 grid grid-cols-4 gap-2.5">
              {[
                ["Heures", "1 248h"],
                ["Pointages", "342"],
                ["Retards", "11"],
                ["Absences", "3"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-xl border border-gray-200 bg-white p-2.5"
                >
                  <p className="text-[8px] font-bold uppercase tracking-wider text-gray-400">
                    {k}
                  </p>
                  <p className="mt-1 text-[15px] font-bold tracking-tight text-gray-900 tabular-nums">
                    {v}
                  </p>
                </div>
              ))}
            </div>

            {/* Weekly hours chart */}
            <div className="mt-3 rounded-xl border border-gray-200 bg-white p-3">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Heures · 4 dernières semaines
                </p>
                <p className="text-[9px] font-semibold text-gray-500">
                  Cumul 312h
                </p>
              </div>
              <svg viewBox="0 0 320 60" className="mt-2 block h-14 w-full">
                <defs>
                  <linearGradient id="adminBar" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#6C5CE7" />
                  </linearGradient>
                </defs>
                {[
                  [0, 36],
                  [70, 20],
                  [140, 12],
                  [210, 6],
                ].map(([x, y], i) => (
                  <rect
                    key={i}
                    x={x}
                    y={y}
                    width="54"
                    height={60 - y}
                    rx="4"
                    fill={i === 3 ? "url(#adminBar)" : "#E5DFF7"}
                  />
                ))}
              </svg>
              <div className="mt-1.5 flex justify-between text-[8px] font-medium text-gray-400">
                <span>S17</span>
                <span>S18</span>
                <span>S19</span>
                <span>S20</span>
              </div>
            </div>

            {/* Employee rows */}
            <div className="mt-3 rounded-xl border border-gray-200 bg-white">
              <div className="flex items-center justify-between border-b border-gray-100 px-3 py-2">
                <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Opérateurs · aujourd&apos;hui
                </p>
                <p className="text-[9px] font-semibold text-gray-500">
                  18 actifs
                </p>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  ["Sarah Levi", "Bureau Tel-Aviv", "7h12", "#00B894"],
                  ["David Cohen", "Bureau Jérusalem", "6h48", "#00B894"],
                  ["Yael Mizrahi", "Bureau Tel-Aviv", "5h32", "#6C5CE7"],
                ].map(([n, s, h, c]) => (
                  <div
                    key={n}
                    className="flex items-center justify-between px-3 py-2"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="grid size-6 place-items-center rounded-full text-[9px] font-bold text-white"
                        style={{ backgroundColor: c }}
                      >
                        {(n as string).split(" ").map((x) => x[0]).join("")}
                      </span>
                      <div className="leading-tight">
                        <p className="text-[11px] font-semibold text-gray-900">
                          {n}
                        </p>
                        <p className="text-[9px] text-gray-400">{s}</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-bold tabular-nums text-gray-700">
                      {h}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapSpotlight() {
  return (
    <div className="relative">
      <PhoneBadgy variant="history" float />
    </div>
  );
}
