'use client'

import { business } from '@/lib/business'
import { FadeUp } from '@/components/animations/FadeUp'
import { Logo } from '@/components/layout/Logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-graphite-900 text-white overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="text-[20vw] font-display font-bold text-white/[0.02] whitespace-nowrap">
          {business.name}
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <FadeUp className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Logo className="h-10 w-10 text-white" />
              <span className="font-display font-semibold text-lg">{business.name}</span>
            </div>
            <p className="text-grey-400 text-sm leading-relaxed max-w-xs">
              {business.description}
            </p>
          </FadeUp>

          {/* Navigation */}
          <FadeUp delay={0.1}>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-grey-300">
              Navigation
            </h4>
            <ul className="space-y-3">
              {['Home', 'Services', 'About', 'FAQ', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-grey-400 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </FadeUp>

          {/* Contact */}
          <FadeUp delay={0.2}>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-grey-300">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="text-grey-400">
                {business.address.street}<br />
                {business.address.city}, {business.address.region}<br />
                {business.address.country}
              </li>
              <li>
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="text-grey-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="text-grey-400 hover:text-cyan-400 transition-colors duration-300"
                >
                  {business.email}
                </a>
              </li>
            </ul>
          </FadeUp>

          {/* Hours */}
          <FadeUp delay={0.3}>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-6 text-grey-300">
              Hours
            </h4>
            <ul className="space-y-3 text-sm text-grey-400">
              <li className="flex justify-between">
                <span>Mon – Fri</span>
                <span className="text-white">9 AM – 7 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span className="text-grey-500">Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span className="text-grey-500">Closed</span>
              </li>
            </ul>
          </FadeUp>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-grey-500 text-sm">
            © {currentYear} {business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {Object.entries(business.social).map(([platform, url]) => (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-500 hover:text-white transition-colors duration-300 text-sm capitalize"
                aria-label={`Follow us on ${platform}`}
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
