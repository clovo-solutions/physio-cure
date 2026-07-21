'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { business } from '@/lib/business'
import { FadeUp } from '@/components/animations/FadeUp'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const reducedMotion = useReducedMotion()

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % business.testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + business.testimonials.length) % business.testimonials.length)
  }, [])

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(next, 6000)
    return () => clearInterval(interval)
  }, [next])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  }

  const testimonial = business.testimonials[current]
  const initials = testimonial.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()

  return (
    <section className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-500 mb-4 block">
              Testimonials
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-graphite-900">
              Patient
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {' '}Stories.
              </span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-5 inline-flex items-center gap-2.5 text-sm text-graphite-500">
              <span className="flex items-center gap-0.5 text-amber-400">
                {[0, 1, 2, 3, 4].map((n) => (
                  <Star key={n} className="h-4 w-4 fill-current" />
                ))}
              </span>
              <span>
                <span className="font-semibold text-graphite-900">
                  {business.reviews.rating.toFixed(1)}
                </span>{' '}
                · {business.reviews.count} {business.reviews.source} reviews
              </span>
            </div>
          </FadeUp>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-grey-50 to-white border border-grey-100 p-8 md:p-16">
            {/* Large Quote */}
            <Quote className="absolute top-8 right-8 w-16 h-16 text-cyan-400/10" strokeWidth={1} />

            {/* Height is reserved for the tallest testimonial so the card never
                resizes between slides. An invisible sizer stacks every quote in
                one grid cell; the animated slide is overlaid on top. */}
            <div className="relative">
              <div className="invisible grid" aria-hidden>
                {business.testimonials.map((t, i) => (
                  <div key={i} className="col-start-1 row-start-1">
                    <p className="text-xl md:text-2xl leading-relaxed font-display font-medium mb-8">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-full" />
                      <div>
                        <div className="font-display font-semibold">{t.name}</div>
                        <div className="text-sm">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute inset-0">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current}
                    custom={direction}
                    variants={reducedMotion ? {} : variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
                  >
                    <blockquote className="relative">
                      <p className="text-xl md:text-2xl text-graphite-700 leading-relaxed font-display font-medium mb-8">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                      <footer className="flex items-center gap-4">
                        <div
                          aria-hidden
                          className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 font-display text-lg font-semibold text-white ring-2 ring-white shadow-md shadow-graphite-900/5"
                        >
                          {initials}
                        </div>
                        <div>
                          <cite className="not-italic font-display font-semibold text-graphite-900">
                            {testimonial.name}
                          </cite>
                          <p className="text-sm text-graphite-500">{testimonial.role}</p>
                        </div>
                      </footer>
                    </blockquote>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center gap-2">
                {business.testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1)
                      setCurrent(i)
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current
                        ? 'w-8 bg-cyan-400'
                        : 'bg-grey-300 hover:bg-grey-400'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-12 h-12 rounded-full border border-grey-200 flex items-center justify-center hover:bg-grey-50 hover:border-grey-300 transition-all duration-300"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5 text-graphite-600" />
                </button>
                <button
                  onClick={next}
                  className="w-12 h-12 rounded-full border border-grey-200 flex items-center justify-center hover:bg-grey-50 hover:border-grey-300 transition-all duration-300"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5 text-graphite-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
