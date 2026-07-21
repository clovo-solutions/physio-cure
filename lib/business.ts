export const business = {
  name: 'Physio Cure',
  tagline: 'Healing Through Motion',
  description: 'Evidence-based physiotherapy, rehabilitation, movement restoration and injury prevention in Larnaca, Cyprus.',

  address: {
    street: 'Makariou 55',
    city: 'Livadia',
    region: 'Larnaca',
    country: 'Cyprus',
    full: 'Makariou 55, Livadia, Larnaca, Cyprus',
  },

  phone: '+357 99 130554',
  email: 'physiocureRT@gmail.com',

  // Cal.com booking page slug — powers the "Book appointment" popup (data-cal-link).
  calLink: 'clovo-solutions-7teskm',

  hours: {
    monday: '9:00 AM – 7:00 PM',
    tuesday: '9:00 AM – 7:00 PM',
    wednesday: '9:00 AM – 7:00 PM',
    thursday: '9:00 AM – 7:00 PM',
    friday: '9:00 AM – 7:00 PM',
    saturday: 'Closed',
    sunday: 'Closed',
  },

  coordinates: {
    lat: 34.9231,
    lng: 33.6232,
  },

  social: {
    facebook: 'https://www.facebook.com/PhysiocureRT/',
    instagram: 'https://www.instagram.com/physiocure_livadia/',
  },

  stats: [
    { label: 'Years of Experience', value: 12, suffix: '+' },
    { label: 'Patients Helped', value: 3500, suffix: '+' },
    { label: 'Treatment Success', value: 96, suffix: '%' },
    { label: 'Personalized Care', value: 100, suffix: '%' },
  ],

  services: [
    {
      title: 'Sports Injury Rehabilitation',
      description: 'Specialized recovery programs for athletes and active individuals. Return to peak performance with targeted, sport-specific rehabilitation.',
      icon: 'Activity',
    },
    {
      title: 'Manual Therapy',
      description: 'Hands-on techniques including joint mobilization, soft tissue manipulation, and myofascial release to restore movement and reduce pain.',
      icon: 'Hand',
    },
    {
      title: 'Dry Needling',
      description: 'Precision-targeted trigger point therapy using fine needles to release muscle tension, improve range of motion, and accelerate healing.',
      icon: 'Target',
    },
    {
      title: 'Back & Neck Pain',
      description: 'Comprehensive assessment and treatment of spinal conditions. Evidence-based approaches to resolve chronic and acute pain.',
      icon: 'Bone',
    },
    {
      title: 'Post Surgical Rehabilitation',
      description: 'Structured recovery protocols following orthopedic surgery. Restore strength, mobility, and function with expert-guided rehabilitation.',
      icon: 'HeartPulse',
    },
    {
      title: 'Posture Assessment',
      description: 'Detailed postural analysis and correction programs. Address imbalances before they become injuries with personalized interventions.',
      icon: 'UserCheck',
    },
    {
      title: 'Joint Mobilisation',
      description: 'Gentle, controlled movements to restore joint function. Reduce stiffness and improve mobility in affected joints.',
      icon: 'Move',
    },
    {
      title: 'Exercise Therapy',
      description: 'Individualized exercise prescriptions designed to correct movement patterns, build resilience, and prevent future injury.',
      icon: 'Dumbbell',
    },
    {
      title: 'Balance & Mobility Training',
      description: 'Progressive programs to enhance stability, coordination, and functional movement for all ages and activity levels.',
      icon: 'Scale',
    },
  ],

  journey: [
    { step: 'Assessment', description: 'Comprehensive evaluation of your condition, movement patterns, and goals.' },
    { step: 'Diagnosis', description: 'Clear identification of the root cause with evidence-based clinical reasoning.' },
    { step: 'Treatment', description: 'Personalized intervention plan combining manual therapy and targeted exercises.' },
    { step: 'Recovery', description: 'Progressive rehabilitation with regular reassessment and plan adjustments.' },
    { step: 'Performance', description: 'Return to activity with confidence, equipped with prevention strategies.' },
  ],

  whyChoose: [
    {
      title: 'Evidence-Based Treatment',
      description: 'Every intervention is grounded in current research and clinical best practices. We do not follow trends—we follow science.',
    },
    {
      title: 'Individual Care',
      description: 'No two bodies are the same. Your treatment plan is uniquely tailored to your condition, goals, and lifestyle.',
    },
    {
      title: 'Modern Techniques',
      description: 'Continuous professional development ensures you receive the most advanced and effective physiotherapy methods available.',
    },
    {
      title: 'Comfortable Environment',
      description: 'Our clinic is designed for calm and focus. Healing happens best in a space where you feel at ease.',
    },
    {
      title: 'Long-Term Recovery',
      description: 'We do not just treat symptoms. We address root causes and equip you with the knowledge to stay pain-free.',
    },
  ],

  // Real 5-star Google reviews (lightly cleaned for display).
  testimonials: [
    {
      name: 'Ellie',
      role: 'Recovered from a tibia fracture',
      text: 'I had a broken tibia and started physiotherapy as soon as the cast came off — within three weeks I was walking without any problems. Rafael explains each step of the treatment in a simple, understandable way, and the sessions are always effective. The space is clean, comfortable and fully equipped. I highly recommend it!',
    },
    {
      name: 'Andri Stavrou',
      role: 'Rehabilitation patient',
      text: 'Rafael and Tasos are excellent professionals, with ethics and genuine respect for the patient. Their approach is fully personalized, with real attention to detail and interest in each person’s recovery. Professionalism, human connection, and real results — the best. A truly remarkable physiotherapy centre.',
    },
    {
      name: 'Natasha Bosman',
      role: 'Reformer Pilates client',
      text: 'Reformer Pilates at PhysioCure with Christina is amazing! I never enjoyed Pilates until training with her — she makes the classes challenging, interesting and fun, and she’s incredibly knowledgeable if you have any injury questions.',
    },
    {
      name: 'Chrism',
      role: 'Post-fracture recovery',
      text: 'After a fracture and two months of inactivity, I noticed a difference from my very first visit — I’m now walking normally again. Excellent professionals.',
    },
    {
      name: 'Polina B.',
      role: 'Booked care for her mother',
      text: 'A wonderful experience for my mother with Dr. Tasos. Kind, attentive and professional from start to finish.',
    },
    {
      name: 'Eleftherios Marinou',
      role: 'Physiotherapy patient',
      text: 'A fantastic experience and perfect collaboration with the physiotherapists. The welcoming environment puts you at ease and makes you feel safe throughout your treatment.',
    },
  ],

  reviews: { rating: 5.0, count: 47, source: 'Google' },

  faq: [
    {
      question: 'What should I expect during my first visit?',
      answer: 'Your initial session includes a comprehensive assessment where we discuss your history, perform physical tests, and establish your goals. You will leave with a clear understanding of your condition and a personalized treatment plan.',
    },
    {
      question: 'How many sessions will I need?',
      answer: 'Treatment duration varies based on your condition, severity, and goals. After your assessment, we provide a transparent estimate. Many patients notice improvement within 3–6 sessions.',
    },
    {
      question: "Do I need a doctor's referral?",
      answer: 'No referral is necessary. You can book directly with us. However, if you have medical documentation from your physician, please bring it along as it helps inform your treatment.',
    },
    {
      question: 'What should I wear to my appointment?',
      answer: 'Wear comfortable, loose-fitting clothing that allows easy movement. For lower body conditions, bring shorts. For upper body issues, a tank top or t-shirt works best.',
    },
    {
      question: 'Is dry needling painful?',
      answer: 'Most patients describe dry needling as a brief, mild discomfort followed by immediate relief. The needles are extremely fine, and the sensation is nothing like an injection.',
    },
    {
      question: 'Do you treat chronic conditions?',
      answer: 'Absolutely. We specialize in both acute injuries and chronic pain management. Our evidence-based approach addresses the underlying causes of persistent conditions, not just the symptoms.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, card payments, and bank transfers. We also work with most major insurance providers. Contact us to confirm coverage for your specific plan.',
    },
  ],

  seo: {
    title: 'Physio Cure | Evidence-Based Physiotherapy in Larnaca, Cyprus',
    description: 'Premium physiotherapy clinic in Livadia, Larnaca. Sports rehabilitation, manual therapy, dry needling, and personalized movement restoration. Book your appointment today.',
    keywords: 'physiotherapy Larnaca, physiotherapist Cyprus, sports injury rehab, manual therapy, dry needling, back pain treatment, post-surgical rehab, posture correction',
    ogImage: '/og-image.jpg',
    twitterHandle: '@physiocure',
  },
} as const

export type Business = typeof business
