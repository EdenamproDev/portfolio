"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Bell,
  Sun,
  LogIn,
  Coffee,
  Briefcase,
  LogOut,
  CheckCircle2,
  BarChart3,
} from "lucide-react";

type Variant = "home" | "history";

export function PhoneBadgy({
  variant = "home",
  float = true,
  scale = 1,
}: {
  variant?: Variant;
  float?: boolean;
  scale?: number;
}) {
  return (
    <motion.div
      animate={float ? { y: [0, -8, 0] } : undefined}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      style={{ transform: `scale(${scale})` }}
      className="relative mx-auto"
    >
      {/* Soft glow behind */}
      <div className="pointer-events-none absolute -inset-12 -z-10">
        <div className="absolute inset-0 rounded-[80px] bg-accent/20 blur-[80px]" />
      </div>

      {/* Phone frame */}
      <div className="relative h-[620px] w-[300px] rounded-[52px] border border-white/10 bg-gradient-to-b from-[#1a1a24] to-[#0e0e15] p-[6px] shadow-[0_30px_120px_-20px_rgba(139,92,246,0.45),0_0_0_1px_rgba(255,255,255,0.04)_inset]">
        {/* side buttons */}
        <span className="absolute -left-[3px] top-[120px] h-16 w-[3px] rounded-l-full bg-white/10" />
        <span className="absolute -left-[3px] top-[200px] h-24 w-[3px] rounded-l-full bg-white/10" />
        <span className="absolute -right-[3px] top-[160px] h-28 w-[3px] rounded-r-full bg-white/10" />

        {/* screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[46px] bg-white">
          {/* dynamic island */}
          <div className="absolute left-1/2 top-2 z-30 h-[26px] w-[96px] -translate-x-1/2 rounded-full bg-black" />

          {/* status bar */}
          <div className="relative z-20 flex items-center justify-between px-7 pt-3 text-[11px] font-semibold text-white/95">
            <span>9:41</span>
            <span className="flex items-center gap-1">
              <span className="size-2 rounded-[2px] bg-white/95" />
              <span className="size-2 rounded-[2px] bg-white/95" />
              <span className="ml-1 inline-block h-2 w-4 rounded-[2px] border border-white/90" />
            </span>
          </div>

          {/* content */}
          <div className="relative z-10 -mt-7 h-full overflow-hidden">
            {variant === "home" ? <HomeScreen /> : <HistoryScreen />}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ────────────────────────────────────────────────────────────
   Faithful reproduction of apps/mobile/app/(employee)/index.tsx
   - Hero gradient #6C5CE7 → #8B7CF6 → #A78BFA
   - Greeting "Salut, Eden 👋" + date in French
   - Live timer "EN COURS"
   - KPI strip: Heures (7j) / Ponctualité / Jours / Tâches
   - Weekly bar chart card
   - "SUR SITE" detection card with green accent #00B894
   - Badge button gradient
   ──────────────────────────────────────────────────────────── */
function HomeScreen() {
  return (
    <div className="h-full overflow-hidden">
      {/* HERO GRADIENT */}
      <div
        className="relative px-5 pt-12 pb-5"
        style={{
          background:
            "linear-gradient(135deg, #6C5CE7 0%, #8B7CF6 50%, #A78BFA 100%)",
        }}
      >
        {/* decorative circles */}
        <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -left-8 -bottom-12 size-24 rounded-full bg-white/8" />

        <div className="relative flex items-start justify-between">
          <div className="min-w-0">
            <p className="text-[10px] font-medium uppercase tracking-wider text-white/75">
              samedi 13 mai
            </p>
            <h2 className="mt-1 text-[18px] font-bold tracking-tight text-white">
              Salut, Eden <span aria-hidden>👋</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <div className="grid size-8 place-items-center rounded-full bg-white/20">
              <Sun className="size-3.5 text-white" />
            </div>
            <div className="grid size-9 place-items-center rounded-full bg-white text-[#6C5CE7]">
              <span className="text-[14px] font-bold">E</span>
            </div>
          </div>
        </div>

        {/* Live timer */}
        <div className="relative mt-4 flex items-center justify-between rounded-2xl bg-white/15 px-3.5 py-2.5 backdrop-blur-sm">
          <div className="flex items-center gap-1.5">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-white/70" />
              <span className="relative size-2 rounded-full bg-white" />
            </span>
            <span className="text-[9px] font-bold uppercase tracking-wider text-white/85">
              EN COURS
            </span>
          </div>
          <span className="text-[18px] font-bold tabular-nums text-white">
            7h12:48
          </span>
        </div>

        {/* KPI strip */}
        <div className="relative mt-4 grid grid-cols-4 gap-1.5">
          <Kpi label="Heures (7j)" value="32.5h" />
          <Kpi label="Ponctualité" value="96%" />
          <Kpi label="Jours" value="5/7" />
          <Kpi label="Tâches" value="3/4" />
        </div>
      </div>

      {/* Below the hero — light surface */}
      <div className="bg-[#FAFAFB] px-4 pt-4 space-y-3">
        {/* Weekly hours chart card */}
        <div className="rounded-2xl border border-[#EDE8FA] bg-white p-3.5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="grid size-7 place-items-center rounded-lg bg-[#F0EDFF]">
                <BarChart3 className="size-3.5 text-[#6C5CE7]" />
              </div>
              <span className="text-[12px] font-semibold text-[#2D3436]">
                Heures de la semaine
              </span>
            </div>
            <span className="text-[10px] font-medium text-[#636E72]">
              32.5h cumulées
            </span>
          </div>
          <div className="mt-3 flex items-end justify-between gap-1.5 h-[58px]">
            {[
              { d: "L", h: 38 },
              { d: "M", h: 52 },
              { d: "M", h: 44 },
              { d: "J", h: 56 },
              { d: "V", h: 48 },
              { d: "S", h: 0 },
              { d: "D", h: 0 },
            ].map((b, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div className="relative flex h-full w-full flex-col justify-end">
                  <div
                    className={`w-full rounded-t-[4px] ${
                      i === 4
                        ? "bg-gradient-to-t from-[#6C5CE7] to-[#A78BFA]"
                        : b.h > 0
                        ? "bg-[#E5DFF7]"
                        : "bg-[#F4F0FF]"
                    }`}
                    style={{ height: `${b.h}%` }}
                  />
                </div>
                <span
                  className={`text-[9px] font-semibold ${
                    i === 4 ? "text-[#6C5CE7]" : "text-[#B2BEC3]"
                  }`}
                >
                  {b.d}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Site detection — SUR SITE */}
        <div className="flex items-center gap-3 rounded-2xl border-2 border-[#00B894]/30 bg-[#E8FFF8] px-3.5 py-3">
          <div className="grid size-9 place-items-center rounded-xl bg-[#00B894]/15">
            <MapPin className="size-4 text-[#00B894]" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1">
              <span className="text-[9px] font-bold uppercase tracking-wider text-[#00B894]">
                SUR SITE
              </span>
              <CheckCircle2 className="size-3 text-[#00B894]" />
            </div>
            <p className="text-[13px] font-semibold text-[#2D3436]">
              Bureau Tel-Aviv
            </p>
            <p className="text-[8px] font-bold uppercase tracking-wider text-[#636E72]">
              PRÉCISION GPS : 7M
            </p>
          </div>
          <div className="rounded-full bg-[#00B894]/15 px-2 py-0.5">
            <span className="text-[10px] font-bold text-[#00B894]">12m</span>
          </div>
        </div>

        {/* Badge button */}
        <button
          className="relative w-full overflow-hidden rounded-2xl py-3.5 shadow-[0_8px_24px_-8px_rgba(108,92,231,0.5)]"
          style={{
            background:
              "linear-gradient(135deg, #6C5CE7 0%, #8B7CF6 100%)",
          }}
        >
          <span className="flex items-center justify-center gap-2 text-[13px] font-bold tracking-tight text-white">
            <Briefcase className="size-4" />
            Reprendre le travail
          </span>
        </button>
      </div>
    </div>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/12 px-2 py-2 backdrop-blur-sm">
      <p className="text-[14px] font-bold tabular-nums text-white">{value}</p>
      <p className="mt-0.5 text-[8px] font-semibold uppercase tracking-wider text-white/75 leading-tight">
        {label}
      </p>
    </div>
  );
}

/* History screen — "Pointages du jour" timeline */
function HistoryScreen() {
  const events = [
    { type: "Prise de poste", time: "08:42", icon: LogIn, color: "#6C5CE7" },
    { type: "Début pause", time: "12:15", icon: Coffee, color: "#FF9F0A" },
    { type: "Reprise", time: "13:02", icon: Briefcase, color: "#0A84FF" },
  ];

  return (
    <div className="h-full overflow-hidden">
      {/* Hero gradient (smaller) */}
      <div
        className="relative px-5 pt-12 pb-5"
        style={{
          background:
            "linear-gradient(135deg, #6C5CE7 0%, #8B7CF6 50%, #A78BFA 100%)",
        }}
      >
        <div className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-white/10" />

        <div className="relative">
          <p className="text-[10px] font-medium uppercase tracking-wider text-white/75">
            Historique
          </p>
          <h2 className="mt-1 text-[18px] font-bold tracking-tight text-white">
            Pointages du jour
          </h2>

          <div className="mt-4 grid grid-cols-3 gap-1.5">
            <Kpi label="Arrivée" value="08:42" />
            <Kpi label="Pause" value="47min" />
            <Kpi label="Travaillé" value="7h12" />
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-[#FAFAFB] px-4 pt-4 space-y-3">
        <div className="rounded-2xl border border-[#EDE8FA] bg-white p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[12px] font-semibold text-[#2D3436]">
              Aujourd&apos;hui
            </span>
            <span className="text-[10px] font-medium text-[#636E72]">
              3 étapes
            </span>
          </div>
          <div className="space-y-3">
            {events.map((e, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="relative">
                  <div
                    className="grid size-8 place-items-center rounded-full"
                    style={{ backgroundColor: e.color }}
                  >
                    <e.icon className="size-3.5 text-white" />
                  </div>
                  {i < events.length - 1 && (
                    <span className="absolute left-1/2 top-full h-3 w-px -translate-x-1/2 bg-[#E5DFF7]" />
                  )}
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <span className="text-[12px] font-medium text-[#2D3436]">
                    {e.type}
                  </span>
                  <span className="text-[13px] font-bold tabular-nums text-[#2D3436]">
                    {e.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live timer card */}
        <div className="flex items-center justify-between rounded-2xl bg-white border border-[#EDE8FA] px-3.5 py-3">
          <div className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#6C5CE7]/70" />
              <span className="relative size-2 rounded-full bg-[#6C5CE7]" />
            </span>
            <span className="text-[9px] font-bold uppercase tracking-wider text-[#636E72]">
              EN COURS
            </span>
          </div>
          <span className="text-[16px] font-bold tabular-nums text-[#2D3436]">
            7h12:48
          </span>
        </div>
      </div>
    </div>
  );
}
