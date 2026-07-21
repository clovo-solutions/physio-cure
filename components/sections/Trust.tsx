'use client'

import { motion } from 'framer-motion'
import { business } from '@/lib/business'
import { AnimatedCounter } from '@/components/animations/AnimatedCounter'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Trust() {
  const reducedMotion = useReducedMotion()

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-grey-50/50 to-transparent" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-500 mb-4 block">
            Trusted Care
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-graphite-900">
            Numbers That Speak
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {business.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] }}
              className="text-center group"
            >
              <div className="relative inline-block">
                <div className="text-5xl md:text-6xl font-display font-bold text-graphite-900 mb-3">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2.5}
                  />
                </div>
                <motion.div
                  className="absolute -inset-4 rounded-2xl bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <p className="text-sm md:text-base text-graphite-500 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
