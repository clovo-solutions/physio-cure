'use client'

import { useId, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Activity,
  Hand,
  Target,
  Bone,
  HeartPulse,
  UserCheck,
  Move,
  Dumbbell,
  Scale,
  ArrowUpRight,
  Check,
} from 'lucide-react'
import { business } from '@/lib/business'
import { FadeUp } from '@/components/animations/FadeUp'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const iconMap: Record<string, React.ElementType> = {
  Activity,
  Hand,
  Target,
  Bone,
  HeartPulse,
  UserCheck,
  Move,
  Dumbbell,
  Scale,
}

// Clinical grouping + the three things each treatment actually addresses.
// This is the section's structural device — a real classification, not decoration.
const meta: Record<string, { tag: string; focus: [string, string, string] }> = {
  'Sports Injury Rehabilitation': { tag: 'Sports', focus: ['Return-to-sport testing', 'Load management', 'Reinjury prevention'] },
  'Manual Therapy': { tag: 'Hands-on', focus: ['Joint mobilisation', 'Soft-tissue release', 'Pain modulation'] },
  'Dry Needling': { tag: 'Technique', focus: ['Trigger-point release', 'Muscle tension', 'Range restoration'] },
  'Back & Neck Pain': { tag: 'Spine', focus: ['Acute & chronic pain', 'Disc & facet issues', 'Ergonomic retraining'] },
  'Post Surgical Rehabilitation': { tag: 'Post-op', focus: ['Orthopaedic recovery', 'Strength rebuilding', 'Swelling & scar care'] },
  'Posture Assessment': { tag: 'Assessment', focus: ['Full postural screen', 'Movement analysis', 'Corrective plan'] },
  'Joint Mobilisation': { tag: 'Hands-on', focus: ['Stiffness reduction', 'Capsular release', 'Mobility gains'] },
  'Exercise Therapy': { tag: 'Active', focus: ['Movement retraining', 'Progressive loading', 'Home programme'] },
  'Balance & Mobility Training': { tag: 'Active', focus: ['Fall prevention', 'Gait & stability', 'Confidence building'] },
}

const EASE = [0.25, 0.1, 0.25, 1.0] as const

// A fitting photo per treatment. See public/images/treatments/CREDITS.md for licensing.
const FALLBACK = { src: '/images/hero.webp', alt: 'Physiotherapy treatment' }
const serviceImages: Record<string, { src: string; alt: string }> = {
  'Sports Injury Rehabilitation': { src: '/images/treatments/sports-rehab.jpg', alt: 'Physiotherapist guiding a patient through resistance-band rehabilitation' },
  'Manual Therapy': { src: '/images/hero.webp', alt: 'Physiotherapist performing hands-on manual therapy' },
  'Dry Needling': { src: '/images/treatments/dry-needling.jpg', alt: 'Fine needles applied along the lower back during dry needling' },
  'Back & Neck Pain': { src: '/images/treatments/back-neck.jpg', alt: 'Physiotherapist performing hands-on treatment for back and neck pain' },
  'Post Surgical Rehabilitation': { src: '/images/treatments/post-surgical.jpg', alt: 'Patient doing guided resistance-band leg rehabilitation after surgery' },
  'Posture Assessment': { src: '/images/treatments/posture-assessment.jpg', alt: 'Physiotherapist assessing and treating a patient in a modern clinic' },
  'Joint Mobilisation': { src: '/images/treatments/joint-mobilisation.webp', alt: 'Physiotherapist mobilising a patient’s shoulder joint' },
  'Exercise Therapy': { src: '/images/about.jpg', alt: 'Patient performing guided rehabilitation exercise' },
  'Balance & Mobility Training': { src: '/images/treatments/balance-mobility.jpg', alt: 'Patient performing a mobility exercise during balance training' },
}

