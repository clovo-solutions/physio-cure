'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, ExternalLink, CalendarCheck } from 'lucide-react'
import { business } from '@/lib/business'
import { FadeUp } from '@/components/animations/FadeUp'
import { useReducedMotion } from '@/hooks/useReducedMotion'

export function Contact() {
  const reducedMotion = useReducedMotion()

  const contactItems = [
    {
      icon: MapPin,
      label: 'Address',
      value: business.address.full,
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address.full)}`,
      external: true,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: business.phone,
      href: `tel:${business.phone.replace(/\s/g, '')}`,
      external: false,
    },
    {
      icon: Mail,
      label: 'Email',
      value: business.email,
      href: `mailto:${business.email}`,
      external: false,
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Mon – Fri: 9 AM – 7 PM',
      href: null,
      external: false,
    },
  ]

  return (
    <section id="contact" className="relative py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <FadeUp>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-500 mb-4 block">
              Get in Touch
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-graphite-900 mb-6">
              Start Your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Recovery.
              </span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg text-graphite-500 leading-relaxed">
              Ready to move without limits? Book your appointment today 
              and take the first step toward lasting recovery.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={reducedMotion ? {} : { opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noopener noreferrer' : undefined}
                    className="group flex items-start gap-5 p-6 rounded-2xl bg-grey-50 hover:bg-white hover:shadow-lg hover:shadow-graphite-900/5 hover:border-grey-200 border border-transparent transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-400/10 transition-colors duration-300">
                      <item.icon className="w-5 h-5 text-cyan-500" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-graphite-400 mb-1">
                        {item.label}
                      </p>
                      <p className="font-display font-semibold text-graphite-900 group-hover:text-cyan-600 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                    {item.external && (
                      <ExternalLink className="w-4 h-4 text-graphite-300 group-hover:text-cyan-500 transition-colors duration-300 flex-shrink-0 mt-1" />
                    )}
                  </a>
                ) : (
                  <div className="flex items-start gap-5 p-6 rounded-2xl bg-grey-50">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-cyan-500" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-graphite-400 mb-1">
                        {item.label}
                      </p>
                      <p className="font-display font-semibold text-graphite-900">
                        {item.value}
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* CTA Card */}
            <motion.div
              initial={reducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="p-8 rounded-2xl bg-graphite-900 text-white"
            >
              <h3 className="font-display font-bold text-xl mb-3">Book Your Appointment</h3>
              <p className="text-grey-400 text-sm mb-6 leading-relaxed">
                Take the first step toward pain-free movement. Our team is ready to help you recover.
              </p>
              <button
                type="button"
                data-cal-link={business.calLink}
                data-cal-config='{"layout":"month_view"}'
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-graphite-900 font-semibold rounded-full hover:bg-grey-100 transition-colors duration-300"
              >
                <CalendarCheck className="w-4 h-4" />
                Book Appointment
              </button>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            initial={reducedMotion ? {} : { opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="relative"
          >
            <div className="flex h-full min-h-[440px] flex-col overflow-hidden rounded-[2rem] border border-grey-100 bg-white shadow-sm">
              {/* Clinic photo */}
              <img
                src="/images/clinic.jpg"
                alt={`${business.name} clinic interior`}
                className="h-44 w-full flex-shrink-0 object-cover"
                loading="lazy"
              />

              {/* Live map */}
              <iframe
                title={`Map showing ${business.name}`}
                src={`https://maps.google.com/maps?q=${encodeURIComponent(business.address.full)}&z=15&output=embed`}
                className="w-full flex-1 border-0 grayscale-[0.2]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />

              {/* Address bar */}
              <div className="flex items-center justify-between gap-4 border-t border-grey-100 p-5">
                <div className="min-w-0">
                  <p className="font-display font-semibold text-graphite-900 truncate">
                    {business.name}
                  </p>
                  <p className="truncate text-sm text-graphite-500">
                    {business.address.full}
                  </p>
                </div>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-grey-200 bg-white px-5 py-2.5 text-sm font-semibold text-graphite-700 transition-all duration-300 hover:border-cyan-300 hover:text-cyan-600"
                >
                  Directions
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
