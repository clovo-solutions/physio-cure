'use client'

import { motion } from 'framer-motion'
import { BookOpen, User, Cpu, Home, Shield, ShieldCheck } from 'lucide-react'
import { business } from '@/lib/business'
import { FadeUp } from '@/components/animations/FadeUp'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const icons = [BookOpen, User, Cpu, Home, Shield]
// A one-word classification for each commitment — real structure, not a sequence.
const tags = ['Method', 'Care', 'Technique', 'Environment', 'Outcome']
// The two commitments that define the clinic's philosophy get featured tiles.
const wide = [true, false, false, false, true]

const EASE = [0.25, 0.1, 0.25, 1.0] as const

export function WhyChoose() {
  const reducedMotion = useReducedMotion()

  const reveal = (i: number) => ({
    initial: reducedMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { delay: i * 0.07, duration: 0.55, ease: EASE },
  })

  return (
    <section className="relative overflow-hidden bg-grey-50 py-28 md:py-32">
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-blue-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <FadeUp>
              <span className="mb-6 inline-flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
                <span className="h-px w-6 bg-cyan-500" />
                Why Physio Cure
                <span className="text-graphite-300">/ 05</span>
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-display text-4xl font-bold leading-[1.03] tracking-tight text-graphite-900 md:text-5xl lg:text-6xl">
                Care built on{' '}
                <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
                  principles
                </span>
                , not promises.
              </h2>
            </FadeUp>
          </div>
          <div className="lg:col-span-5">
            <FadeUp delay={0.2}>
              <p className="text-lg leading-relaxed text-graphite-500 lg:border-l lg:border-grey-200 lg:pl-8">
                Five commitments shape every treatment plan — the reasons patients refer
                their family, and come back for whatever life throws at them next.
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Bento */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {/* Photo tile — tall anchor */}
          <motion.div {...reveal(0)} className="relative overflow-hidden rounded-3xl bg-graphite-900 shadow-lg sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:min-h-[26rem]">
            <img
              src="/images/clinic.jpg"
              alt="The Physio Cure clinic — a calm, purpose-built treatment space"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/25 to-blue-800/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/85 via-graphite-900/10 to-transparent" />

            {/* Credential */}
            <div className="glass absolute right-5 top-5 flex items-center gap-2.5 rounded-2xl border border-white/50 px-3.5 py-2.5 shadow-lg">
              <ShieldCheck className="h-4 w-4 text-mint-600" strokeWidth={2} />
              <span className="text-xs font-semibold text-graphite-800">Registered &amp; insured</span>
            </div>

            {/* Caption */}
            <div className="absolute inset-x-6 bottom-6">
              <p className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-cyan-200/90">Livadia · Larnaca</p>
              <p className="mt-1 font-display text-2xl font-semibold leading-tight text-white">
                A space designed for focus and recovery.
              </p>
            </div>
          </motion.div>

          {/* Principle tiles */}
          {business.whyChoose.map((item, i) => {
            const Icon = icons[i] ?? Shield
            const isWide = wide[i]
            return (
              <motion.article
                key={item.title}
                {...reveal(i + 1)}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-grey-200 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-blue-900/[0.06] lg:p-8 ${
                  isWide
                    ? 'bg-gradient-to-br from-white to-cyan-50/50 sm:col-span-2'
                    : 'bg-white'
                }`}
              >
                {/* Soft corner glow that blooms on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/25 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-grey-200 bg-white text-cyan-600 transition-colors duration-300 group-hover:border-transparent group-hover:bg-gradient-to-br group-hover:from-cyan-500 group-hover:to-blue-600 group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-graphite-400">
                    {tags[i]}
                  </span>
                </div>

                <h3
                  className={`font-display font-bold tracking-tight text-graphite-900 ${
                    isWide ? 'text-2xl md:text-[1.75rem]' : 'text-xl'
                  }`}
                >
                  {item.title}
                </h3>
                <p className={`mt-3 leading-relaxed text-graphite-500 ${isWide ? 'max-w-md text-base' : 'text-sm'}`}>
                  {item.description}
                </p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
