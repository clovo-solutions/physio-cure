import { Hero } from '@/components/sections/Hero'
import { Trust } from '@/components/sections/Trust'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { RecoveryJourney } from '@/components/sections/RecoveryJourney'
import { WhyChoose } from '@/components/sections/WhyChoose'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import { generateStructuredData } from '@/lib/structured-data'

export default function Home() {
  const structuredData = generateStructuredData()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <Trust />
      <About />
      <Services />
      <RecoveryJourney />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}
