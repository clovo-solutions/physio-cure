'use client'

import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion'
import { ArrowRight, Play, Star, ShieldCheck, Activity, ChevronDown } from 'lucide-react'
import { business } from '@/lib/business'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const EASE = [0.25, 0.1, 0.25, 1.0] as const

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
}

// Floating info cards pinned around the portrait.
const floatingCards = [
  {
    icon: Star,
    accent: 'text-amber-500',
    ring: 'bg-amber-400/10',
    title: '5.0 Rating',
    sub: '200+ patient reviews',
    position: 'top-6 -left-4 md:-left-10',
    delay: 0.9,
    drift: 5,
  },
  {
    icon: ShieldCheck,
    accent: 'text-mint-500',
    ring: 'bg-mint-400/10',
    title: 'Certified & Registered',
    sub: 'Licensed physiotherapists',
    position: 'bottom-28 -right-4 md:-right-12',
    delay: 1.1,
    drift: 7,
  },
  {
    icon: Activity,
    accent: 'text-cyan-500',
    ring: 'bg-cyan-400/10',
    title: 'Movement Restored',
    sub: 'Evidence-based recovery',
    position: 'bottom-1/4 -left-4 md:-left-8',
    delay: 1.3,
    drift: 6,
  },
] as const

// Interactive portrait — tilts toward the cursor for a subtle 3D parallax.
function PortraitCard({ reducedMotion }: { reducedMotion: boolean }) {
  const ref = useRef<HTMLDivElement>(null)

  const px = useMotionValue(0)
  const py = useMotionValue(0)
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [8, -8]), { stiffness: 150, damping: 18 })
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-10, 10]), { stiffness: 150, damping: 18 })
  // Image drifts opposite the tilt for depth — sprung so it eases instead of
  // snapping to each raw mouse sample (the source of the hover flicker).
  const imgX = useSpring(useTransform(px, [-0.5, 0.5], [14, -14]), { stiffness: 150, damping: 20 })
  const imgY = useSpring(useTransform(py, [-0.5, 0.5], [14, -14]), { stiffness: 150, damping: 20 })

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reducedMotion || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    px.set((e.clientX - r.left) / r.width - 0.5)
    py.set((e.clientY - r.top) / r.height - 0.5)
  }

  function handleLeave() {
    px.set(0)
    py.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      initial={reducedMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
      style={{ perspective: 1200 }}
      className="relative mx-auto w-full max-w-md lg:max-w-lg"
    >
      {/* Soft glow behind the frame */}
      <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-br from-cyan-300/40 via-blue-300/30 to-mint-300/40 blur-2xl" />

      <motion.div
        style={
          reducedMotion
            ? undefined
            : { rotateX, rotateY, transformStyle: 'preserve-3d', backfaceVisibility: 'hidden', willChange: 'transform' }
        }
        className="relative aspect-[4/5]"
      >
        {/* Dashed decorative ring */}
        <div className="absolute -inset-3 rounded-[2.75rem] border-2 border-dashed border-cyan-300/50" />

        {/* Portrait */}
        <div
          className="absolute inset-0 overflow-hidden rounded-[2.5rem] bg-grey-100 shadow-2xl shadow-blue-900/15 ring-1 ring-white/60"
          style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}
        >
          <motion.img
            src="/images/hero.webp"
            alt="Physiotherapist providing focused, hands-on treatment to a patient"
            style={
              reducedMotion
                ? undefined
                : { x: imgX, y: imgY, scale: 1.08, willChange: 'transform', backfaceVisibility: 'hidden' }
            }
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />
          {/* Legibility + brand wash */}
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/45 via-graphite-900/5 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-cyan-400/10" />

          {/* Caption chip on the photo */}
          <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3">
            <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/90 backdrop-blur">
              <Activity className="h-5 w-5 text-cyan-500" />
            </span>
            <div className="text-white">
              <p className="font-display text-sm font-semibold leading-tight">Personalized rehabilitation</p>
              <p className="text-xs text-white/80">One clinician. Your whole recovery.</p>
            </div>
          </div>
        </div>

        {/* Floating cards — lifted above the frame in 3D */}
        {floatingCards.map((card) => (
          <motion.div
            key={card.title}
            initial={reducedMotion ? false : { opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: card.delay, duration: 0.55, ease: EASE }}
            className={`absolute ${card.position} z-10 hidden sm:block`}
          >
            <motion.div
              animate={reducedMotion ? {} : { y: [0, -card.drift, 0] }}
              transition={{ duration: 4.5 + card.drift * 0.2, repeat: Infinity, ease: 'easeInOut' }}
              className="glass flex items-center gap-3 rounded-2xl border border-white/60 p-3.5 pr-5 shadow-xl shadow-graphite-900/10"
            >
              <span className={`inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl ${card.ring}`}>
                <card.icon className={`h-5 w-5 ${card.accent}`} />
              </span>
              <div>
                <p className="font-display text-sm font-semibold leading-tight text-graphite-900">{card.title}</p>
                <p className="text-xs text-graphite-500">{card.sub}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  const reducedMotion = useReducedMotion()
  const statRow = [business.stats[0], business.stats[1], business.stats[2]]

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-white via-grey-50 to-white"
    >
      {/* Drifting gradient orbs */}
      <motion.div
        aria-hidden
        animate={reducedMotion ? {} : { x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -left-32 top-10 h-[32rem] w-[32rem] rounded-full bg-cyan-300/30 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={reducedMotion ? {} : { x: [0, -50, 0], y: [0, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-24 bottom-0 h-[36rem] w-[36rem] rounded-full bg-blue-300/25 blur-3xl"
      />
      <div className="dot-bg absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-y-16 px-6 py-28 md:px-10 lg:grid-cols-2 lg:gap-x-16 lg:px-16 lg:py-32">
        {/* Text column */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full border border-grey-200 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-graphite-600 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-mint-500" />
              </span>
              Physiotherapy in Larnaca, Cyprus
            </span>
          </motion.div>

          <h1 className="mt-7 font-display font-bold leading-[0.95] tracking-tight text-graphite-900">
            <motion.span variants={item} className="block text-5xl sm:text-6xl lg:text-7xl">
              Move freely.
            </motion.span>
            <motion.span
              variants={item}
              className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-mint-500 bg-clip-text pb-[0.12em] text-5xl text-transparent sm:text-6xl lg:text-7xl"
            >
              Live fully.
            </motion.span>
          </h1>

          <motion.p variants={item} className="mt-7 max-w-lg text-lg leading-relaxed text-graphite-500">
            Evidence-based physiotherapy that measures how you move, uncovers what limits it,
            and rebuilds your range — so you can return to the life and sport you love.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <button
              type="button"
              data-cal-link={business.calLink}
              data-cal-config='{"layout":"month_view"}'
              className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/35 hover:brightness-105"
            >
              Book an appointment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group inline-flex items-center gap-2.5 rounded-full border border-grey-200 bg-white/60 px-6 py-3.5 text-sm font-semibold text-graphite-700 backdrop-blur transition-colors duration-300 hover:border-cyan-300 hover:text-cyan-600"
            >
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cyan-400/15">
                <Play className="h-3 w-3 fill-cyan-500 text-cyan-500" />
              </span>
              Explore our approach
            </a>
          </motion.div>

          {/* Trust cluster */}
          <motion.div variants={item} className="mt-9 flex items-center gap-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((n) => (
                <img
                  key={n}
                  src={`/images/avatar-${n}.jpg`}
                  alt=""
                  aria-hidden
                  className="h-10 w-10 rounded-full border-2 border-white object-cover shadow-sm"
                  loading="lazy"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-amber-400">
                {[0, 1, 2, 3, 4].map((n) => (
                  <Star key={n} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-0.5 text-xs text-graphite-500">
                Trusted by <span className="font-semibold text-graphite-700">3,500+</span> patients across Cyprus
              </p>
            </div>
          </motion.div>

          {/* Animated stats */}
          <motion.dl
            variants={item}
            className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-grey-200 pt-8"
          >
            {statRow.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-bold text-graphite-900 md:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
                  />
                </dt>
                <dd className="mt-1.5 text-xs uppercase tracking-wide text-graphite-500">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Portrait column */}
        <div className="relative">
          <PortraitCard reducedMotion={reducedMotion} />
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-[0.625rem] uppercase tracking-[0.24em] text-graphite-400">Scroll</span>
        <motion.div
          animate={reducedMotion ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-5 w-5 text-graphite-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
