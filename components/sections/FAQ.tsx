'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { business } from '@/lib/business'
import { FadeUp } from '@/components/animations/FadeUp'
import { useReducedMotion } from '@/hooks/useReducedMotion'

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  const reducedMotion = useReducedMotion()

  return (
    <div className="border-b border-grey-100 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="font-display font-semibold text-lg text-graphite-900 pr-8 group-hover:text-cyan-600 transition-colors duration-300">
          {question}
        </span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isOpen ? 'bg-cyan-400 text-white' : 'bg-grey-100 text-graphite-500 group-hover:bg-grey-200'
        }`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={reducedMotion ? {} : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reducedMotion ? {} : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-graphite-500 leading-relaxed pr-16">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-32 bg-grey-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side - Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-500 mb-4 block">
                FAQ
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="font-display font-bold text-4xl md:text-5xl text-graphite-900 mb-6">
                Common
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  Questions.
                </span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-lg text-graphite-500 leading-relaxed mb-8">
                Everything you need to know before your first visit. 
                Can not find what you are looking for? Reach out to us directly.
              </p>
            </FadeUp>
            <FadeUp delay={0.3}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-500 hover:text-cyan-600 transition-colors"
              >
                Contact us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                </svg>
              </a>
            </FadeUp>
          </div>

          {/* Right Side - Accordion */}
          <div className="bg-white rounded-3xl p-6 md:p-10 border border-grey-100">
            {business.faq.map((item, i) => (
              <FAQItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