function Detail({
  service,
  panelId,
  className = '',
}: {
  service: (typeof business.services)[number]
  panelId?: string
  className?: string
}) {
  const Icon = iconMap[service.icon] || Activity
  const m = meta[service.title]
  const photo = serviceImages[service.title] ?? FALLBACK

  return (
    <div
      id={panelId}
      className={`overflow-hidden rounded-3xl border border-grey-200 bg-white shadow-xl shadow-blue-900/[0.06] ${className}`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,0.82fr)_minmax(0,1fr)]">
        {/* Photo */}
        <div className="relative min-h-[220px]">
          <img
            src={photo.src}
            alt={photo.alt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          {/* Brand tint + legibility (no blend mode — avoids repaint flicker) */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-800/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/55 via-transparent to-transparent" />

          {/* Category chip */}
          <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-graphite-700 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
            {m?.tag}
          </span>
          {/* Icon badge */}
          <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/95 shadow-lg backdrop-blur">
            <Icon className="h-6 w-6 text-cyan-600" strokeWidth={1.6} />
          </div>
        </div>

        {/* Content */}
        <div className="p-7 sm:p-8 lg:p-10">
          <h3 className="font-display text-2xl font-bold leading-tight tracking-tight text-graphite-900 md:text-3xl">
            {service.title}
          </h3>
          <p className="mt-3 text-[0.95rem] leading-relaxed text-graphite-500">{service.description}</p>

          {/* Focus points — what this treatment addresses */}
          <ul className="mt-6 space-y-2.5 border-t border-grey-100 pt-6">
            {m?.focus.map((f) => (
              <li key={f} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full bg-mint-400/15">
                  <Check className="h-3 w-3 text-mint-600" strokeWidth={3} />
                </span>
                <span className="text-sm leading-snug text-graphite-700">{f}</span>
              </li>
            ))}
          </ul>

          <button
            type="button"
            data-cal-link={business.calLink}
            data-cal-config='{"layout":"month_view"}'
            className="group mt-7 inline-flex items-center gap-2.5 rounded-full bg-graphite-900 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-cyan-600"
          >
            Book treatment
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  )
}

export function Services() {
  const reducedMotion = useReducedMotion()
  const [active, setActive] = useState(0)
  const panelId = useId()
  const services = business.services

  return (
    <section id="services" className="relative overflow-hidden bg-white py-28 md:py-32">
      {/* Ambient wash — single, faint, for continuity with the hero */}
      <div className="pointer-events-none absolute -right-40 top-24 h-[32rem] w-[32rem] rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Editorial header */}
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <FadeUp>
              <span className="mb-6 inline-flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
                <span className="h-px w-6 bg-cyan-500" />
                Treatments
                <span className="text-graphite-300">/ {String(services.length).padStart(2, '0')}</span>
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-display text-4xl font-bold leading-[1.03] tracking-tight text-graphite-900 md:text-5xl lg:text-6xl">
                Care for{' '}
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                  every stage
                </span>{' '}
                of recovery.
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-5">
            <FadeUp delay={0.2}>
              <p className="text-lg leading-relaxed text-graphite-500 lg:border-l lg:border-grey-200 lg:pl-8">
                Nine focused therapies. We assess first, then match the technique to your
                diagnosis, your goals, and the way you move.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Directory: index rail + detail panel */}
        <div className="mt-14 grid grid-cols-1 gap-x-16 gap-y-10 lg:mt-20 lg:grid-cols-12">
          {/* Index rail */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="mb-3 hidden items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.16em] text-graphite-400 lg:flex">
              <span>Index</span>
              <span>Select a treatment</span>
            </div>
            <ul className="border-t border-grey-200">
              {services.map((service, i) => {
                const isActive = active === i
                const m = meta[service.title]
                return (
                  <li key={service.title} className="border-b border-grey-200">
                    <button
                      type="button"
                      aria-expanded={isActive}
                      aria-controls={panelId}
                      onClick={() => setActive(i)}
                      className="group relative flex w-full items-center gap-4 py-5 pl-5 pr-2 text-left"
                    >
                      {/* Active spine */}
                      <span
                        aria-hidden
                        className={`absolute left-0 top-1/2 h-8 w-[2px] -translate-y-1/2 origin-center bg-cyan-500 transition-transform duration-300 ${
                          isActive ? 'scale-y-100' : 'scale-y-0'
                        }`}
                      />
                      <span className="w-[4.5rem] flex-none font-mono text-[0.68rem] uppercase tracking-[0.12em] text-graphite-400">
                        {m?.tag}
                      </span>
                      <span
                        className={`flex-1 font-display text-lg font-semibold tracking-tight transition-colors duration-200 md:text-xl ${
                          isActive ? 'text-cyan-600' : 'text-graphite-900 group-hover:text-graphite-900'
                        }`}
                      >
                        {service.title}
                      </span>
                      <ArrowUpRight
                        className={`h-5 w-5 flex-none transition-all duration-300 ${
                          isActive
                            ? 'text-cyan-500 opacity-100 translate-x-0'
                            : 'text-graphite-300 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0'
                        }`}
                      />
                    </button>

                    {/* Mobile inline detail (accordion) */}
                    <div className="lg:hidden">
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={reducedMotion ? false : { height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={reducedMotion ? undefined : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: EASE }}
                            className="overflow-hidden"
                          >
                            <Detail service={service} className="mb-6 mt-1" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Sticky detail panel (desktop) */}
          <div className="hidden lg:col-span-6 lg:block xl:col-span-7">
            <div className="sticky top-24">
              <motion.div
                key={active}
                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, ease: EASE }}
              >
                <Detail service={services[active]} panelId={panelId} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
