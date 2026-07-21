'use client'

import { motion } from 'framer-motion'
import {
  ClipboardList,
  Stethoscope,
  HeartPulse,
  TrendingUp,
  Trophy,
} from 'lucide-react'
import { business } from '@/lib/business'
import { FadeUp } from '@/components/animations/FadeUp'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const EASE = [0.16, 1, 0.3, 1] as const

// The real job of each phase — a focus keyword the reader can hold onto.
const phaseMeta = [
  { icon: ClipboardList, focus: 'Baseline' },
  { icon: Stethoscope, focus: 'Root cause' },
  { icon: HeartPulse, focus: 'Active care' },
  { icon: TrendingUp, focus: 'Progressive load' },
  { icon: Trophy, focus: 'Prevention' },
]

// Plotted points for the ascending route (SVG user space). The climb encodes
// rising function/confidence — low and limited at the start, peak at the end.
const NODES = [
  { x: 100, y: 222 },
  { x: 300, y: 178 },
  { x: 500, y: 134 },
  { x: 700, y: 90 },
  { x: 900, y: 46 },
]
const ASCENT_PATH =
  'M100,222 C180,218 224,182 300,178 C376,174 420,138 500,134 C580,130 624,94 700,90 C776,86 820,52 900,46'

export function RecoveryJourney() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="on-dark relative overflow-hidden py-28 md:py-32">
      {/* Atmosphere */}
      <div className="grid-bg absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <FadeUp>
            <span className="mb-6 inline-flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              <span className="h-px w-6 bg-cyan-400/70" />
              Your Path
              <span className="h-px w-6 bg-cyan-400/70" />
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mb-6 font-display text-4xl font-bold leading-[1.03] tracking-tight text-white md:text-5xl lg:text-6xl">
              Recovery is a{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                climb
              </span>
              , not a switch.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg leading-relaxed text-mist/80">
              Five deliberate phases carry you from the first assessment to lasting,
              pain-free performance — each one measured, each one earned.
            </p>
          </FadeUp>
        </div>

        {/* Desktop: the ascending route */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="relative aspect-[1000/280]">
              <svg
                viewBox="0 0 1000 280"
                className="absolute inset-0 h-full w-full overflow-visible"
                role="img"
                aria-label="A rising path through five phases of recovery, from first assessment to peak performance"
              >
                <defs>
                  <linearGradient id="ascentStroke" x1="0" y1="1" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4bc4db" />
                    <stop offset="55%" stopColor="#4fa8d5" />
                    <stop offset="100%" stopColor="#7fd6e7" />
                  </linearGradient>
                  <filter id="ascentGlow" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="5" result="b" />
                    <feMerge>
                      <feMergeNode in="b" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Faint full track */}
                <path
                  d={ASCENT_PATH}
                  fill="none"
                  stroke="rgba(200,212,232,0.14)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Glowing route that draws on entry */}
                <motion.path
                  d={ASCENT_PATH}
                  fill="none"
                  stroke="url(#ascentStroke)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#ascentGlow)"
                  initial={reducedMotion ? false : { pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-120px' }}
                  transition={{ pathLength: { duration: 1.8, ease: EASE }, opacity: { duration: 0.4 } }}
                />

                {/* Pulse of light travelling up the route */}
                {!reducedMotion && (
                  <circle r="5" fill="#bff0fa" opacity="0" filter="url(#ascentGlow)">
                    <animateMotion dur="7s" repeatCount="indefinite" calcMode="linear" begin="1.6s" path={ASCENT_PATH} />
                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.92;1" dur="7s" repeatCount="indefinite" begin="1.6s" />
                  </circle>
                )}

                {/* Milestone nodes */}
                {NODES.map((n, i) => (
                  <motion.g
                    key={i}
                    initial={reducedMotion ? false : { opacity: 0, scale: 0.4 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-120px' }}
                    transition={{ delay: 0.5 + i * 0.28, duration: 0.5, ease: EASE }}
                    style={{ transformOrigin: `${n.x}px ${n.y}px` }}
                  >
                    <circle cx={n.x} cy={n.y} r="16" fill="#4bc4db" opacity="0.16" />
                    <circle cx={n.x} cy={n.y} r="9" fill="#0b1018" stroke="#7fd6e7" strokeWidth="2" />
                    <circle cx={n.x} cy={n.y} r="3.5" fill="#7fd6e7" />
                    <text
                      x={n.x}
                      y={n.y - 24}
                      textAnchor="middle"
                      fill="#9fe3f0"
                      style={{ fontSize: '15px', fontWeight: 700, fontFamily: 'var(--font-space-grotesk), sans-serif', letterSpacing: '0.06em' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </text>
                  </motion.g>
                ))}
              </svg>

              {/* Qualitative bookends */}
              <span className="absolute bottom-[2%] left-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-mist/70">
                In pain · limited
              </span>
              <span className="absolute right-0 -top-8 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-cyan-200">
                Peak performance
              </span>
            </div>

            {/* Aligned phase cards */}
            <div className="mt-8 grid grid-cols-5 gap-4">
              {business.journey.map((step, i) => {
                const meta = phaseMeta[i] ?? phaseMeta[0]
                const Icon = meta.icon
                return (
                  <motion.article
                    key={step.step}
                    initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ delay: 0.6 + i * 0.28, duration: 0.6, ease: EASE }}
                    className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-cyan-400/40 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="font-display text-xl font-bold text-cyan-300">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="mt-1 block font-mono text-[0.62rem] uppercase tracking-[0.14em] text-mist/50">
                          {meta.focus}
                        </span>
                      </div>
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300 transition-colors duration-300 group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white">
                        <Icon className="h-5 w-5" strokeWidth={1.75} />
                      </span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-white">
                      {step.step}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist/70">{step.description}</p>
                  </motion.article>
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile: vertical glowing timeline */}
        <div className="relative pl-9 lg:hidden">
          <div className="absolute bottom-3 left-[9px] top-3 w-px bg-gradient-to-b from-cyan-300/70 via-blue-400/50 to-blue-500/30" />
          {business.journey.map((step, i) => {
            const meta = phaseMeta[i] ?? phaseMeta[0]
            const Icon = meta.icon
            return (
              <motion.article
                key={step.step}
                initial={reducedMotion ? false : { opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, ease: EASE }}
                className="relative pb-10 last:pb-0"
              >
                <span className="absolute -left-9 top-1 flex h-[18px] w-[18px] items-center justify-center">
                  <span className="absolute h-[18px] w-[18px] rounded-full bg-cyan-400/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300 ring-2 ring-[#0b1018]" />
                </span>
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-display text-lg font-bold text-cyan-300">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-300">
                    <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-mist/50">
                    {meta.focus}
                  </span>
                </div>
                <h3 className="font-display text-xl font-bold tracking-tight text-white">{step.step}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-mist/70">{step.description}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
