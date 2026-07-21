'use client'

import { motion } from 'framer-motion'
import { Stethoscope, Hand, UserCheck, Sparkles } from 'lucide-react'
import { FadeUp } from '@/components/animations/FadeUp'
import { StaggerContainer, StaggerItem } from '@/components/animations/StaggerContainer'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const floatingCards = [
  {
    icon: Stethoscope,
    title: 'Sports Rehabilitation',
    description: 'Return to peak performance',
    position: 'top-8 -right-4 lg:right-8',
    delay: 0.2,
  },
  {
    icon: Hand,
    title: 'Manual Therapy',
    description: 'Hands-on healing',
    position: 'bottom-24 -left-4 lg:left-4',
    delay: 0.4,
  },
  {
    icon: UserCheck,
    title: 'Posture Correction',
    description: 'Align your body',
    position: 'bottom-8 -right-4 lg:right-12',
    delay: 0.6,
  },
  {
    icon: Sparkles,
    title: 'Pain Management',
    description: 'Live pain-free',
    position: 'top-24 -left-4 lg:left-8',
    delay: 0.8,
  },
]

export function About() {
  const reducedMotion = useReducedMotion()

  return (
    <section id="about" className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-500 mb-4 block">
                About Us
              </span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-graphite-900 leading-tight mb-8">
                Movement is
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Medicine.
                </span>
              </h2>
            </FadeUp>

            <StaggerContainer className="space-y-6" staggerDelay={0.1} delayChildren={0.2}>
              <StaggerItem>
                <p className="text-lg text-graphite-500 leading-relaxed">
                  At Physio Cure, we believe that the body has an extraordinary capacity to heal 
                  when given the right guidance. Our approach combines clinical expertise with a 
                  deep understanding of human movement.
                </p>
              </StaggerItem>

              <StaggerItem>
                <p className="text-lg text-graphite-500 leading-relaxed">
                  Every treatment plan is built on evidence, tailored to your unique physiology, 
                  and designed with one goal: to help you move freely, without fear, and without 
                  limits.
                </p>
              </StaggerItem>

              <StaggerItem>
                <div className="flex flex-wrap gap-4 pt-4">
                  {['Evidence-Based Care', 'Personalized Treatment', 'Patient-Centered Rehab'].map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-grey-50 text-sm font-medium text-graphite-700 border border-grey-100"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-mint-400" />
                      {item}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>

          {/* Image with Floating Cards */}
          <div className="order-1 lg:order-2 relative">
            <FadeUp>
              <div className="relative aspect-square max-w-lg mx-auto">
                {/* Main Image */}
                <div className="absolute inset-4 rounded-[2.5rem] bg-grey-100 overflow-hidden">
                  <img
                    src="/images/about.jpg"
                    alt="Patient performing guided rehabilitation exercise"
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-graphite-900/15 via-transparent to-transparent" />
                </div>

                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-[2.5rem] border-2 border-dashed border-grey-200" />

                {/* Floating Cards */}
                {floatingCards.map((card) => (
                  <motion.div
                    key={card.title}
                    initial={reducedMotion ? {} : { opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: card.delay, duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                    className={`absolute ${card.position} z-10 hidden md:block`}
                  >
                    <motion.div
                      animate={reducedMotion ? {} : { y: [0, -8, 0] }}
                      transition={{ duration: 4 + card.delay, repeat: Infinity, ease: 'easeInOut' }}
                      className="glass rounded-2xl p-4 shadow-lg shadow-graphite-900/5 border border-white/50 min-w-[180px]"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                          <card.icon className="w-5 h-5 text-cyan-500" />
                        </div>
                        <div>
                          <p className="font-display font-semibold text-sm text-graphite-900">{card.title}</p>
                          <p className="text-xs text-graphite-500">{card.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  )
}
